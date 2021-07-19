import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  border: 1px solid grey;
  padding: 12.5px 20px;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Input = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
}) => (
  <Container
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitialize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitialize: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};

export default Input;
