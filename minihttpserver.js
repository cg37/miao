let net = require('net')

let server = net.createServer()
let port = 10087
server.on('connection', conn=>{
  console.log('connect recevied', conn.remoteAddress)

  conn.on('data', data=>{
    //console.log(data, data.toString())
    let recv = data.toString()
    let [header, ...body] = recv.split('\r\n\r\n')
    // console.log('header:',header)
    // console.log('header over')
    // console.log('*************************')
    // console.log('*************************')
    // console.log('*************************')
    // console.log('*************************')
    // console.log('*************************')

    let [firstLine, ...headers] = header.split('\r\n')
    console.log('firstLine\n', firstLine)
    console.log('firstLineend')
    console.log('*************************')
    console.log('*************************')
    console.log('*************************')
    console.log('*************************')
    console.log('*************************')
    let [method, url] = firstLine.split(' ')

    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write(`Data: ${new Date()}\r\n`)
    conn.write('Content-Type: text/html; charset=UTF-8\r\n')
    conn.write('\r\n')
    conn.write(`
      <h1>
      IT WORKS!
      </h1>
      <br>
      宁请求的方法是 ${method}
      <br>
      宁请求的路径是 ${url}
      <br>
      现在时间是: ${new Date()}
      </h1>
    `)
    conn.end()
  })
  conn.on('error', ()=>{

  })
})

server.listen(port, ()=>{
  console.log('server is listening at', port, 'port')
})
