import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../components/sidebar/sidebar";
import { GRAY } from "../../const/colors";
import Table from "../../components/table/table";
import Button from "../../components/button/button";
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

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const CourseDetails = () => {
  const {
    getCourseById,
    currentCourse,
    getStudentsByCourse,
    students,
    deleteCourse,
  } = useContext(MyContext);
  const { id } = useParams();
  let navigate = useNavigate();
  const [visible,setVisible]=useState(true)


  useEffect(() => {
    getCourseById(id);
    getStudentsByCourse(id);
  }, []);

  const goToAdd = () => {
    navigate(`/add-student/${currentCourse.id}`);
  };
  const goToEdit = () => {
    navigate(`/edit-course/${currentCourse.id}`);
  };

  return (
    <Wrapper>
      <SideBar visible={visible} setVisible={setVisible}/>
      <OpenSidebar setVisible={setVisible}/>

      <Header>
        {currentCourse !== null ? (
          <>
            <h1>Title: {currentCourse.title}</h1>
            <h4>Students: {currentCourse.students.length}</h4>
            <h4>Category: {currentCourse.category}</h4>

            <p>Description: {currentCourse.description}</p>
            <Buttons>
              <Button text="Add Students" color="lightblue" onClick={goToAdd} />

              <Button text="Edit" color="white" onClick={goToEdit} />
              <Button
                text="Delete"
                color="red"
                onClick={() => deleteCourse(currentCourse._id, navigate)}
              />
            </Buttons>
          </>
        ) : (
          <p>LOADING</p>
        )}
      </Header>
      <Table data={students} title='students'/>
    </Wrapper>
  );
};

export default CourseDetails;
