import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/button/button";
import { Form } from "../../components/form";
import Input from "../../components/input/input";
import SideBar from "../../components/sidebar/sidebar";
import MyContext from "../../context/Context";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import { LIGHTGRAY } from "../../const/colors";
import OpenSidebar from "../../components/openSidebar";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  background-color: ${(props) => props.color || LIGHTGRAY};
  width: 199px;
  height: ${(props) => props.height || "33px"};
  border-radius: 10px;
  border: none;
`;

const AddStudents = () => {
  const { addStudent, currentCourse, getCourseById, students, getAllStudents } =
    useContext(MyContext);
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const [siblings, setSiblings] = useState([]);
  const [visible,setVisible]=useState(true)
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    id: "",
    courseId: "",
    siblings: [],
  });

  useEffect(() => {
    getCourseById(id);
    getAllStudents();
  }, [refresh]);

  const handleCreate = () => {
    student.id = nanoid();
    student.courseId = currentCourse.id;
    student.siblings=siblings
    addStudent(student);
    setRefresh((prev) => (prev = !prev));
    setStudent({
      name: "",
      email: "",
      age: "",
      id: "",
      courseId: "",
      gender:'',
      siblings:[]
    });
    setSiblings([])
  };

  const handleChange = (event) => {
    setStudent((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSibling = (event) => {
    let found = siblings.filter((item) => item === event.target.value);

    if (found.length === 0) {
      setSiblings((prev) => [...prev, event.target.value]);
    } else {
      let filtered = siblings.filter((item) => item !== event.target.value);
      setSiblings(filtered);
    }
  };

  return (
    <Wrapper>
      <SideBar visible={visible} setVisible={setVisible}/>
      <OpenSidebar setVisible={setVisible}/>

      <Form>
        <h3>Add Students</h3>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name:"
          value={student.name}
        />
        <br />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email:"
          value={student.email}

        />
        <br />
        <Input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Age:"
          value={student.age}

        />
        <br />
        <Select name="gender" onChange={handleChange}>
          <option selected>Choose Gender</option>

          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <br />

        <label htmlFor="siblings">Total siblings {siblings.length}</label>
        <Select
          name="siblings"
          multiple
          onChange={handleChangeSibling}
          height="90px"
        >
          <option selected >
            Choose Sibling
          </option>

          {students.map((item) => {
            return <option value={item.id}>{item.name}</option>;
          })}
        </Select>
        <br />
        <Button text="Add" onClick={handleCreate} />
      </Form>
    </Wrapper>
  );
};

export default AddStudents;
