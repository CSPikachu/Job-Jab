import React, { Component } from "react";
import styles from "./css/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider, HStack, Divider, Center } from "@chakra-ui/react";
import Register from "./register";
import Login from "./login";
import JobApps from "./jobapps";

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
            <div>
              <nav style={{ padding: "10px", color: "blue", fontSize: "15pt" }}>
                <HStack spacing="2rem">
                  {!this.state.loggedIn && (
                    <>
                      <Link to="/register" style={{ textAlign: "center" }}>
                        Register
                      </Link>
                      <Center height="50px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Link to="/login" style={{ textAlign: "center" }}>
                        Login
                      </Link>
                    </>
                  )}
                  {this.state.loggedIn && (
                    <>
                      <Link to="/jobapps" style={{ textAlign: "center" }}>
                        Job Apps
                      </Link>
                      <Center height="50px">
                        <Divider orientation="vertical" />
                      </Center>
                      <Link to="/login" style={{ textAlign: "center" }}>
                        Log Out
                      </Link>
                    </>
                  )}
                </HStack>
              </nav>
              <Divider orientation="horizontal" />
              <Switch>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                {this.state.loggedIn && (
                  <Route path="/jobapps">
                    <JobApps />
                  </Route>
                )}
              </Switch>
            </div>
          </Router>
        </ChakraProvider>
      </div>
    );
  }
}

export default App;
