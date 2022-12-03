import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalContent } from './DeleteModal';
import User from "../../data/users.json"
import styled, { keyframes } from 'styled-components';
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {Textarea, SuccesBtn, showSucces, Succes} from "./ReplyModal"


// Inheritance ReplyModal Component
const ForwardModal = ({ emailContent, setForWardModal }) => {
    const [sendSucces, setSendSucces] = useState(false);
    const [emtyContent, setEmtyContent] = useState(false);
    const [nochooseEmailTo, setNochooseEmailTo] = useState(false);
    const [loading, setLoading] = useState(false)
    const [mail, setMail] = useState({
        to: "------Choose an email",
        from: User[0].email,
        title: emailContent.main.title,
        content: emailContent.main.content
    })
    
    const ref = useRef()

    const handleChange = (e) => {
        const value = e.target.value;
        setMail({
            ...mail,
            [e.target.name]: value
        });
        setEmtyContent(false)
        setNochooseEmailTo(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(mail.content !== "" && mail.to !== "------Choose an email") {
            setLoading(true)
            ref.current.focus();
            setTimeout(() => {
                setLoading(false)
                setSendSucces(true)
                setTimeout(() => {
                    setSendSucces(false)
                }, 5000)
                console.log(mail)
            }, 1400)
        } 
        if(mail.to === "------Choose an email") {
            setNochooseEmailTo(true)
        }
        if(mail.content === "") {
            setEmtyContent(true)
        }
    }
    return (
        <>
        <Modal>
            <ModalContent>
                <h1>Forward Email</h1>
                <DivGroup>
                    <label htmlFor="">To:</label>
                    <select
                        name="to"
                        id="email"
                        onChange={handleChange}
                        style={nochooseEmailTo ? {border: "1px solid rgb(239,68,68)"} : {}}
                    >
                        <option value="------Choose an email">------Choose an email</option>
                        <option value="test1@test.com">test1@test.com</option>
                        <option value="test2@test.com">test2@test.com</option>
                        <option value="test3@test.com">test3@test.com</option>
                    </select>
                    <span style={{color: "rgb(239,68,68)"}}>{nochooseEmailTo && "Please choose an email to send!!"}</span>
                </DivGroup>
                <DivGroup>
                    <label htmlFor="from">From: </label>
                    <input onChange={handleChange} name="from" value={mail.from} id="from" />
                </DivGroup>
                <DivGroup>
                    <label htmlFor="title">Title: </label>
                    <input name="title" onChange={handleChange} id="title" value={mail.title} />
                </DivGroup>
                <DivGroup>
                    <label htmlFor="content">Content: </label>
                    <Textarea
                        ref={ref}
                        onChange={handleChange}
                        id='content'
                        name="content"
                        value={mail.content}
                        placeholder='Please enter content...' 
                        onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                        style={emtyContent ? {border: "1px solid rgb(239,68,68)"} : {}}
                    />
                </DivGroup>
                <span style={{color: "rgb(239,68,68)"}}>{emtyContent && "Please enter something text!!"}</span>
                <div style={{justifyContent: "flex-end"}}>
                    <button onClick={() => setForWardModal(false)}>Cancel</button>
                    {/* After send message. Can check content in console.log */}
                    <SuccesBtn onClick={handleSubmit}>Send</SuccesBtn>
                </div>
                {loading && <div className='overlay'><div className='loading'></div></div>}
            </ModalContent>
        </Modal>
         {sendSucces ? <Succes>
            <div>
                <BsCheckLg />   
            </div>
            <h5>Send Succesed!!</h5>
            <p onClick={() => setSendSucces(false)}><AiOutlineClose /></p>
         </Succes> : ""}   
        </>
    )
}

export const DivGroup = styled.div`
    flex-direction: column;
    gap: 8px !important;

    label, input, select {
        font-size: 17px;
    }
    label {
        font-weight: 500;
    }
    input, select {
        border: 1px solid rgba(0,0,0,0.2);
        padding: 12px 10px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    input[id="title"] {
        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
    }
    select {
        margin-bottom: 0;
    }
    span {
        margin-bottom: 20px;
    }
`




export default ForwardModal