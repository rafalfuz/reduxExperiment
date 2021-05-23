import React from "react";
import styled from "styled-components";
import Element from "./Element";
import { connect } from "react-redux";

const StyledWrapperElements = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  width: 90%;
`;

const ListOfElements = ({ user }) => {
  const onceElement = user.map((item) => <Element key={item.id} {...item} />);

  return <StyledWrapperElements>{onceElement}</StyledWrapperElements>;
};

const ConnectReduxStateToProps = (store) => ({
  user: store.user,
});

const StoredListOfElements = connect(ConnectReduxStateToProps)(ListOfElements);

export default StoredListOfElements;
