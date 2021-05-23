import React from "react";
import { createStore } from "redux";
import styled from "styled-components";
import TheEndTopic from "./TheEndTopic";

const Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: cadetblue;
  color: white;
  border: none;
  padding: 25px;
  text-transform: uppercase;
  border-radius: 10px;
`;
const initState = {
  books: ["HarryPotter", "The Witcher"],
  movies: ["Batman", "Rocky", "Superman", "Rambo"],
};

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESET":
      return { movies: [] };
    case "ADD":
      return { ...state, books: [...state.books, "Sherlock Holmes"] };
    default:
      return state;
  }
};

const movies = createStore(myReducer);
window.store = movies;
const filmy = initState.movies;
const Lekcja1 = () => (
  <>
    <div>Lekcja o Reduxie</div>
    <Button onClick={() => movies.dispatch({ type: "reset" })}>
      console.Log
    </Button>
    <Button onClick={() => console.log(movies.getState())}>console.Log</Button>
    <ul>
      {initState.movies.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <TheEndTopic />
    {filmy}
    <TheEndTopic />
  </>
);

export default Lekcja1;
