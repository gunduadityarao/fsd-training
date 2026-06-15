const fs=require('fs');

fs.writeFileSync("./student.txt","Hello World",(err)=>{
    console.log("failed to write");
})

fs.readFileSync("./student.txt","utf-8",(err,data)=>{
    if(err){
        console.log("failed to read");return;
    }
    console.log(data);
})

fs.appendFileSync("./student.txt","Hello Aditya",(err)=>{
    if(err){
        console.log("failed to append");
    }
})

fs.unlinkSync("./student.txt",(err)=>{
    if(err){
        console.log("failed to delete file");
    }
})