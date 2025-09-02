const { Router } = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const{JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const admin = require("../middleware/admin");
const course = require("./course");




adminRouter.post("/signup", async (req,res)=>{
    const { email,password, firstName, lastName} = req.body;

    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName: lastName
    })
    res.json({
        message:" Admin signed up successfully  "
    })
})

adminRouter.post("/login", async (req,res)=>{
    const{email, password} = req.body;

    const admin = await adminModel.findOne({
        email :email,
        password:password
    })

    if(admin){
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD);

        res.json({
            token:token
        })
    }else{
        res.status(403).json({
        messagfe:"Incorrect Credential"
    })
    }
})

adminRouter.post("/create_course",adminMiddleware, async (req,res)=>{
    
    const adminId = req.userId;

    const {title , description , imageURL,price}= req.body;


    const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })

    res.json({
        message:"Admin created course successfully",
        courseId: course._id
    })
})

adminRouter.put("/update_course",adminMiddleware, (req,res)=>{
    const adminId = req.userId;

    const {courseId, title, description, imageUrl, price} = req.body;

    //update the course
    const course = courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })

    res.json({
        message:"Admin updated course successfully",
        courseId: course._id
    })
})

adminRouter.get("/all_courses",adminMiddleware, async (req,res)=>{
    const adminId = req.userId;

    //fetch all the courses

    const courses = await courseModel.find({
        creatorId:adminId
    });
    res.json({
        message:"All courses fetched successfully for admin",
        courses
    })
})

module.exports={
    adminRouter:adminRouter
}