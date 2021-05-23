export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const addUser = ({ id, name, age, comment }) => ({
  type: ADD,
  payload: {
    id: Math.floor(Math.random() * 1234),
    name,
    age,
    comment,
  },
});

export const removeUser = ({ id }) => ({
  type: REMOVE,
  payload: {
    id,
  },
});
