const express = require("express");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
require("dotenv").config();

const app = express();

app.use("api/v1/user",userRouter);
app.use("api/v1/course",courseRouter);
app.use("api/v1/admin",adminRouter);

async function main(){
    await mongoose.connect("process.env.MONGODB_URL");
    app.listen(process.env.PORT);
}
main();