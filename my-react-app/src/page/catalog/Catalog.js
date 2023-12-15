import React, { useEffect, useState } from "react";
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
import { getStoneList } from "../../fetching";
import Loading from "../../components/Loading/Loading";

const { Search } = Input;

const Catalog = () => {
    const [searchStone, setSearchStone] = useState('');
    const [sortStone, setSortStone] = useState('');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [stoneData, setBackendData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await getStoneList({
                    minPrice,
                    maxPrice,
                    sortStone,
                    searchStone,
                });
                let sortedData = [...response.data];
                setLoading(false);

                if (sortStone === '1') {
                    sortedData.sort((a, b) => a.price - b.price);
                } else if (sortStone === '3') {
                    sortedData.sort((a, b) => b.price - a.price);
                }

                setBackendData(sortedData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [minPrice, maxPrice, sortStone, searchStone]);

    const handleSearch = (newSearchTerm) => {
        setSearchStone(newSearchTerm);
    };

    return (
        <div>
            <VerticalLine />
            <Space
                wrap
                style={{ display: "flex", justifyContent: "space-evenly" }}
            >
                <Space>
                    <Button
                        style={{
                            borderRadius: "10px",
                            background: "#000000",
                            color: "#ffffff",
                            borderColor: "#000000"
                        }}
                        onClick={() => setSortStone('2')}
                    >
                        Sort by Name
                    </Button>
                    <Button
                        style={{
                            borderRadius: "10px",
                            background: "#000000",
                            color: "#ffffff",
                            borderColor: "#000000"
                        }}
                        onClick={() => setSortStone('1')}
                    >
                        Sort by Increasing Price
                    </Button>
                    <Button
                        style={{
                            borderRadius: "10px",
                            background: "#000000",
                            color: "#ffffff",
                            borderColor: "#000000"
                        }}
                        onClick={() => setSortStone('3')}
                    >
                        Sort by Decreasing Price
                    </Button>
                </Space>
                <PriceSection>
                    <div style={{ marginRight: "10px" }}>Price:</div>
                    <InputNumber
                        addonBefore={<WhiteText>from</WhiteText>}
                        addonAfter={<WhiteText>$</WhiteText>}
                        value={minPrice}
                        onChange={value => setMinPrice(value)}
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
                        onChange={value => setMaxPrice(value)}
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
                    enterButton={
                        <Button style={catalogStyles.buttonStyle} onClick={() => handleSearch(searchStone)}>
                            Search
                        </Button>
                    }
                    size="large"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </Space>
            <VerticalLine />
            {loading ? (
                <Loading />
            ) : (
            <StonesTypeContainer>
                {stoneData.length === 0 ? (
                    <StyledError>
                        <FrownOutlined style={{ fontSize: "150px" }} />
                        <h1>No stones found.</h1>
                    </StyledError>
                ) : (
                    stoneData.map((item) => (
                        <CustomStoneItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            text={item.text}
                            imageSrc={dataCard[item.id].image}
                            price={item.price}
                            dataItem={item}
                        />
                    ))
                )}
            </StonesTypeContainer>
             ) }
        </div>
    );
};

export default Catalog;
