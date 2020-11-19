import React, { Component, useState } from "react";
import styles from "./css/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider, HStack, Divider, Center } from "@chakra-ui/react";
import Register from "./register";
import Login from "./login";
import JobApps from "./jobapps";
import HomePage from "./homepage";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loggedIn: false,
//     };
//   }

const App = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <ChakraProvider>
        <Router>
          <div className="navContainer">
            <nav className="navbar">
              <HStack spacing="1.5rem">
                {!LoggedIn && (
                  <>
                    <Link to="/login">Login</Link>
                    <Center height="50px" paddingRight="20px">
                      <Divider orientation="vertical" />
                    </Center>
                    <Link to="/register">Register</Link>
                    <Center height="50px">
                      <Divider orientation="vertical" />
                    </Center>
                    <Link to="/">Home</Link>
                    {/* <img
                        style={{ alignContent: "center" }}
                        src="../imgs/Logo.png"
                        alt="logo"
                      ></img> */}
                  </>
                )}
                {LoggedIn && (
                  <>
                    <Link
                      to="/login"
                      onClick={() => {
                        setLoggedIn(false);
                      }}
                    >
                      Log Out
                    </Link>
                    <Center height="50px" paddingRight="20px">
                      <Divider orientation="vertical" />
                    </Center>
                    <Link to="/jobapps">Job Apps</Link>
                    <Center height="50px">
                      <Divider orientation="vertical" />
                    </Center>
                    <Link to="/">Home</Link>
                  </>
                )}
              </HStack>
            </nav>
            <Divider orientation="horizontal" />
            <Switch>
              {LoggedIn && (
                <Route path="/jobapps">
                  <JobApps />
                </Route>
              )}
              <Route path="/register">
                <Register setLoggedIn={setLoggedIn} />
              </Route>
              <Route path="/login">
                <Login setLoggedIn={setLoggedIn} />
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
};

export default App;
