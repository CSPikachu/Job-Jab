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
        <Text className='description'>Organization For A Better Tomorrow</Text>
      </Container>
    </div>
  );
};

export default HomePage;
