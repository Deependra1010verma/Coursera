const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();


adminRouter.post("/signup", (req,res)=>{
    res.json({
        message:" Admin signed up successfully  "
    })
})

adminRouter.post("/login", (req,res)=>{
    res.json({
        messagfe:"Admin logged in successfully"
    })
})

adminRouter.post("/create_course", (req,res)=>{
    res.json({
        message:"Admin created course successfully"
    })
})

adminRouter.put("/update_course", (req,res)=>{
    res.json({
        message:"Admin updated course successfully"
    })
})

adminRouter.get("/all_courses", (req,res)=>{
    res.json({
        message:"All courses fetched successfully for admin"
    })
})

module.exports={
    adminRouter:adminRouter
}