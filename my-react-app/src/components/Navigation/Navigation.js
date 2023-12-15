import Diamond from '../Photos/diamond.png'
import React from 'react';
import { NavigationContainer, DiamondImage, TextContainer, Title, Subtitle } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <DiamondImage src={Diamond} alt={"diamond"} />
      <TextContainer>
        <Title>Discover the Finest Gems</Title>
        <Subtitle>Explore our exquisite collection of diamonds and gemstones.</Subtitle>
      </TextContainer>
    </NavigationContainer>
  );
};

export default Navigation;
