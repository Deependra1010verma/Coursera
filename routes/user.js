const { Router } = require("express");

const userRouter = Router();

    userRouter.post("/signup", (req,res) =>{
        res.json({
            message: "User signed up successfully"
        })
    })
    
    userRouter.post("/login", (req,res) =>{
        res.json({
            message: "User logged in successfully"
        })
    })
    userRouter.post("/purchase", (req,res) =>{
        res.json({
            message: "Course purchased successfully"
        })
    })

module.exports = {
    userRouter: userRouter
}