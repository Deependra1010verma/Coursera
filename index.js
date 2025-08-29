const express = requrire("express");
const app = express();

app.post("/user/signup", (req,res) =>{
    res.json({
        message: "User signed up successfully"
    })
})

app.post("/user/login", (req,res) =>{
    res.json({
        message: "User logged in successfully"
    })
})
app.post("/user/purchase", (req,res) =>{
    res.json({
        message: "Course purchased successfully"
    })
})

app.post("/coure/purchase", (req,res) =>{
    res.json({
        message: "Course purchased successfully"
    })
})

app.get("/course/preview", (req,res) =>{
    res.json({
        courses: ["Course 1", "Course 2", "Course 3"]
    })
})

app.listen(3000);
