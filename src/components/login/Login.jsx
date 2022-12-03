import React, { useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../assets/login-logo-black.svg";
import { useNavigate } from 'react-router-dom';
import User from "../../data/users.json";

const Login = ({userAccount, setUserAccount}) => {
    const navigate = useNavigate();
    const [wrongAccount, setWrongAccount] = useState(false)
    // const [userAccount, setUserAccount] = useState({
    //     accountDemo: "",
    //     passwordDemo: "test@test"
    // })
    

    const handleInputChange = (e) => {
        const value = e.target.value;
    
        setUserAccount({
            ...userAccount,
            [e.target.name]: value
        });
      }
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        User.map(user => {
            if(userAccount.accountDemo === user.email && userAccount.passwordDemo === user.password) {
                navigate("/main/email")

            } else {
                setWrongAccount(true)          
            }
        }) 
    }


  return (
    <DivLogin>
        <DivContent>
            <DivImg>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <p>Login to check your email!!</p>
            </DivImg>
            <Form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <select name="accountDemo" id="email" onChange={handleInputChange}>
                        <option value="------Choose an email">------Choose an email</option>
                        <option value="test1@test.com">test1@test.com</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="passwordDemo"
                        onChange={handleInputChange}
                        value={userAccount.passwordDemo}
                        type="password"
                        id="password" 
                        style={wrongAccount ? {border: "1px solid rgb(239,68,68)"} : {}}
                    />
                </div>
                <span>{wrongAccount && "Wrong email or password!!"}</span>
                <button onClick={handleLogin}>
                    login
                </button>
            </Form>
        </DivContent>
    </DivLogin>
  )
}

const DivLogin = styled.div`
    z-index: 9999;
    margin-top: calc(-1/15 * 100%);
    background-color: var(--darkblue-900);
    width: 100% !important;
    height: 9999px !important;
    position: relative;
`

const DivContent = styled.div`
    border-radius: 0.5rem;
    background-color: white;
    width: 30rem;
    padding: 4rem 2rem;
    position: absolute;
    top: 50%;left: 50%;;
    transform: translate(-50%,-50%);
`

const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    div {
        padding: 0 6rem;
    }
    p {
        text-align: center;
        font-size: 20px;
        font-weight: 300;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;

    div {
        width: 100%;

        select, input {
            width: 100%;
            padding: 10px 12px;
            outline: none;
            border: 1px solid #000;
            border-radius: 6px;
            margin-top: 8px;
            font-size: 17px;
        }

        input {
            width: 94%;
        }
    }

    span {
        color: rgb(239,68,68);
    }

    button {
        border: none;
        background-color: var(--darkblue-900);
        padding: 10px 12px;
        border-radius: 6px;
        margin-top: 10px;
        font-size: 17px;
        color: white;
        cursor: pointer;
    }
`

export default Login