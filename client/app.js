import React, { Component } from "react";
import styles from "./css/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider, HStack, Divider, Center } from "@chakra-ui/react";
import Register from "./register";
import Login from "./login";
import JobApps from "./jobapps";
import HomePage from "./homepage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }
  render() {
    return (
      <div>
        <ChakraProvider>
          <Router>
            <div className="navContainer">
              <nav className="navbar">
                <HStack spacing="1.5rem">
                  {!this.state.loggedIn && (
                    <>
                      <Link to="/">Home</Link>
                      <Center height="50px" paddingRight="20px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Link to="/login">Login</Link>
                      <Center height="50px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Link to="/register">Register</Link>
                      <img
                        style={{ alignContent: "center" }}
                        src="../imgs/Logo.png"
                        alt="logo"
                      ></img>
                    </>
                  )}
                  {this.state.loggedIn && (
                    <>
                      <Link to="/">Home</Link>
                      <Center height="50px" paddingRight="20px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Link to="/login">Log Out</Link>
                      <Center height="50px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Link to="/jobapps">Job Apps</Link>
                    </>
                  )}
                </HStack>
              </nav>
              <Divider orientation="horizontal" />
              <Switch>
                {this.state.loggedIn && (
                  <Route path="/jobapps">
                    <JobApps />
                  </Route>
                )}
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </div>
          </Router>
        </ChakraProvider>
      </div>
    );
  }
}

export default App;
