import React, { Component } from 'react';
import './css/styles.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  ChakraProvider,
  HStack,
  Divider,
  Center,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import Register from './register';
import Login from './login';
import JobApps from './jobapps';
import HomePage from './homepage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }
  render() {
    return (
      <div className='app'>
        <ChakraProvider>
          <Router>
            <div className='navContainer'>
              <nav className='navbar'>
                {!this.state.loggedIn && (
                  <Flex spacing='30px'>
                    <Link p='4' to='/'>
                      Home
                    </Link>
                    <Spacer />
                    <div className='top-right'>
                      <Link style={{ marginRight: '10px' }} p='4' to='/login'>
                        Login
                      </Link>
                      <Link p='4' to='/register'>
                        Register
                      </Link>
                    </div>
                    {/* <img
                        style={{ alignContent: 'center' }}
                        src='../imgs/Logo.png'
                        alt='logo'
                      ></img> */}
                  </Flex>
                )}
                {this.state.loggedIn && (
                  <Flex>
                    <Link p='4' to='/'>
                      Home
                    </Link>
                    <Spacer />
                    <div className='top-right'>
                      <Link style={{ marginRight: '10px' }} p='4' to='/jobapps'>
                        Job Apps
                      </Link>
                      <Link to='/login'>Log Out</Link>
                    </div>
                  </Flex>
                )}
              </nav>
              <Switch>
                {this.state.loggedIn && (
                  <Route path='/jobapps'>
                    <JobApps />
                  </Route>
                )}
                <Route path='/register'>
                  <Register />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/'>
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
