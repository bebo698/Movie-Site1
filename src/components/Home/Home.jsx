import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log(this.props);
    return (
      <>
        <h1 style={{ color: "red" }}>hellooooooooooooooooo</h1>
      </>
    );
  }
}
