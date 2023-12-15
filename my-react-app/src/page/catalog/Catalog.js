import React from "react";
import { Space, Input, InputNumber, Button } from 'antd';
import {
    StonesTypeContainer,
    VerticalLine,
    PriceSection,
} from "./Catalog.styled";
import dataCard from "./ProductData";
import CustomStoneItem from "../../components/StoneItems/StoneItems";
import { catalogStyles } from "./Catalog.styled";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);


const handleNameSort = () => {};

const handlePriceIncreaseSort = () => {};

const handlePriceDecreaseSort = () => {};

const sortButtons = [
    { label: 'Sort by name', onClick: handleNameSort },
    { label: 'Sort by increasing price', onClick: handlePriceIncreaseSort },
    { label: 'Sort by decreasing price', onClick: handlePriceDecreaseSort },
  ];
  
  const sortButtonElements = sortButtons.map(({ label, onClick }) => (
    <Button key={label} style={catalogStyles.buttonStyle} onClick={onClick}>
      {label}
    </Button>
  ));

  const Catalog = () => {
    return (
      <div>
        <VerticalLine />
        <Space
          wrap
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
        {sortButtonElements}
          <PriceSection>
            <div style={{ marginRight: "10px" }}>Price:</div>
            <InputNumber addonBefore="from" addonAfter="$" defaultValue={0} style={{ marginRight: "10px" }} />
            <InputNumber addonBefore="to" addonAfter="$" defaultValue={0} />
          </PriceSection>
          <Search
            style={catalogStyles.searchStyle}
            placeholder="Input search text"
            allowClear
            enterButton={<Button style={catalogStyles.buttonStyle}>Search</Button>}
            size="large"
            onSearch={onSearch}
          />
        </Space>
        <VerticalLine />
        <StonesTypeContainer>
          {dataCard.map(({ image, title, text, price }) => (
            <CustomStoneItem
              key={title}
              imageSrc={image}
              title={title}
              text={text}
              price={price}
            />
          ))}
        </StonesTypeContainer>
      </div>
    );
  };
  
  export default Catalog;