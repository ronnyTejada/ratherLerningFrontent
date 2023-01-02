import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/card/card";
import Input from "../../components/input/input";
import SideBar from "../../components/sidebar/sidebar";
import MyContext from "../../context/Context";
import OpenSidebar from "../../components/openSidebar";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CardFeed = styled.section`
  height: 100%;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Dashboard = () => {
  const { courses, getCourses } = useContext(MyContext);
  const [visible, setVisible] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getCourses();
  }, []);

  const handleSearch=(event)=>{
    setSearch(event.target.value)
  }
  return (
    <Wrapper>
      <SideBar visible={visible} setVisible={setVisible} />
      <OpenSidebar setVisible={setVisible} />

      <Header>
        <Input placeholder={"Web Development"} color="white" onChange={handleSearch}/>
      </Header>

      <CardFeed>
        {search.length > 0 ? (
          <>
            {courses
              .filter((item) => item.title.includes(search.toLocaleLowerCase()))
              .map((course) => (
                <Card
                  title={course.title}
                  id={course.id}
                  students={course.students.length}
                />
              ))}
          </>
        ) : (
          <>
            {courses.map((course) => (
              <Card
                title={course.title}
                id={course.id}
                students={course.students.length}
              />
            ))}
          </>
        )}
      </CardFeed>
    </Wrapper>
  );
};

export default Dashboard;
