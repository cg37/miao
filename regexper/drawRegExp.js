function drawExpReg(node) {
  let  graphPadding = 10
  let lineWidth = 2
  function add(a, b){
    return a + b
  }


  function svgElt(tagName, attrs = {}){
    let tag = document.createElement('http://www.w3.org/2000/svg', tagName)
    svg.appendChild(tag)
    let key, val
    for ([key, val] of Object.entries(attrs)) {
      tag.setAttribute(key, val)
    }
    return tag
  }

  return drawRegExpGraph(node)


  function drawNodeGraph(node){
    if(Array.isArray(node)) return drawBranchesGraph(node)
    else if (node.type === 'Character') return drawCharacterGraph(node)
    else if (node.type === 'Quantifier') return drawQuantifierGraph(node)
    else if (node.type === 'characterClass') return draw
    //else if (node.type === 'Branch') return
  }
  function drawRegExpGraph(node) {
    let branchesGraph = drawBranchesGraph(node.branches)
    let box = branchesGraph.getBBox()
    let g = svgElt('g')

    let width = g.width + graphPadding * 5
    let height = g.height + graphPadding * 3

    let rect = svgElt('rect', {
      height: height,
      width: width,
      fill: node,
    })

    g.appendChild(rect)

    let line = svgElt()

    return g
  }
  function drawCharacterGraph(node) {
    let text = svgElt('text', {
      x: 0,
      y: 0,
      "dominant-baseline": "text-before-edge"
    })
    text.textContent = node.char

    let box = text.getBBox()

    let width = box.width + 10 * 2
    let height = box.height + 5 * 2
  }
  function drawBranchesGraph(node){

  }

  function drawQuantifierGraph(node){
    return 1
  }
}
