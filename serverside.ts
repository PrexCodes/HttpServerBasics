import http from 'http'

const server = http.createServer();

server.on("connection", ()=>{
    console.log("Server has been Connected")
})

server.listen(4500, ()=>{
    console.log('')
    console.log("Server is now listening")
})