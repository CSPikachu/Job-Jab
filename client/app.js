import React, { Component, useState } from 'react';
// import ReactLogo from '../imgs/Tracing.svg';
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

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loggedIn: true,
//     };
//   }
const App = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <div className='app'>
      <ChakraProvider>
        <Router>
          <div className='navContainer'>
            <nav className='navbar'>
              {!LoggedIn && (
                <Flex spacing='30px'>
                  <Link p='4' to='/'>
                    Home
                  </Link>
                  <Spacer />
                  <img
                    src='https://svgshare.com/i/Rc3.svg'
                    alt='React Logo'
                    width='250px'
                    height='250px'
                    style={{ paddingLeft: '100px' }}
                  />
                  <Spacer />
                  <div className='top-right'>
                    <Link style={{ marginRight: '10px' }} p='4' to='/auth'>
                      Login
                    </Link>
                    <Link p='4' to='/register'>
                      Register
                    </Link>
                  </div>
                </Flex>
              )}
              {LoggedIn && (
                <Flex>
                  <Link p='4' to='/'>
                    Home
                  </Link>
                  <Spacer />
                  <img
                    src='https://svgshare.com/i/Rc3.svg'
                    alt='React Logo'
                    width='250px'
                    height='250px'
                    style={{ paddingLeft: '100px' }}
                  />
                  <Spacer />
                  <div className='top-right'>
                    <Link style={{ marginRight: '10px' }} p='4' to='/jobapps'>
                      Job Apps
                    </Link>
                    <Link
                      to='/auth'
                      onClick={() => {
                        setLoggedIn(false);
                      }}
                    >
                      Log Out
                    </Link>
                  </div>
                </Flex>
              )}
            </nav>
            <Switch>
              {LoggedIn && (
                <Route path='/jobapps'>
                  <JobApps />
                </Route>
              )}
              <Route path='/register'>
                <Register setLoggedIn={setLoggedIn} />
              </Route>
              <Route path='/auth'>
                <Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} />
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
};

export default App;
