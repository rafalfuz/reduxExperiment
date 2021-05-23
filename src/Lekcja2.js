import React from "react";
import { createStore } from "redux";
const initialState = {
  books: [],
};

const myReducer = (state = initialState, { type, payload }) => {
  if (type === "ADD_BOOK") {
    return {
      books: [...state.books, payload],
    };
  }
};

const store = createStore(myReducer);

const addBook = (book) => ({ type: "ADD_BOOK", payload: book });

store.dispatch(addBook({ title: "Ogniem i mieczem", author: "H.Sienkiewicz" }));
store.dispatch(addBook({ title: "Potop", author: "H.Sienkiewicz" }));
store.dispatch(addBook({ title: "Pan Wołodyjowski", author: "H.Sienkiewicz" }));

console.log(store.getState());
const Lekcja2 = () => (
  <h1 onClick={() => console.log(store.getState())}>Lekcja2</h1>
);

export default Lekcja2;
