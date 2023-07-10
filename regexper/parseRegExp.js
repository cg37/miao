
/**
 *  node = {
 *    type: 'Quantifier/CaptureGroup/Character/CharacterClass/Branches
 *  }
 *  CaptureGroup = {
 *    type: 'CaptureGroup'
 *    start: 2,
 *    end: 5
 *    raw :'(aaa|bbb)'
 *    groupIndex: 2
 *    branches;[]
 *  }
 *
 *  Branch = {
 *    type: 'Branch'
 *    parts:
 * */
function parseRegExp(input){
  //let str = '(foo){2,55}?foo(b(ar)|baz|baa)[baz]'
  let str = input
  let i = 0
  let groupIndex = 1

  let branches = parseBranches()

  return {
    type: 'RegularExpression',
    start: 0,
    end: input.length,
    raw: input,
    branches: branches,
  }

  /**
   * node.type = Quantifier/ CaptureGroup/Character/CharacterClass/Branch
   *              量词                        字符          字符集
   * CaptureGroup = {
   *   type: captureGroup
   *   start:
   *   end
   *   raw: '(aaa|bbb)'
   *   groupIndex
   *   branches: []
   * }
   *
   * Branch{
   *   type: 'Branch'
   *   parts: [Character, CaptureGroup], branch
   * }
   * */

  function parseOnePart() {
    if (str[i] === '(') {
      return parseCaptureGroup()    // ()捕获分组
    }
    if (str[i] === '[') {
      return parseCharacterClass()  //[]字符集
    }
    if (str[i] === '{' || str[i] === '?' || str[i] === '+' || str[i] === '*' ) {
      return parseQuantifier()      //
    }
    return parseCharacter()
  }

  function parseCaptureGroup() {  //`()` 捕获分组
    let node = {
      type: 'CaptureGroup',
      start: i,
      end: 0,
      raw: '',
      branches: [],

      //  (?=exp)   正预测 先行断言 匹配某个位置，其后面的内容匹配表达式exp
      //  (?<=exp)  正回顾 后发断言 匹配一个位置，其前边的内容匹配表达式exp
      //  (?!foo)   负预测 先行断言，匹配某个位置，其后面的内容不匹配表达式exp
      //  (?<!foo)  负回顾 后发断言, 匹配某个位置, 其前面的内容不匹配表达式exp
      assertion: false,   //是否为零宽断言,
      positive: false,    //true: 正(预测/回顾); false: 负(预测/回顾)
      lookahead: false,   //true: 先行;         false: 后发

      groupIndex: -1,
      groupName: undefined,

      nonCapture: false
    }

    i++   //skip '('

    if (str[i] === '?') {
      i++
      if (str[i] === ':'){
        i++
        node.nonCapture = true
      } else if (str[i] === '=') { //正预测先行断言
        i++
        node.assertion = true
        node.positive = true
        node.lookahead = true
      } else if (str[i] === '!') { //负预测先行断言
        i++
        node.assertion = true
        node.positive = false
        node.lookahead = true
      } else if (str[i] === '<') {
        i++ //跳过'<'
        if (str[i] === '=') {     //(?<= 正回顾 后发断言
          i++
          node.assertion = true
          node.positive = true    //正回顾
          node.lookahead = false  //后发
        } else if (str[i] === '!') {  //(?<! 负回顾 后发断言 左边不满足条件
          i++
          node.assertion = true
          node.positive = false       //负回顾
          node.lookahead = false      //后发
        } else {
          let groupName = parseGroupName()
          if (groupName === '') {
            throw new SyntaxError('groupName 不能为空')
          }
          node.groupName = groupName
          i++ //跳过'>'
        }
      }
    }

    if (!node.nonCapture) {  //不是非捕获分组
      node.groupIndex = groupIndex++
    }

    node.branches = parseBranches()
    i++ //skip')'

    node.end = i
    node.raw = str.slice(node.start, node.end)
    return node
  }
  function parseBranches(){
    let branches = []
    if (str[i] === ')') return branches
    while (i < str.length) {
      let branch = parseBranch()
      branches.push(branch)
      if (str[i] === '|') {
        i++
        continue
      }
      if (str[i] === ')') {
        break
      }
    }
    return branches
  }
  function parseBranch(){
    let node = {
      type: 'branch',
      start: i,
      end: 0,
      raw: '',
      parts: [],
    }

    if (str[i] === '|' || str[i] === ')' || i >= str.length) {
      i++
      node.end = i
      node.raw = str.slice(node.start, node.end)
      return node
    }

    while(true) {
      let part = parseOnePart()
      if (part.type === 'Quantifier') {
        let repeatTarget = node.parts.pop()
        if (repeatTarget === undefined) {
          throw new SyntaxError(`no repeat part at ${i}`)
        }
        if (repeatTarget.type === 'Quantifier') {
          throw new SyntaxError(`Quantifier can not repeat at ${i}`)
        }
        part.repeatTarget = repeatTarget
        part.start = repeatTarget.start
        part.raw = str.slice(part.start, part.end)
      }
      node.parts.push(part)
      if(str[i] === '|' || str[i] === ')' || i >= str.length) {
        break
      }
    }

    node.end = i
    node.raw = str.slice(node.start, node.end)
    return node
  }
  function parseCharacter(){
    let node = {
      type: 'Character',
      start: i,
      end: 0,
      raw: '',
      char: str[i],
    }
    i++

    node.end = i
    node.raw = str.slice(node.start, node.end)
    return node
  }
  function parseCharacterClass(){  //解析[]
    let node = {
      type: 'characterClass',
      start: i,
      end: 0,
      raw: '',
      characters: [],
      invert: false, //取反
    }
    i++  //跳过[
    if (str[i] === '^') {
      node.invert = true
      i++
    }

    while (true) {
      if(str[i] === ']') {
        i++
        break
      }
      let char = parseCharacter()
      node.characters.push(char)

      if (str[i] === '-') {
        i++
        if (str[i] === ']'){
          char = parseCharacter()
          node.characters.push(char)
          continue
        }
        char = parseCharacter()
        let prevChar = node.characters.pop()
        if (prevChar > char) {
          throw new SyntaxError('prev Char can NOT bigger than char')
        }
        let rangeNode = {
          type: 'CharacterRange',
          start: prevChar.start,
          end: char.end,
          raw: str.slice(prevChar.start, char.end)
        }
        node.characters.push(rangeNode)
      }
    }
    node.end = i
    node.raw = str.slice(node.start, node.end)
    return node
  }
  function parseQuantifier(){
    let node = {
      type: 'Quantifier',
      start: i,
      end: 0,
      raw: '',
      min: 0,
      max: Infinity,
      greedy: false,  //贪婪匹配,
      repeatTarget: null
    }
    if (str[i] === '+') {
      i++
      node.min = 1
    } else if (str[i] === '*') {
      i++
    } else if (str[i] === '?') {
      i++
      node.max = 1
    } else if (str[i] === '{') {
      i++
      node.min = parseInteger()
      if (str[i] === '}') {
        node.min = node.max
        i++
      } else if (str[i] === ',') {
        i++
        if (str[i] === '}') {
          i++
        } else {
          node.max = parseInteger()
          i++
        }
      }
    }
    if (str[i] === '?') {
      node.greedy = true
      i++
    }
    node.end = i
    node.raw = str.slice(node.start, node.end)
    return node
  }
  function parseInteger(){
    let start = i
    while(str[i] >= '0' && str[i] <= '9') {
      i++
    }
    return parseInt(str.slice(start, i))
  }
  function parseGroupName(){
    let start = i
    while(str[i] !== '>'){
      i++
    }
    return str.slice(start, i)
  }
}
