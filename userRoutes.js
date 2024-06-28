const express=require("express");
const { loginContorller, registerController } = require("../controllers/userctrl");
 const router=express.Router()

 //ROUTES
 //loginroute

 router.post("/login",loginContorller)

 //registreRoute

 router.post("/register",registerController)



 module.exports=router