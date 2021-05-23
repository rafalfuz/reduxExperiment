import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addUser } from "../../LekcjeUdemy/dataActions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  margin: 50px auto;
  background-color: cadetblue;
  border-radius: 10px;
`;

const StyledHeading = styled.h1`
  font-size: 36px;
  color: #fff;
  background-color: cadetblue;
`;

const StyledInput = styled.input`
  width: 200px;
  margin: 5px 10px 5px 25px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  :focus {
    background-color: aqua;
    color: #fff;
    border: 2px solid transparent;
    outline: none;
    font-weight: 700;
  }
`;

const StyledLabel = styled.label`
  font-size: 15px;
  margin: 0 auto;
  color: white;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background-color: tomato;
  color: #fff;
  font-weight: 700;
  margin: 15px;
`;
const Form = ({ id, name = "", age = "", comment = "", addUser }) => {
  const [nameInput, setNameInput] = useState(name);
  const [ageInput, setAgeInput] = useState(age);
  const [commentInput, setCommentInput] = useState(comment);

  const handleNameChange = (e) => setNameInput(e.target.value);
  const handleAgeInput = (e) => setAgeInput(e.target.value);
  const handleCommentInput = (e) => setCommentInput(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      name: nameInput,
      age: ageInput,
      comment: commentInput,
      id,
    };
    addUser(userObject);
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledHeading>Formularz rektrutacyjny</StyledHeading>

      <StyledLabel labelFor="name">
        Imie i Nazwisko:
        <StyledInput
          htmlFor="name"
          onChange={handleNameChange}
          value={nameInput}
        />
      </StyledLabel>

      <StyledLabel labelFor="age">
        Wiek:
        <StyledInput htmlFor="age" onChange={handleAgeInput} value={ageInput} />
      </StyledLabel>

      <StyledLabel labelFor="comment">
        Komentarz:
        <StyledInput
          htmlFor="comment"
          onChange={handleCommentInput}
          value={commentInput}
        />
      </StyledLabel>

      <Button type="submit">Wyślij</Button>
    </StyledForm>
  );
};

const connectActionsToProps = {
  addUser,
};

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;
