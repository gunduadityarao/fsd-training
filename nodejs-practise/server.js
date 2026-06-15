const http=require('http');

http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Hello Aditya</b>")
        res.end();
    }
    if(req.url=="/add"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Student Added</b>")
        res.end();
    }
    if(req.url=="/delete"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Student deleted</b>")
        res.end();
    }
    if(req.url=="/update"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Student Updated</b>")
        res.end();
    }
}).listen(3000,()=>{
    console.log("server listening to port 3000...")
})