import React, { useState } from 'react';
import User from "../../data/users.json";
import styled from 'styled-components';
import { BsFillPencilFill, BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"

import { Succes } from '../modal/ReplyModal';
import { Link } from 'react-router-dom';


const UserDetail = ({ userDetail, setUserDetail }) => {
    const [editUserDetail, setEditUserDetail] = useState(userDetail);
    const [loading, setLoading] = useState(false);
    const [editSucces, setEditSucces] = useState(false);
    const [fieldEmty, setFieldEmty] = useState({
        name: false,
        email: false,
        checkEmail: false,
        password: false,
        passwordConfirm: false,
        checkPasswordConfirm: false
    })
    const { name, email, password, passwordConfirm } = editUserDetail;
    const handleChange = (e) => {
        const value = e.target.value;
        setEditUserDetail({
            ...editUserDetail,
            [e.target.name]: value
        })
        setFieldEmty({
            ...fieldEmty,
            name: false,
            email: false,
            password: false,
            passwordConfirm: false,
            checkPasswordConfirm: false
        })

        const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!emailRegex.test(email)) {
            setFieldEmty({
                ...fieldEmty,
                checkEmail: true,
            })
        }else{
            setFieldEmty({
                ...fieldEmty,
                checkEmail: false,
            })
        }
    }
    setUserDetail(editUserDetail);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name !== "" && 
        email !== "" && 
        password !== "" && 
        passwordConfirm !== "" &&
        password === passwordConfirm && 
        !fieldEmty.checkEmail) {
            setFieldEmty({
                ...fieldEmty,
                name: false,
                email: false,
                password: false,
                checkEmail: false,
                passwordConfirm: false,
                checkPasswordConfirm: false
            })
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setEditSucces(true)
                setTimeout(() => {
                    setEditSucces(false)
                }, 5000)
            }, 1400)
        }
        if(name === "") {
            setFieldEmty({
                ...fieldEmty,
                name: true,
            })
        }
        if(email === "") {
            setFieldEmty({
                ...fieldEmty,
                email: true,
            })
        }
        if(password === "") {
            setFieldEmty({
                ...fieldEmty,
                password: true,
            })
        }
        if(passwordConfirm === "") {
            setFieldEmty({
                ...fieldEmty,
                passwordConfirm: true,
            })
        }
        
        if(passwordConfirm !== password) {
            setFieldEmty({
                ...fieldEmty,
                checkPasswordConfirm: true,
            })
        }
    }

    console.log(fieldEmty)

  return (
    <>
        <EditUser>
            <Wrap>
                <form action="">
                    <h1>Edit Infomation.</h1>
                    <DivGroup>
                        <p>Name:</p>
                        <div style={fieldEmty.name ? {border: "1px solid rgb(239,68,68)"} : {}} >
                            <input onChange={handleChange} value={name} name="name" id="name" />
                            <div onClick={handleChange}>
                                <label htmlFor="name"><BsFillPencilFill /></label>
                            </div>
                        </div>
                        <span style={{color: "rgb(239,68,68)"}}>{fieldEmty.name && "Please enter something text!!"}</span>
                    </DivGroup>
                    <DivGroup>
                        <p>Email:</p>
                        <div style={fieldEmty.email || fieldEmty.checkEmail ? {border: "1px solid rgb(239,68,68)"} : {}}>
                            <input onChange={handleChange} value={email} name="email" id="email" type={"email"} />
                            <div onClick={handleChange}>
                                <label htmlFor="email"><BsFillPencilFill /></label>
                            </div>
                        </div>
                        <span style={{color: "rgb(239,68,68)"}}>{fieldEmty.email && "Please enter something text!!"}</span><br />
                        <span style={{color: "rgb(239,68,68)"}}>{fieldEmty.checkEmail && "This field just be email!!"}</span>
                    </DivGroup>
                    <DivGroup>
                        <p>Password:</p>
                        <div style={fieldEmty.password ? {border: "1px solid rgb(239,68,68)"} : {}}>
                            <input onChange={handleChange} value={password} name="password" id="password" type={"password"} />
                            <div onClick={handleChange}>
                                <label htmlFor="password"><BsFillPencilFill /></label>
                            </div>
                        </div>
                        <span style={{color: "rgb(239,68,68)"}}>{fieldEmty.password && "Please enter something text!!"}</span>
                    </DivGroup>
                    <DivGroup>
                        <p>Password Confirm:</p>
                        <div style={fieldEmty.passwordConfirm || fieldEmty.checkPasswordConfirm ? {border: "1px solid rgb(239,68,68)"} : {}}>
                            <input onChange={handleChange} value={passwordConfirm} name="passwordConfirm" id="password-confirm" type={"password"} />
                            <div onClick={handleChange}>
                                <label htmlFor="password-confirm"><BsFillPencilFill /></label>
                            </div>
                        </div>
                        <span style={{color: "rgb(239,68,68)"}}>{fieldEmty.passwordConfirm && "Please enter something text!!"}</span><br />
                        <span style={{color: "rgb(239,68,68)"}}>{fieldEmty.checkPasswordConfirm && "Passwords do not match!!"}</span>
                    </DivGroup>
                    {/* Avatar this */}
                    <DivBtn>
                        <Link to='/main/email/inbox'>
                            <CancelBtn>Cancel</CancelBtn>
                        </Link>
                        <SaveBtn onClick={handleSubmit}>Save</SaveBtn>
                    </DivBtn>
                </form>

            </Wrap>
            {loading && <div className='overlay'><div className='loading'></div></div>}
        </EditUser>
        {editSucces ? <Succes>
            <div>
                <BsCheckLg />   
            </div>
            <h5>Edit Succesed!!</h5>
            <p onClick={() => setEditSucces(false)}><AiOutlineClose /></p>
         </Succes> : ""} 
    </>
  )
}

const EditUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--darkblue-800);

`
const Wrap = styled.div`
    width: 30%;
    padding: 4rem 3rem;
    background-color: white;
    border-radius: 8px;
    h1 {
        text-align: center;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const DivGroup = styled.div`

    div {
        display: flex;
        align-items: center;
        border: 2px solid rgba(0,0,0,0.6);
        border-radius: 6px;
        padding: 2px;
        input, div {
            outline: none;
            border: none;
            font-size: 20px;
        }
        div {
            font-size: 20px;
            width: 48px;
            height: 40px;
            border-radius: 6px;
            background-color: var(--darkblue-800);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border: 2px solid var(--darkblue-800);

            &:hover {
                background-color: transparent;
                color:  var(--darkblue-800);
                cursor: pointer;
            }
        }
        input {
            flex:1;
            border-radius: 6px;
        }
    }
`

const Btn = styled.button`
    font-size: 17px;
    padding: 12px 16px;
    border-radius: 6px;
`
const SaveBtn = styled(Btn)`
    background-color: var(--green-color);
    border: 1px solid var(--green-color);
    color: white;

    &:hover {
        color: var(--green-color);
        background-color: transparent;
        cursor: pointer;
    }
`

const DivBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
`

const CancelBtn = styled(SaveBtn)`
    background-color: rgb(234, 234, 234);
    border: 1px solid rgb(234, 234, 234);
    color: black;

    &:hover {
        color: black;
    }
`
        

export default UserDetail