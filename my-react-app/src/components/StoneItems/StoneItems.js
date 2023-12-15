import React from "react";
import { Card } from "antd";
import { PriceSection } from "./StoneItems.styled";

const { Meta } = Card;

const CustomStoneItem = ({ imageSrc, title = 'No title', text, price }) => (
    <Card
        style={{ width: 300, borderRadius: "20px", margin: 20 }}
        cover={
            <img style={{ borderRadius: "20px", height: "300px" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={text} />
        <PriceSection>
            <p>Price: ${price}</p>
        </PriceSection>
    </Card>
);

export default CustomStoneItem;

