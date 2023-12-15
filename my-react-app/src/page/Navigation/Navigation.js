import React, { useState, useEffect } from 'react';
import { StonesTypeContainer, ViewMoreContainer,  ViewMoreButton, NavigationContainer, DiamondImage, TextContainer } from './Navigation.styled';
import Diamond from '../../components/Photos/diamond.png'
import CustomStoneItem from "../../components/StoneItems/StoneItems";
import dataCard from '../catalog/ProductData';
import homeText from "./Text";
import {getDefaultStoneList} from "../../fetching";

const Navigation = () => {
  const [stoneData, setBackendData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [showHideButton, setShowHideButton] = useState(false);

  useEffect(() => {
      getDefaultStoneList()
          .then((response) => {
              setBackendData(response.data);
          })
          .catch((error) => {
              console.error('Помилка під час отримання даних:', error);
          });
  }, []);

  const showMore = () => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
      setShowHideButton(true);
  };

  const hideItems = () => {
      setVisibleItems(3);
      setShowHideButton(false);
  };
  return (
    <div>
      <NavigationContainer>
        <DiamondImage src={Diamond} alt="diamond" />
        <TextContainer>
          {homeText.map((item, index) => (
                        <div key={index}>
                            <h1>{item.textTitle}</h1>
                            <p>{item.titleText}</p>
                        </div>
                    ))}
        </TextContainer>
      </NavigationContainer>
      <StonesTypeContainer>
          {stoneData.slice(0, visibleItems).map((item) =>  (
                  <CustomStoneItem
                      id={item.id}
                      imageSrc={dataCard[item.id].image}
                      title={item.title}
                      text={item.text}
                      price={item.price}
                  />
              ))}
          </StonesTypeContainer>
          <ViewMoreContainer>
          {showHideButton ? (
            <ViewMoreButton  onClick={hideItems} size="large"style={{borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", width: "200px"}}>Hide</ViewMoreButton>
               ) : (
            <ViewMoreButton onClick={showMore} size="large" style={{borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", width: "200px"}} >View more</ViewMoreButton>
             )}
          </ViewMoreContainer>
    </div>
  );
};

export default Navigation;