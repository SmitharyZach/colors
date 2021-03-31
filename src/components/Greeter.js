import { render } from "@testing-library/react";
import React from "react";

class Greeter extends React.Component {
  render() {
    return <h1>Hello again, {this.props.name} </h1>;
  }
}

export default Greeter;
