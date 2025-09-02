const { Router } = require ("express");
const {courseModel,purchaseModel} = require("../db");
const { userMiddleware } = require("../middleware/user");
const courseRouter = Router();

    courseRouter.post("/purchase", userMiddleware,async (req,res) =>{
        const userId = req.userId;
        const courseId = req.body.courseId;

        await purchaseModel.create({
            userId:userId,
            courseId:courseId
        })
        res.json({
            message: "Course purchased successfully"
        })
    })
    
    courseRouter.get("/preview", async (req,res) =>{

        const courses = await courseModel.find({});
        res.json({
            courses: ["Course 1", "Course 2", "Course 3"]
    })
})

module.exports = {
    courseRouter:courseRouter
}