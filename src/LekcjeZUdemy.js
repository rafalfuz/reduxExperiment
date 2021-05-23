import React from "react";
import styled from "styled-components";
import Form from "./LekcjeUdemy/Form/Form";
import ListOfElements from "./LekcjeUdemy/Form/ListOfElements";

const StyledSlogan = styled.h1`
  height: 120px;
  width: 100%;
  text-align: center;
  font-size: 94px;
  color: #edece6;
  background-color: #29303b;
  line-height: 120px;
  &::first-letter {
    color: #eb5352;
  }
`;

const LekcjeZUdemy = () => (
  <>
    <StyledSlogan>Lekcje z udemy</StyledSlogan>
    <Form />
    <ListOfElements />
  </>
);

export default LekcjeZUdemy;
