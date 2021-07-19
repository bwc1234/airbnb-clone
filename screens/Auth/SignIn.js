import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username}${password}`);
  return (
    <Container>
      <Input
        value={username}
        placeholder="Username"
        autoCapitalize="none"
        stateFn={setUsername}
      />
      <Input
        value={password}
        placeholder="Password"
        autoCapitalize="none"
        isPasswrd={true}
        stateFn={setPassword}
      />
      <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
    </Container>
  );
};
