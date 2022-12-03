import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalContent } from './DeleteModal';
import User from "../../data/users.json"
import styled, { keyframes } from 'styled-components';
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"

const ReplyModal = ({ emailContent, setReplyModal }) => {
    const [sendSucces, setSendSucces] = useState(false);
    const [emtyContent, setEmtyContent] = useState(false);
    const [loading, setLoading] = useState(false)
    const [mail, setMail] = useState({
        to: emailContent.to.email,
        from: User[0].email,
        content: ""
    })
    
    const ref = useRef()

    const handleChange = (e) => {
        const value = e.target.value;
        setMail({
            ...mail,
            [e.target.name]: value
        });
        setEmtyContent(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(mail.content !== "") {
            setLoading(true)
            setMail({
                ...mail,
                content: ""
            });
        ref.current.focus();
        setTimeout(() => {
            setLoading(false)
            setSendSucces(true)
            setTimeout(() => {
                setSendSucces(false)
            }, 5000)
            console.log(mail)
        }, 1400)
        } else {
            setEmtyContent(true)
        }

    }
    return (
        <>
        <Modal>
            <ModalContent>
                <h1>Reply Email</h1>
                <DivGroup>
                    <label htmlFor="">To:</label>
                    <input onChange={handleChange} name="to" disabled value={emailContent.to.email} />
                </DivGroup>
                <DivGroup>
                    <label htmlFor="from">From: </label>
                    <input onChange={handleChange} name="from" value={mail.from} id="from" />
                </DivGroup>
                <Textarea
                    ref={ref}
                    onChange={handleChange}
                    name="content"
                    value={mail.content}
                    placeholder='Please enter content...' 
                    style={emtyContent ? {border: "1px solid rgb(239,68,68)"} : {}}
                />
                <span style={{color: "rgb(239,68,68)"}}>{emtyContent && "Please enter something text!!"}</span>
                <div style={{justifyContent: "flex-end"}}>
                    <button onClick={() => setReplyModal(false)}>Cancel</button>
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

    label, input {
        font-size: 17px;
    }
    input {
        border: 1px solid rgba(0,0,0,0.2);
        padding: 12px 10px;
        margin-bottom: 20px;
        border-radius: 4px;
    }
`

export const Textarea = styled.textarea`
    height: 162px;
    border: 1px solid rgba(0,0,0,0.2);
    padding: 12px 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-size: 17px;
    font-family: 'Noto Sans', sans-serif;
`
export const SuccesBtn = styled.button`
    background-color: rgb(16, 185, 129);
    color: white;
`

export const showSucces = keyframes`
    from {
        transform: translateX(calc(100% + 32px));
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
`
export const Succes = styled.div`
    position: absolute;
    z-index: 999;
    top: 32px;right: 32px;
    width: 260px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 3px rgba(0,0,0,0.3);
    padding: 24px 32px;
    animation: ${showSucces} linear .4s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    div {
        width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        border-radius: 50%;
        color: white;
        background-color: rgb(16, 185, 129);
    }

    p {
        color: #666;
        font-size: 22px;
        cursor: pointer;
    }
`






export default ReplyModal