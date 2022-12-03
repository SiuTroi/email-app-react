import React from 'react';
import {FaHome, FaUser} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navbar } from '../../navigate';


const Navbar = ({setNoChoose}) => {
  const { nav_home, nav_email, nav_contact } = navbar;

  return (
    <NavbarDiv>
        <DivIcon>
          <NavLink onClick={() => setNoChoose(false)} to={`/main/${nav_home}`}>
            <FaHome />
          </NavLink>
        </DivIcon>
        <DivIcon>
          <NavLink to={`/main/${nav_email}`}>
            <MdEmail />
          </NavLink>
        </DivIcon>
        <DivIcon>
          <NavLink onClick={() => setNoChoose(false)} to={`/main/${nav_contact}`}>
            <FaUser/>
          </NavLink>
        </DivIcon>
    </NavbarDiv>
  )
}

const NavbarDiv = styled.div`
    background-color: var(--darkblue-900);
    width: calc(0.2/6 * 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
 `

const DivIcon = styled.div`
    width: 100%;
    height: 3.5rem;
    cursor: pointer;
    
    font-size: 1.425rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: white;
    }
`

export default Navbar