import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { navbar, navigate } from "../../navigate";
import styled from "styled-components";
import NavItem from "../email-content/NavItem";
import Constructor from "../email-content/Constructor";

const NavList = ({
  params,
  setParams,
  noChoose,
  setNoChoose,
  noChooseEmailItem,
  setNoChooseEmailItem,
}) => {
  const { navbar, navitem } = useParams();
  const { home, email, contact } = navigate;

  useEffect(() => {
    setParams({
      navbar: navbar,
      navitem: navitem,
    });
  }, [navbar, navitem]);

  const handleChooseEmail = () => {
    setNoChoose(true);
    setNoChooseEmailItem(true)
  }

  return (
    <>
      <NavbarList>
        {navbar === "home" && (
          <div>
            <P>{home}</P>
          </div>
        )}
        {navbar === "email" && (
          <div>
            {email.map((mail, index) => (
              <li key={index} onClick={handleChooseEmail}>
                <NavLink to={`/main/${navbar}/${mail}`}>{mail}</NavLink>
              </li>
            ))}
          </div>
        )}
        {navbar === "contact" && (
          <div>
            <P>{contact}</P>
          </div>
        )}
      </NavbarList>
      {navbar === "email" && (
        <NavItem
          navitem={navitem}
          navbar={navbar}
          noChoose={noChoose}
          params={params}
          setParams={setParams}
          noChooseEmailItem={noChooseEmailItem}
          setNoChooseEmailItem={setNoChooseEmailItem}
        />
      )}
      {navbar === "home" && <Constructor />}
      {navbar === "contact" && <Constructor />}
    </>
  );
};

const NavbarList = styled.div`
  width: calc(0.8 / 6 * 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;

  div {
    width: 100%;
    height: 100%;
    background-color: var(--darkblue-800);

    ul,
    li {
      list-style: none;
    }

    li {
      a {
        padding-left: 3rem;
        height: 3.5rem;
        text-decoration: none;
        font-size: 17px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        color: white;
        font-weight: 300;
      }
    }
  }
`;

const P = styled.p`
  padding: 4rem 0;
  text-align: center;
  color: white;
`

export default NavList;
