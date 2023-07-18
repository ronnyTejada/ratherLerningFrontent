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
  flex-direction: column;
  justify-items: space-around;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, logged } = useContext(MyContext);
  let navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (logged) {
      navigate("/dashboard");
    } else {
      alert("user: admin, password: admin");
    }
  }, [logged]);

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
        {!loading && (
          <Button
            text="Login"
            onClick={() => login(email, password,setLoading)}
          />
        )}
        {loading && <Button text="Loading" onClick={() => ""} />}
      </Form>

      <TextWrapper>
        <a
          href="https://github.com/ronnyTejada/ratherLerningFrontent"
          target="_blank"
        >
          codigo frontend
        </a>
        <a
          href="https://github.com/ronnyTejada/ratherlerningbackend"
          target="_blank"
        >
          codigo backend
        </a>
      </TextWrapper>
    </Wrapper>
  );
};

export default Login;
