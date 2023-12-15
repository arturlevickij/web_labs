import React from 'react';
import Ruby from "../Photos/Ruby.png";
import Emerald from "../Photos/emerald.png";
import Sapphire from "../Photos/sap.png";
import { StonesTypeContainer, ViewMoreContainer,  ViewMoreButton } from './StonesType.styled';
import CustomStoneItem from "../StoneItems/StoneItems";

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

const Home = () => {
  return (
      <div>
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

export default Home;