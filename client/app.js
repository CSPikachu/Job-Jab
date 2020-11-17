import React, { Component } from "react";
import styles from "./css/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Register from "./register";
import Login from "./login";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <ChakraProvider>
          <Router>
            <div>
              <nav>
                <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                  <GridItem>
                    <Link to="/register" style={{ width: "10px" }}>
                      Register
                    </Link>
                  </GridItem>

                  <GridItem>
                    <Link to="/login">Login</Link>
                  </GridItem>
                </Grid>
              </nav>
              <Switch>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/login">
                  <Login />
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
