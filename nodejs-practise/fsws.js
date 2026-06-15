const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Hello Aditya</b>")
        res.end();
    }
    if(req.url=="/add"){
        fs.writeFileSync("students.txt","student added",(err)=>{
            if(err){
                console.log("failed to add");return;
            }
            console.log("student added");
        })


        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Student Added</b>")
        res.end();
    }
    if(req.url=="/delete"){
        fs.unlinkSync("students.txt",(err)=>{
            if(err){
                console.log("failed to delete");return;
            }
            console.log("deleted student");
        })


        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Student deleted</b>")
        res.end();
    }
    if(req.url=="/append"){
        fs.appendFileSync("students.txt","Appended Student",(err)=>{
            if(err){
                console.log("failed to append");return;
            }
            console.log("Appended student");
        })


        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<b>Student Appended</b>")
        res.end();
    }
    if(req.url=="/read"){
        
        fs.readFile("students.txt","utf-8",(err,data)=>{
            if(err){
                console.log("failed to fetch students details");return;
            }
            console.log("fetched students details");
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("<b>Student details fetched</b><br>")
            res.write(data);
        
            res.end();
        })


    }
}).listen(3000,()=>{
    console.log("server listening to port 3000...")
})