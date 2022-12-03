import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Succes } from './ReplyModal';
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"

const DeleteModal = ({ emailContent, handleDetele, setDeleteModal, deleteSucces, setDeleteSucces, loading }) => {
  
  return (
    <>
      <Modal>
        <ModalContent>
          <h1>You want to delete this email?</h1>
          <div>
            <button onClick={() => setDeleteModal(false)}>Cancel</button>
            <DeleteBtn onClick={() => handleDetele(emailContent.id)}>Delete</DeleteBtn>
          </div>
          {/* {loading && <div className='overlay'><div className='loading'></div></div>} */}
        </ModalContent>
      </Modal>
      {/* {deleteSucces ? <DeleteSucces>
            <div>
                <BsCheckLg />   
            </div>
            <h5>Delete Succesed!!</h5>
            <p onClick={() => setDeleteSucces(false)}><AiOutlineClose /></p>
      </DeleteSucces> : ""}   */}
    </>
  )
}

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 99; 
`

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;left:50%;
  transform: translate(-50%,-50%);

  width: 40%;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 3px rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 4rem 3rem;

  h1 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 48px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 20px;

    button {
      padding: 12px 16px;
      font-size: 17px;
      border: none;
      border-radius: 6px;
      box-shadow: 0 0 4px rgba(0,0,0,0.2);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`

const DeleteBtn = styled.button`
  color: white;
  background-color: rgb(239, 68, 68);
`

const DeleteSucces = styled(Succes)`

  div {
    background-color: rgb(239, 68, 68);
  }
`

export default DeleteModal