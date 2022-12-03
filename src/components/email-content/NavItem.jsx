import React, { useEffect, useState } from "react";
import message from "../../data/messages.json";
import { Link, NavLink, useParams } from "react-router-dom";
import { getContentEmail } from "../../navigate";
import EmailContent from "./EmailContent";
import styled from "styled-components";

// console.log(message)

const NavItem = ({ navitem,
  navbar,
  noChoose,
  params,
  setParams,
  noChooseEmailItem,
  setNoChooseEmailItem
}) => {
  const [messageData, setMessageData] = useState(message);
  const [unread, setUnread] = useState()
  const { emailid } = useParams();
  

  useEffect(() => {
    setParams({
      ...params,
      emailid: emailid,
    });
  }, [emailid]);
  

  const handleUnread = (id) => {
    const restMess = messageData;
    const unread = restMess.map(mes => {
      if(mes.id === id && mes.unread === true) {
        return mes.unread = false;
      }
      return mes
    })
  }

  return (
    <>
      <NavbarItem>
        {noChoose ? (
          messageData.map((mes, index) => {
            if (mes.folder === navitem) {
              return (
                <NavLink
                  onClick={() => handleUnread(mes.id)}
                  key={index}
                  to={`/main/${navbar}/${navitem}/${mes.id}`}
                  style={
                    mes.unread
                      ? { backgroundColor: "#e5e7eb" }
                      : { backgroundColor: "white" }
                  }
                >
                  <DivWrapper>
                    <DivImg>
                      <img src={mes.to.avatarUrl} alt="avatar" />
                    </DivImg>
                    <DivContent>
                      <Pheading>
                        <span>{mes.to.name}</span>
                        <span>
                          {new Date(
                            Date.parse(`${mes.timestamp}`)
                          ).toLocaleDateString()}
                        </span>
                      </Pheading>
                      <Ptitle>{mes.main.title}</Ptitle>
                      <Pcontent>{mes.main.content}</Pcontent>
                      {mes.unread && <div className="number-unread">1</div>}
                    </DivContent>
                  </DivWrapper>
                </NavLink>
              );
            }
          })
        ) : (
          <h5 className="possiton-center">Please choose folder</h5>
        )}
      </NavbarItem>
      <EmailContent
      noChoose={noChoose}
      noChooseEmailItem={noChooseEmailItem}
      emailid={emailid} 
      messageData={messageData}
      setMessageData={setMessageData}
      />
    </>
  );
};

const NavbarItem = styled.div`
  overflow-y: scroll;
  width: calc(1.5 / 6 * 100%);
  background-color: white !important;
  position: relative;

  a {
    width: 100%;
    display: block;
  }
`;

const DivWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: calc(100% -3.5rem);
  padding: 1rem;
  /* background-color: ${(props) => (props.unread ? "#e5e7eb" : "white")}; */
  border-bottom: 1px solid rgb(209, 213, 219);
`;

const DivImg = styled.div`
  width: calc(1 / 6 * 100%);
  flex: 0.15;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const DivContent = styled.div`
  flex: 0.85;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Pheading = styled.p`
  display: flex;
  justify-content: space-between;
`;

const Ptitle = styled.p`
  text-transform: capitalize;
  display: -webkit-box;
  font-weight: 700;
  color: #000 !important;
  -webkit-line-clamp: 1; /* số dòng hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Pcontent = styled(Ptitle)`
  -webkit-line-clamp: 3;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(107, 114, 128);
`;

export default NavItem;
