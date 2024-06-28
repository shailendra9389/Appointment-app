const mongoose=require('mongoose');
const colors=require('colors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
            console.log(`connection succesfull ${mongoose.connection.host}`.bgGreen.white);
    }
        
     catch (error) {
        console.log(`Error: ${error.message}`);
        
    }

}
module.exports=connectDB;