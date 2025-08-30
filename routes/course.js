const { Router } = require ("express");
const courseRouter = Router();

    courseRouter.post("/purchase", (req,res) =>{
        res.json({
            message: "Course purchased successfully"
        })
    })
    
    courseRouter.get("/preview", (req,res) =>{
        res.json({
            courses: ["Course 1", "Course 2", "Course 3"]
    })
})

module.exports = {
    courseRouter:courseRouter
}