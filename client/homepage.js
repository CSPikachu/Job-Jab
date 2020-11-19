import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import './css/styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Container className='headerContainer'>
        <Heading className='headers' size='4xl'>
          Job Jab
        </Heading>
        <Text className='description'>
          Welcome to Job Jab, an application to store all your job applications!
        </Text>
      </Container>
    </div>
  );
};

export default HomePage;
