import React from 'react';
import EmailContent from './EmailContent';
import Header from './Header';
import NavItem from './NavItem';

import styled from 'styled-components';
import Logo from '../NavBar/Logo';

const WrapEmail = ({params, userDetail}) => {
  return (
    <Wrap>
        <Logo />
        <Header userDetail={userDetail} params={params} />
    </Wrap>
  )
}

const Wrap = styled.div`
    width:100%;
    display: flex;
    height: calc(1/15 * 100%)
`

export default WrapEmail