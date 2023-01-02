import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const H1 = styled.h1`
    
    position: absolute;
    z-index: 2;
    top: 0;
    left: 10px;
`



const OpenSidebar = ({setVisible}) => {
  return (
    <H1 onClick={() => setVisible((prev) => !prev)}>
      <FaBars />
    </H1>
  );
};

export default OpenSidebar;
