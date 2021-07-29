import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View``;

const SerachContainer = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 7px;
  justify-content: center;
  padding-left: 10px;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const Text = styled.Text``;

export default () => {
  const navigation = useNavigation();
  return (
    <DismissKeyboard>
      <Container>
        <SerachContainer>
          <SearchBar autoFocus={true} placeholder="Search by city..." />
          <CancelContainer onPress={() => navigation.goBack()}>
            <CancelText>Cancel</CancelText>
          </CancelContainer>
        </SerachContainer>
        <TextInput placeholder="beds" keyboardType={"number-pad"} />
        <TextInput placeholder="bedrooms" keyboardType={"number-pad"} />
        <TextInput placeholder="bathrooms" keyboardType={"number-pad"} />
      </Container>
    </DismissKeyboard>
  );
};
