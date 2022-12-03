import React from 'react';
import styled from 'styled-components';
import constructor from "../../assets/under-construction.ad9fbf48.png"

const Constructor = () => {
  return (
    <Div>
        <div>
            <img src={constructor} alt="" />
        </div>
    </Div>
  )
}


const Div = styled.div`
    width: calc(5/6 * 100%);

    display: flex;
    justify-content: center;
    align-items: center;
`


export default Constructor