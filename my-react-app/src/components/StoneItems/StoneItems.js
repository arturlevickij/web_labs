import React from "react";
import { Button, Card } from "antd";
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
            <Button style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000" }}>Buy</Button>
        </PriceSection>
    </Card>
);

export default CustomStoneItem;
