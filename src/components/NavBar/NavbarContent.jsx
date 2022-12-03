import React, { useState } from "react";
import Navbar from "./Navbar";
import NavList from "./NavList";

import styled from "styled-components";
import WrapEmail from "../email-content/WrapEmail";

const NavbarContent = ({ params, setParams, userDetail }) => {
  const [noChoose, setNoChoose] = useState(false);
  const [noChooseEmailItem, setNoChooseEmailItem] = useState(false);

  return (
    <>
      <WrapEmail params={params} userDetail={userDetail} />
      <NavContent>
        <div style={{ display: "flex", height: "100%" }}>
          <Navbar noChoose={noChoose} setNoChoose={setNoChoose} />
          <NavList
            params={params}
            setParams={setParams}
            noChoose={noChoose}
            setNoChoose={setNoChoose}
            noChooseEmailItem={noChooseEmailItem}
            setNoChooseEmailItem={setNoChooseEmailItem}
          />
        </div>
      </NavContent>
    </>
  );
};

const NavContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(14 / 15 * 100%);
`;

export default NavbarContent;
