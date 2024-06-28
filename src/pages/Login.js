import React from 'react';
import {Form, Input} from 'antd';
import reactDOM from 'react-dom/client';
import '../styles/Register.css';
import {Link} from 'react-router-dom';

export default function Login() {
  const onFinishHandler=(values)=>{
    console.log(values);
  }
  return (
    <div>
        
    
    <>
   
    <div className='form-container'>

    
      <Form layout='vertical' onFinish={onFinishHandler} className='card p-5 register-form' >
          <h2>Login Form</h2>
          <Form.Item label="Email?" name="email">
              <Input type="email" required/>
            </Form.Item>
        <Form.Item label="Password?" name="password">
          <Input type="password" required/>
        </Form.Item>
        
       <button className="btn btn-primary" type="submit" >Login</button>
       <br/>
       <Link to="/register">create account?</Link>
       

      </Form>
    </div>
    </>
</div>
    
  )
}

