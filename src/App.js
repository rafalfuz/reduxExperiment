import React from "react";
import "./App.css";
import Lesson from "./Lesson";
import TheEndTopic from "./TheEndTopic";
import Topic from "./Topic";
import styled from "styled-components";

const StyledChildren = styled.div`
  margin: 15px auto;
  font-size: 24px;
  text-align: center;
`;
class App extends React.Component {
  state = {
    size: 1,
  };

  handleGrowUp = () => {
    this.setState((prevState) => ({
      size: prevState.size + 1,
    }));
  };

  handleDecresing = (props) => {
    props < 2
      ? this.setState({ size: 1 })
      : this.setState((prevState) => ({ size: prevState.size - 1 }));
  };

  render() {
    const { lesson, title, children } = this.props;

    return (
      <>
        <Lesson numberOfLesson={lesson} />
        <Topic topic={title} />
        <StyledChildren>{children}</StyledChildren>
        <TheEndTopic />
      </>
    );
  }
}

export default App;
