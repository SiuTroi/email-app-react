import React from 'react';
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoDiv>
      <Link to={"/login"}>
        <img src={logo} alt="logo" />
      </Link>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
    background-color: var(--darkblue-900);
    width: calc(1/6 * 100%);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 75%;
        max-width: 100%;
        height: calc(3/4 * 100%);
    }
`

export default Logo