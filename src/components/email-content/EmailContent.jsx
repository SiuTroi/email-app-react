import React, { useEffect, useState } from "react";
import { getContentEmail } from "../../navigate";
import styled from "styled-components";
import message from "../../data/messages.json";
import DeleteModal from "../modal/DeleteModal";
import ReplyModal from "../modal/ReplyModal";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"
import ForwardModal from "../modal/ForwardModal";

import { Succes } from '../modal/ReplyModal';

const EmailContent = ({
  emailid,
  noChoose,
  noChooseEmailItem,
  messageData,
  setMessageData }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [replyModal, setReplyModal] = useState(false);
  const [forWardModal, setForWardModal] = useState(false);

  const [deleteSucces, setDeleteSucces] = useState(false);
  const [loading, setLoading] = useState(false)

  const getContentEmail = (id) => messageData.find(mes => mes.id === id);
  const emailContent =  getContentEmail(emailid);

  const handleDetele = (mailid) => {
    setLoading(true)
    setDeleteSucces(true);
    setTimeout(() => {
    setDeleteSucces(false);
      
      const restMess = messageData;
      const deleteEmail = restMess.filter(mes => mes.id !== mailid);
      setMessageData([...deleteEmail])
      
      setLoading(false)
      setDeleteModal(false);
      // setTimeout(() => {
      //   setDeleteSucces(false)
      // }, 3000)
    }, 1400) 
  }
  

  return emailContent && noChoose ? (
    <>
      {deleteSucces ? <DeleteSucces>
        <div>
            <BsCheckLg />   
        </div>
        <h5>Delete Succesed!!</h5>
        <p onClick={() => setDeleteSucces(false)}><AiOutlineClose /></p>
      </DeleteSucces> : ""}  
      <MailContent>
        <DivWrapper>
          <DivHeading>
            <DivInfo>
              <DivImg>
                <img src={emailContent.to.avatarUrl} alt="avatar" />
              </DivImg>
              <DivName>
                <h4>{emailContent.to.name}</h4>
                <span>{emailContent.to.email}</span>
              </DivName>
            </DivInfo>
            <DivFeedback>
              <p>
                <span>
                  {new Date(`${emailContent.timestamp}`).toLocaleTimeString()}
                </span>{" "}
                ,
                <span>
                  {new Date(`${emailContent.timestamp}`).toLocaleDateString()}
                </span>
              </p>
              <div>
                <ReplyBtn onClick={() => setReplyModal(true)}>Reply</ReplyBtn>
                <ForwardBtn onClick={() => setForWardModal(true)}>Forward</ForwardBtn>
                <DeleteBtn onClick={() => setDeleteModal(true)}>Delete</DeleteBtn>
              </div>
            </DivFeedback>
          </DivHeading>
          <DivContent>
            <h2>{emailContent.main.title}</h2>
            <p>{emailContent.main.content}</p>
          </DivContent>
        </DivWrapper>
        {loading && <div className='overlay'><div className='loading'></div></div>}
      </MailContent>
      {deleteModal && <DeleteModal
        setDeleteModal={setDeleteModal}
        emailContent={emailContent}
        handleDetele={handleDetele} 
        deleteSucces={deleteSucces}
        loading={loading}
      />}
      {replyModal && <ReplyModal 
        setReplyModal={setReplyModal}
        emailContent={emailContent} 
      />}
      {forWardModal && <ForwardModal
        emailContent={emailContent} 
        setForWardModal={setForWardModal}
      />}
    </>
  ) : (
    <MailContent>
      {noChooseEmailItem ? (
        <h5 className="possiton-center">Please choose an email</h5>
        ) : (
        <h5 className="possiton-center">Please choose a folder first</h5>
      )}
    </MailContent>
  );
};

const DeleteSucces = styled(Succes)`

  div {
    background-color: rgb(239, 68, 68);
  }
`

const MailContent = styled.div`
  width: calc(3.5 / 6 * 100%);
  background-color: white !important;
  color: black;
  position: relative;
`;

const DivWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const DivHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DivInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
const DivImg = styled.div`
  flex: 0.15;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
const DivName = styled.div`
  flex: 0.85;
  display: flex;
  flex-direction: column;
`;

const DivFeedback = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    gap: 8px;
  }
`;

export const Btn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
  font-size: 17px;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
`;
const ReplyBtn = styled(Btn)`
  background-color: rgb(107, 114, 128);
  border: 1px solid rgb(107, 114, 128);
  color: white;

  &:hover {
    background-color: transparent;
    color: rgb(107, 114, 128);
  }
`;
const ForwardBtn = styled(Btn)`
  background-color: transparent;
  color: rgb(16, 185, 129);
  border: 1px solid rgb(16, 185, 129);

  &:hover {
    background-color: rgb(16, 185, 129);
    color: white;
  }
`;
const DeleteBtn = styled(Btn)`
  background-color: transparent;
  color: rgb(239, 68, 68);
  border: 1px solid rgb(239, 68, 68);

  &:hover {
    background-color: rgb(239, 68, 68);
    color: white;
  }
`;

const DivContent = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid rgb(209, 213, 219);

  h2 {
    margin-bottom: 2rem;
    font-weight: 600;
    font-size: 2.25rem;
  }
`;

export default EmailContent;
