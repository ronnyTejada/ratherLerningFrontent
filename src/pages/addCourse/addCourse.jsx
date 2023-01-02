import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/button/button";
import { Form } from "../../components/form";
import Input from "../../components/input/input";
import SideBar from "../../components/sidebar/sidebar";
import MyContext from "../../context/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router";
import { ApiService } from "../../api";
import OpenSidebar from "../../components/openSidebar";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCourse = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const [visible,setVisible]=useState(true)
  const { createCourse, getCourseById, currentCourse } = useContext(MyContext);
  const navigate = useNavigate();
  const handleName = (event) => {
    setName(event.target.value);
  };
  // const handleStudents = (event) => {
  //   setStudents(event.target.value);
  // };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    if (id) {
      getCourseById(id);
      setName(currentCourse.title);
      setDescription(currentCourse.description);
      setCategory(currentCourse.category);
    } else {
      setName("");
      setDescription("");
      setCategory("");
    }
  }, [id]);

  const handleCreate = () => {
    let course = {
      title: name,
      students: [],
      category: category,
      description: description,
      id: nanoid(),
    };
    createCourse(course,navigate);
  };

  const handleEdit = async () => {
    let course = {
      title: name,
      category: category,
      description: description,
      _id: currentCourse._id,
    };
    let response = await ApiService.editCourse(course);
    console.log(response);
    if (response.status) {
      navigate("/course/" + currentCourse.id);
    }
  };

  return (
    <Wrapper>
      
      <SideBar visible={visible} setVisible={setVisible}/>
      <OpenSidebar setVisible={setVisible}/>
      <Form>
        <h3>{currentCourse !== null ? "EDIT COURSE" : "NEW COURSE"}</h3>
        <br />

        <>
          <Input
            placeholder={"Course Name:"}
            value={name}
            onChange={handleName}
          />
          <br />
          <Input
            placeholder={"Category"}
            value={category}
            onChange={handleCategory}
          />
          <br />
          <Input
            placeholder={"Description"}
            value={description}
            onChange={handleDescription}
          />
          <br />
          {id ? (
            <Button text="Edit" onClick={handleEdit} />
          ) : (
            <Button text="Create" onClick={handleCreate} />
          )}
        </>
      </Form>
    </Wrapper>
  );
};

export default AddCourse;
