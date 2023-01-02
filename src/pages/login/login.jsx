import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/form";
import MyContext from "../../context/Context";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login,logged } = useContext(MyContext);
  let navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(()=>{
    if(logged)
      navigate('/dashboard')
  },[logged])

  return (
    <Wrapper>
      <Form>
        <h3>RATHER LERNING</h3>
        <br />
        <Input type="text" onChange={handleEmail} placeholder="Username:" />
        <br />
        <Input
          type="password"
          onChange={handlePassword}
          placeholder="Password:"
        />
        <br />
        <Button text="Login" onClick={() => login(email, password, navigate)} />
      </Form>
    </Wrapper>
  );
};

export default Login;
