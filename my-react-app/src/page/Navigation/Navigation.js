import React, {useState} from 'react';
import { StonesTypeContainer, ViewMoreContainer,  ViewMoreButton, NavigationContainer, DiamondImage, TextContainer, Title, Subtitle } from './Navigation.styled';
import Diamond from '../../components/Photos/diamond.png'
import CustomStoneItem from "../../components/StoneItems/StoneItems";
import dataCard from '../catalog/ProductData';


const textTitle = "Discover the Finest Gems";

const titleText = "Explore our exquisite collection of diamonds and gemstones. \n" +
    "                        Find the perfect piece for every occasion, whether it's an engagement, anniversary, or any other special moment.\n" +
    "                        Our carefully curated selection offers a range of stunning and unique designs crafted with the utmost precision and care."


const Navigation = () => {
    const [showAllCards, setShowAllCards] = useState(false);
    const cardsToDisplay = showAllCards ? dataCard : dataCard.slice(0, 3);
    const buttonText = showAllCards ? "Hide" : "View more";

    const handleClick = () => {
      setShowAllCards(!showAllCards);
  };

  return (
    <div>
      <NavigationContainer>
        <DiamondImage src={Diamond} alt="diamond" />
        <TextContainer>
          <Title>{textTitle}</Title>
          <Subtitle>{titleText}</Subtitle>
        </TextContainer>
      </NavigationContainer>
      <StonesTypeContainer>
            {cardsToDisplay.map((item) =>  (
                  <CustomStoneItem
                      id={item.id}
                      imageSrc={item.image}
                      title={item.title}
                      text={item.text}
                      price={item.price}
                  />
              ))}
          </StonesTypeContainer>
          <ViewMoreContainer>
        <ViewMoreButton size="large" onClick={() => handleClick()} style={{borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", width: "200px"}}>{buttonText}</ViewMoreButton>
          </ViewMoreContainer>
    </div>
  );
};

export default Navigation;