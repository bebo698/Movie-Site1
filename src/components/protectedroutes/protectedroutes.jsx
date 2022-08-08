import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import Home from "../Home/Home";
import { withRouter } from "../../utils/withRouter";
export default withRouter(
  class ProtectedRoutes extends Component {
    state = { isAuthrized: false };
    componentDidMount() {
      let token = localStorage.getItem("token");
      try {
        var decoded = jwtDecode(token);
        console.log(decoded);
      } catch (error) {
        localStorage.clear()
        console.log("lol")
        this.props.navigate("/login");
      }
      if (localStorage.getItem("token") != null) {
        this.setState({ isAuthrized: true });
      } else {
        this.setState({ isAuthrized: false });
        this.props.navigate("/login");
      }
    }

    render() {
      return (
        // true ro7 3la el home : ro7 3la el false
        <>{this.state.isAuthrized ? <Home /> : this.props.navigate("/login")}</>
      );
    }
  }
);
