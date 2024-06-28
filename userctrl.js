const userModel=require('../models/user.js');
const bcrypt=require("bcryptjs");

//register
const registerController=async(req,res)=>{
    try{
        const existinguser= await userModel.findOne({email:req.body.email})
        if(existinguser){
            return res.status(200).send({message:"User Already Exist!",success:false})
        }
        const password=req.body.password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        req.body.password=hashedPassword
        const newUser=new userModel(req.body)
        await newUser.save()
        res.status(201).send({message:"User LoggedIn!",success:true});

    }catch(error){
        console.log(error.message);
        res.status(500).send({success:false,
            message:`Register controller ${error.message}`}

        );
    }
};
const loginContorller=()=>{

}


module.exports={loginContorller,registerController};