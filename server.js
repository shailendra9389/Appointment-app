const express=require("express");
const colors=require("colors");
const moragan=require("morgan");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const port=process.env.PORT || 5050
dotenv.config();
connectDB();
//rest object
const app=express();
app.use(express.json());
app.use(moragan('dev'));

//routes

app.use('/api/v1/user',require("./routes/userRoutes"))

app.listen(port,()=>{
    console.log("Server running on port 8080")
})