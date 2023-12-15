import React, { useState } from "react";
import { FrownOutlined } from '@ant-design/icons';
import { Space, Input, InputNumber, Button } from 'antd';
import {
    StonesTypeContainer,
    VerticalLine,
    PriceSection,
    StyledError,
    catalogStyles,
    WhiteText
} from "./Catalog.styled";
import dataCard from "./ProductData";
import CustomStoneItem from "../../components/StoneItems/StoneItems";

const { Search } = Input;


const Catalog = () => {
    const [searchStone, setSearchStone] = useState('');
    const [sortStone, setSortStone] = useState('');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(100000);

    const handleMenuClick = (element) => {
        setSortStone(element.key);
    };

    const handleSearch = (newSearchTerm) => {
        setSearchStone(newSearchTerm);
    }

    const handleMinPriceChange = (value) => {
        setMinPrice(value);
    }

    const handleMaxPriceChange = (value) => {
        setMaxPrice(value);
    }

    const sortData = (data, sortType) => {
        let sortedData = [...data];

        switch (sortType) {
            case '1':
                sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case '2':
                sortedData = sortedData.sort((a, b) => a.price - b.price);
                break;
            case '3':
                sortedData = sortedData.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return sortedData.filter(item => item.title.toLowerCase().includes(searchStone.toLowerCase()) && item.price >= minPrice && item.price <= maxPrice);
    };

    const sortedProducts = sortData(dataCard, sortStone);

    const filteredProducts = sortedProducts.filter(item => item.title.toLowerCase().includes(searchStone.toLowerCase()));

    return (
        <div>
            <VerticalLine />
            <Space
                wrap
                style={{ display: "flex", justifyContent: "space-evenly" }}
            >
                <Space>
                    <Button style={{borderRadius: "10px", 
                    background: "#000000", color: "#ffffff", 
                    borderColor: "#000000"}} 
                    onClick={() => handleMenuClick({ key: '1' })}>Sort by Name</Button>
                    <Button style={{borderRadius: "10px", 
                    background: "#000000", color: "#ffffff", 
                    borderColor: "#000000"}} 
                    onClick={() => handleMenuClick({ key: '2' })}>Sort by Increasing Price</Button>
                    <Button style={{borderRadius: "10px", 
                    background: "#000000", 
                    color: "#ffffff", 
                    borderColor: "#000000"}} 
                    onClick={() => handleMenuClick({ key: '3' })}>Sort by Decreasing Price</Button>
                </Space>
                <PriceSection>
                    <div style={{ marginRight: "10px" }}>Price:</div>
                    <InputNumber
                        addonBefore={<WhiteText>from</WhiteText>}
                        addonAfter={<WhiteText>$</WhiteText>}
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min={1}
                        max={maxPrice - 1}
                        style={{ 
                          marginRight: "10px",
                          borderRadius: "10px",
                          backgroundColor: "#000000",
                          color: "#ffffff",
                          borderColor: "#000000" 
                      }}
                    />
                    <InputNumber
                        addonBefore={<WhiteText>to</WhiteText>}
                        addonAfter={<WhiteText>$</WhiteText>}
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min={minPrice + 1}
                        max={100000}
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#000000",
                          color: "#ffffff",
                          borderColor: "#000000" 
                      }}
                    />
                </PriceSection>
                <Search
                    style={catalogStyles.searchStyle}
                    placeholder="Input search text"
                    allowClear
                    enterButton={<Button style={catalogStyles.buttonStyle}>Search</Button>}
                    size="large"
                    onSearch={handleSearch}
                />
            </Space>
            <VerticalLine />
            <StonesTypeContainer>
                {filteredProducts.length === 0 ? (
                    <StyledError>
                        <FrownOutlined style={{ fontSize: "150px" }} />
                        <h1>No stones found.</h1>
                    </StyledError>
                ) : (
                        filteredProducts.map((item) => (
                            <CustomStoneItem
                                id={item.id}
                                title={item.title}
                                text={item.text}
                                imageSrc={item.image}
                                price={item.price}
                                dataItem={item}
                            />
                        ))
                    )}
            </StonesTypeContainer>
        </div>
    );
};

export default Catalog;
