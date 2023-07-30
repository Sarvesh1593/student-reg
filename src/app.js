const express = require("express");
require("./db/conn");
const student = require("./model/student");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(()=>{
        res.send(user);
    })
})
app.get("/students",async(req,res)=>{
    try{
        const studentsData = await student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

app.get("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentData = await student.findById(_id);
        console.log(studentData);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (e) {
        res.send(e);
    }
})
app.listen(port , ()=>{
    console.log(`connection is successfully at port ${port}`)
})
