import React from 'react';
import { Link } from 'react-router-dom';

let passIn = document.getElementById('pass-input')
let emailIn = document.getElementById('email-input')
let erorr = document.getElementById('log-error')
let text = document.getElementById('error-text')
let timer = document.getElementById('timer')
let login = document.getElementById('login-form')
let create = document.getElementById('create')
let boxtext = document.getElementById('box-text')
let loginBox = document.getElementById('login-box')
let con = document.getElementById('Conpass-input')
let cpassIn = document.getElementById('C-pass-input')
let cemailIn = document.getElementById('C-email-input')

function ShowPassword () {
    passIn.type = 'text';
    setTimeout(function () {
        passIn.type = "password";
    },2000)
}

let Check = () => {
    erorr.style = 'left: 0px;';
    timer.style = 'animation: timer 3s;';
    
    if (emailIn.value.length === 0 && passIn.value.length === 0) {
        text.innerHTML = "Please fill in the fields"
    } else if (emailIn.value.length < 10) {
        text.innerHTML = "Enter your E-mail correctly"
    } else if (passIn.value.length < 8) {
        text.innerHTML = "Enter your password correctly"
    } else if (emailIn.value.length > 10 && passIn.value.length > 8) {
        text.innerHTML = "Successful"
    } 

    setTimeout(function () {
        erorr.style = 'left: -370px'
        timer.style = 'animation: none;'
    },3000)
}


let CreateCheck = () => {

    erorr.style = 'left: 0;';
    timer.style = 'animation: timer 3s;';
    
    
    if (cemailIn.value.length === 0 && cpassIn.value.length === 0 && con.value.lenght === 0) {
        text.innerHTML = "Please fill in the fields"
    } else if (cemailIn.value.length < 10) {
        text.innerHTML = "Enter your E-mail correctly"
    } else if (cpassIn.value.length < 8) {
        text.innerHTML = "Enter your password correctly"
    } else if (cemailIn.value.length > 10 && cpassIn.value.length > 8) {
        text.innerHTML = "Successful"
    } else if (cpassIn.value === con.value) {}


    if (cpassIn.value === con.value) {}
    else {
          text.innerHTML = 'Password and Coniform password values are not the same'
    }


    setTimeout(function () {
        erorr.style = 'left: -370px'
        timer.style = 'animation: none;'
    },3000)
}


let LoginForm = () => {
    return(
        <div id='login-form' className='mt-10'>
        <div>
            <label className='text-xl'>E-mail</label>
            <div className='input-box'>
                <input id='email-input' className='inputs' placeholder='Enter Your E-mail'></input>
            </div>
        </div>
        <div className='mt-5'>
            <div className='flex gap-3'>
                <label className='text-xl'>Password</label>
                <button onClick={ShowPassword} id='show-pass' className='eye-btn'><i className='fa fa-eye'></i></button>
            </div>
            <div className='input-box'>
                <input id='pass-input' type='password' className='inputs' placeholder='Enter Your Password'></input>
            </div>
        </div>
        <div className='flex mt-3 mx-1'>
            <div className='forgot'>
                Forgot my password !
            </div>
        </div>
        <div className='mt-5'>
            <button className='dark-btn' id='log-btn' onClick={Check}>Login</button>
            <div className='text-center mt-5 forgot' onClick={Create}>Don't have an Account ? Create One !</div>
        </div>   
    </div>
    )
}





let CreateForm = () => {
    return (
        <div id='create'>
        <div className='mt-10'>
            <label className='text-xl'>E-mail</label>
            <div className='input-box'>
                <input id='C-email-input' className='inputs' placeholder='Enter Your E-mail'></input>
            </div>
        </div>
        <div className='mt-5'>
            <div className='flex gap-3'>
                <label className='text-xl'>Password</label>
                <button onClick={ShowPassword} id='C-show-pass' className='eye-btn'><i className='fa fa-eye'></i></button>
            </div>
            <div className='input-box'>
                <input id='C-pass-input' type='password' className='inputs' placeholder='Enter Your Password'></input>
            </div>
            <div className='flex gap-3 mt-5'>
                <label className='text-xl'>Coniform Password</label>
            </div>
            <div className='input-box'>
                <input id='Conpass-input' type='password' className='inputs' placeholder='Enter Your Password'></input>
            </div>
        </div>
        <div className='mt-5'>
            <button className='dark-btn' id='log-btn' onClick={CreateCheck}>Create</button>
            <div className='text-center mt-5 forgot' onClick={BacktoLogin}>I already have an Account</div>
        </div>
    </div>
    )
}



let Create = () => {
    login.style = 'display: none;';
    create.style = 'display: block;';
    boxtext.innerHTML = 'Create an Account'
    loginBox.style = 'height: 510px;'
}

let BacktoLogin = () => {
    login.style = 'display: block;';
    create.style = 'display: none;';
    boxtext.innerHTML = 'Login'    
    loginBox.style = 'height: 450px;'
}




function Login() {    
  return (
    <div>
        <div>
        <div className='log-error' id='log-error'>
            <div id='error-text' className=''>
                -
            </div>
            <div className='timer-box mt-8'>
                <div className='timer' id='timer'></div>
            </div>
        </div>
            <div className='flex justify-center'>
                <div id='login-box' className='login-box'>
                    
                    <div className='flex gap-5'>
                        <div>
                            <Link to='/'>
                                <button className='back-btn'>
                                    <i className='fa fa-angle-left'></i>
                                </button>
                            </Link>
                        </div>
                        <div id='box-text' className='text-3xl'>
                            Login
                        </div>
                    </div>
                    <LoginForm></LoginForm>
                    <CreateForm></CreateForm>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;




