import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/button/button";
import SideBar from "../../components/sidebar/sidebar";
import { GRAY } from "../../const/colors";
import MyContext from "../../context/Context";
import Table from "../../components/table/table";
import { ApiService } from "../../api";
import OpenSidebar from "../../components/openSidebar";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Header = styled.article`
  background-color: ${GRAY};
  width: 60%;
  border-radius: 10px;
  padding-bottom: 10px;
`;
const StudentDetails = () => {
  const { student, getStudentsById } = useContext(MyContext);
  const [siblings, setSiblings] = useState([]);
  const { id } = useParams();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setSiblings([]);
    getStudentsById(id);
  }, []);

  useEffect(() => {
    setSiblings([]);
    if (student) {
      student.siblings.map((item) => {
        ApiService.getSibling(item, setSiblings);
      });
    }
  }, [student]);

  return (
    <Wrapper>
      <SideBar visible={visible} setVisible={setVisible} />
      <OpenSidebar setVisible={setVisible} />

      {student !== null ? (
        <>
          <Header>
            <h1>Name: {student.name}</h1>
            <h4>Email: {student.email}</h4>
            <h4>Age: {student.age}</h4>
          </Header>
        </>
      ) : (
        <p>LOADING</p>
      )}

      <Table data={siblings.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)} title={"Siblings"} />
    </Wrapper>
  );
};

export default StudentDetails;
