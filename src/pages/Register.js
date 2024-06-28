import React from 'react'
import {Form, Input,message} from 'antd';
import axios from 'axios' 
import reactDOM from 'react-dom/client';
import '../styles/Register.css';
import {Link,useNavigate} from 'react-router-dom';

export default function Register() {
  const navigate=useNavigate();
  const onFinishHandler=async(values)=>{
    try{
      const res=await axios.post("/api/v1/user/register",values)
      if(res.data.success){
        message.success('LoggedIn succesfully!')
        navigate('/login')
      }else{
        message.error(res.data.message);
      }
    }catch(error){
      console.log(error.message);
      message.error("something went wrong!")
    }
  }
  return (
    <div>
    
        <>
       
        <div className='form-container'>

        
          <Form layout='vertical' onFinish={onFinishHandler} className='card p-5 register-form' >
              <h2>SignUp Form</h2>
            <Form.Item label=" Username?" name="name">
              <Input type="text" required/>
            </Form.Item>
            <Form.Item label="Email?" name="email">
              <Input type="email" required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" required/>
            </Form.Item>
            
           <button className="btn btn-primary" type="submit" >register</button>
           <br/>
           <Link to="/login" className='link'>already SignUp?</Link>


          </Form>
        </div>
        </>
    </div>
  )
}

