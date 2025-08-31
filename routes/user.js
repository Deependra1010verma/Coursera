const { Router } = require("express");
const {userModel} = require("../db");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const{JWT_USER_PASSWORD}= require("../config");

    userRouter.post("/signup", async (req,res) =>{
        const {email, password, firstName, lastName} = req.body;   //adding zod validateion

        //hashing the password
        await userModel.create({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })

        
        res.json({
            message: "User signed up successfully"
        })
    })
    
    userRouter.post("/login", async (req,res) =>{
        const { email, password } = req.body;

        const user = await userModel.findOne({
            email: email,
            password:password
        })

        if(user){
            const token = jwt.sign({
                id:user._id
            },JWT_USER_PASSWORD);

            res.json({
                token: token
            })
        }else{
            res.status(403).json({
                message:"Incorrect Credentials"
            })
        }
    })
    userRouter.post("/purchase", (req,res) =>{
        res.json({
            message: "Course purchased successfully"
        })
    })

module.exports = {
    userRouter: userRouter
}