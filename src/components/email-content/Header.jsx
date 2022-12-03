import React from 'react';
import user from "../../data/users.json";
import styled from 'styled-components';
import { FaPowerOff } from "react-icons/fa";
import { Btn } from './EmailContent';
import { Link, useParams } from 'react-router-dom';

const Header = ({params, userDetail}) => {
  const { navbar, navitem, emailid} = params;


  return (
    <DivHeader>
      <Pathname>Pathname: <b>/main{navbar && ("/" + navbar)}{navitem && ("/" + navitem)}{emailid && ("/" + emailid)}</b></Pathname>
      <DivUser>
        <DivInfo>
            <h4>{userDetail.name}</h4>
            <span>{userDetail.email}</span>
        </DivInfo>
        <DivImg>
          <img src={userDetail.avatarUrl} alt="" />
        </DivImg>
        <LogOutBtn>
          <Link to="/login">
            <FaPowerOff />
          </Link> 
        </LogOutBtn>
      </DivUser>
    </DivHeader>
  )
}

const DivHeader = styled.div`
  width: calc(5/6 * 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(209,213,219);
`

const Pathname = styled.div`
  padding-left: 12px;
`

const DivUser = styled.div`
  display: flex;
  gap: 8px;
  padding-right: 16px;
`

const LogOutBtn = styled(Btn)`
  background-color: rgb(239, 68, 68);
  border: 1px solid rgb(239, 68, 68);
  font-weight: 500;
  a {
    color: white !important;
  }

  &:hover {
    background-color: transparent; 
    

    a {
      color: rgb(239, 68, 68) !important;
    }
  }
`

const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h4,span {
    font-size: 14px
  }
  span {
    font-weight: 300;
  }
`
const DivImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  img {
    width: 100%;
    border-radius: 50%;
  }
`

export default Header