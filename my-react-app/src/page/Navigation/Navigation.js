import React from 'react';
import { StonesTypeContainer, ViewMoreContainer,  ViewMoreButton, NavigationContainer, DiamondImage, TextContainer, Title, Subtitle } from './Navigation.styled';
import Diamond from '../../components/Photos/diamond.png'
import Ruby from "../../components/Photos/Ruby.png";
import Emerald from "../../components/Photos/emerald.png";
import Sapphire from "../../components/Photos/sap.png";
import CustomStoneItem from "../../components/StoneItems/StoneItems";

const dataCard = [
  {
      image: Ruby,
      title: "Ruby",
      text: "A symbol of love and purity ",
      price: 1900,
  },
  {
      image: Emerald,
      title: "Emerald",
      text: "Associated with growth and harmony",
      price: 1200,
  },
  {
      image: Sapphire,
      title: "Sapphire",
      text: "Brings peace, wisdom, and prosperity",
      price: 1500,
  },
];


const Navigation = () => {
  return (
    <div>
      <NavigationContainer>
        <DiamondImage src={Diamond} alt="diamond" />
        <TextContainer>
          <Title>Discover the Finest Gems</Title>
          <Subtitle>Explore our exquisite collection of diamonds and gemstones. 
              Find the perfect piece for every occasion, whether it's an engagement, anniversary, or any other special moment. 
              Our carefully curated selection offers a range of stunning and unique designs crafted with the utmost precision and care.</Subtitle>
        </TextContainer>
      </NavigationContainer>
      <StonesTypeContainer>
              {dataCard.map(({ image, title, text, price}) => (
                  <CustomStoneItem
                      imageSrc={image}
                      title={title}
                      text={text}
                      price={price}
                  />
              ))}
          </StonesTypeContainer>
          <ViewMoreContainer>
        <ViewMoreButton>View More</ViewMoreButton>
          </ViewMoreContainer>
    </div>
  );
};

export default Navigation;