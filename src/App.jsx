import React, {useEffect, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import NavbarContent from './components/NavBar/NavbarContent';
import NavList from './components/NavBar/NavList';
import NavItem from './components/email-content/NavItem';
import EmailContent from './components/email-content/EmailContent';
import Login from './components/login/Login';
import UserDetail from './components/user/UserDetail';
import User from "./data/users.json";


const App = () => {
  const [noChoose, setNoChoose] = useState(false);
  const [userDetail, setUserDetail] = useState({
      name: User[0].name,
      email: User[0].email,
      password: User[0].password,
      passwordConfirm: User[0].password,
      avatarUrl: User[0].avatarUrl,
  });
  const [userAccount, setUserAccount] = useState({
    accountDemo: "",
    passwordDemo: "test@test",
    login: false
  });
  const [params, setParams] = useState({
    navbar: "",
    navitem: "",
    emailid: "",
  })
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("be-called")
  //   User.map(user => {
  //     if(userAccount.accountDemo === user.email && userAccount.passwordDemo === user.password) {
  //         navigate("/main/home")
  //     }})
  // }, [userAccount.login, userAccount.accountDemo])

  

  return (
    <RootStyle>

      <Routes>
        <Route path="/" element={<Login userAccount={userAccount} setUserAccount={setUserAccount} />} />
        <Route path="/login" element={<Login userAccount={userAccount} setUserAccount={setUserAccount} />} />
        <Route path='/main' element={<NavbarContent setUserAccount={setUserAccount} userDetail={userDetail} params={params} setParams={setParams} noChoose={noChoose} setNoChoose={setNoChoose} />}>
          <Route path='/main/:navbar' element={<NavList noChoose={noChoose} setNoChoose={setNoChoose} />}>
            <Route path='/main/:navbar/:navitem' element={<NavItem />}>
              <Route path="/main/:navbar/:navitem/:emailid" element={<EmailContent />} />
            </Route>
          </Route>
        </Route>
        <Route path='/userdetail' element={<UserDetail userDetail={userDetail} setUserDetail={setUserDetail} />} /> 
      </Routes>

    </RootStyle>
  )
}

const RootStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default App