const mongoose = require("mongoose");
const express = require("express");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
    app.listen(3000);
    console.log("listening at port 3000");
}

main().catch(err => {
    console.error("Error connecting to MongoDB:", err);
});