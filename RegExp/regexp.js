const regex = /[A-Z]/g;
String.prototype.Mymatch = function(regex){
  let match = ''
  let res = []
  while((match = regex.exec(this)) !== null) {
    res.push(match[0])
  }
  console.log(res)
}
//paragraph.Mymatch(regex)
'AAA bbb DDD eee.'.Mymatch(regex)

String.prototype.mymatchAll = function(regex){

}


