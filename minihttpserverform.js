let net = require('net')
let fs = require('fs')



let server = net.createServer()
let port = 10086

let date = new Date()

let messages = []

server.on('connection', conn=>{
  console.log('接收到连接', conn.remoteAddress)

  conn.on('data', data=>{
    let recv = data.toString()
    // console.log(recv)
    console.log('remoteaddr',conn.remoteAddress)

    let [header, body] = recv.split('\r\n\r\n')

    let [firstLine, ...headerLines] = header.split('\r\n')
    console.log(firstLine)
    let headers = parseHeaders(headerLines)

    let [method, url] = firstLine.split(' ')

    let urlObj = new URL(`http://${headers.host}${url}`)
    urlObj.pathname = decodeURIComponent(urlObj.pathname)

    if (method === "GET" && urlObj.pathname === "/favicon.ico") {
      conn.write("HTTP/1.1 200 OK\r\n")
      conn.write('Content-Type: image/png\r\n')

      conn.write("\r\n")
      conn.write(fs.readFileSync("./icon.png"))
      conn.end()
      return
    }

    if (method === "POST" && urlObj.pathname === "/leave-message") {
      console.log(urlObj)
      let params = new URLSearchParams(body)
      let name = params.get("name")
      let message = params.get('message')
      let hostname = conn.remoteAddress
      let timeTamp = date
      messages.push({name, message, hostname, timeTamp})

      conn.write('HTTP/1.1 302 Found\r\n')
      conn.write('location:/\r\n')
      conn.end()
      return
    }

    if (method === 'POST' && urlObj.pathname === "/clearMsgBoard") {
      messages=[]

      conn.write("HTTP/1.1 302 Found\r\n")
      conn.write('location:/\r\n')
      conn.end()
      return
    }

    if (method === "GET" && urlObj.pathname === '/') {
      conn.write("HTTP/1.1 200 OK\r\n")
      conn.write("Content-Type: text/html; charset=UTF-8\r\n")
      conn.write(`Date: ${new Date()}\r\n`)
      conn.write("\r\n")
      conn.write(`
        <!Doctype html>
        <form method="POST" action="/leave-message">
          Name:<br>
          <input type="text" name="name"><br>
          Message:<br>
          <input type="text" name="message"><br>
          <button >submit</button>
          <button form='clearbutton'>clear Msg Board</button>
        </form>
        <form id="clearbutton" method="POST" action="/clearMsgBoard">
        </from>
        ${
          messages.map(msg=>{
            return `
              <fieldset>
                <legend>${msg.name}</legend>
                <div>${msg.message}</div>
                <hr>
                <span>from ${msg.hostname.slice(7)} at ${msg.timeTamp}</span>
              </fieldset>
            `
          }).join("\n")
        }
      `)
      conn.end()
      return
    }

    conn.write('HTTP/1.1 404 Not Found\r\n')
    conn.write('Content-Type: text/html; charset=UTF=8\r\n')
    conn.write('\r\n')
    conn.write('页面未找到')
    conn.end()
  })
  conn.on('error', ()=>{
  })
})

server.listen(port, ()=>{
  console.log('server is listening at', port, 'port')
})

function parseHeaders(headers) {
  let obj = {}
  for (let h of headers) {
    let [key, val] = h.split(': ')
    obj[key.toLowerCase()] = val
  }
  return obj
}
