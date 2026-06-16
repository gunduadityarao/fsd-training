let express=require('express');
let app=express();
let fs=require('fs');
app.use(express.json());
let students=[{}];
app.get("/students",(req,res)=>{
    students=JSON.parse(fs.readFileSync("students.json","utf-8"));
        
    
    res.send(students);
})

app.post("/students",(req,res)=>{
    students=JSON.parse(fs.readFileSync("students.json","utf-8"));
    let student={
        id:students.length+1,
        ...req.body
    }
    students.push(student);
    fs.writeFileSync("students.json",JSON.stringify(students));
    res.send("stored data")
})

app.get("/students/:id",(req,res)=>{
    let id=req.params.id;
    students=JSON.parse(fs.readFileSync("students.json","utf-8"));
    let student=students.find(s=>s.id==id);
    return res.send(JSON.stringify(student));
})

app.put("/students/:id",(req,res)=>{
    let id=req.params.id;
    
    students=JSON.parse(fs.readFileSync("students.json","utf-8"));
    let index=students.findIndex(s=>s.id==id);
    students[index]={
        id:Number(id),
        ...req.body};
    fs.writeFileSync("students.json",JSON.stringify(students));
    res.send('updated student data')
})

app.delete("/students/:id",(req,res)=>{
    let id=req.params.id;
    
    let students=JSON.parse(fs.readFileSync("students.json","utf-8"));
    students=students.filter(s=>s.id!=id);
    fs.writeFileSync("students.json",JSON.stringify(students));
    res.send('deleted student details')
})

app.listen(3000,()=>{
    console.log('server started at port 3000...');
})