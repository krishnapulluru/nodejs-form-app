const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    const reqUrl = req.url;
    if(reqUrl==="/" || reqUrl==='/overview'){
        res.end("Index")
    } else if(reqUrl==="/prodcut"){
        res.end("prodcut-page")
    } else {
        res.writeHead(404 , "page not found");
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(8001,'localhost',()=>{
    console.log("server is loaded on port no 8001" )
})