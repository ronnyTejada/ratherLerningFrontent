import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyCard = styled.div`
  background-color: #ffffff;
  width: 221px;
  height: 162px;
  border-radius: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:active {
    background-color: #c5c2c4;
  }
`;
const Title = styled.p`
  font-weight: 700;
`;

const Card = ({ title, students, id }) => {
  return (
    <Link
      to={`/course/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <MyCard>
        <Title>{title}</Title>

        <Title>Students:{students} </Title>
      </MyCard>
    </Link>
  );
};

export default Card;
