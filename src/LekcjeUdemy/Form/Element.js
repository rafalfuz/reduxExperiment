import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeUser } from "../dataActions";

const List = styled.div`
  height: 300px;
  width: 300px;
  background-color: #fdac53;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.7);
`;
const Item = styled.p`
  color: red;
  list-style-type: none;
  color: #fff;
  font-size: 18px;
  margin-left: 20px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  margin: 20px;
  border-radius: 50%;
  border: none;
  color: #fdac53;
  background-color: crimson;
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  :hover {
    color: cornsilk;
    background-color: #fdac53;
  }
`;

const Element = ({ name, age, id, comment, removeUser }) => (
  <List>
    <Button onClick={() => removeUser({ id })}>X</Button>
    <Item>Nazwa użytkownika: {name}</Item>
    <Item>Wiek użytkownika: {age}</Item>
    <Item>Komentarz: {comment}</Item>
  </List>
);

const actions = {
  removeUser,
};

const ConnectedElement = connect(null, actions)(Element);

export default ConnectedElement;
