import React from "react";
import { Button, Card } from "antd";
import { PriceSection } from "./StoneItems.styled";
import {Link} from "react-router-dom";

const { Meta } = Card;

const CustomStoneItem = (props) => (
        <Card
            style={{ width: 300, borderRadius: "20px", margin: 20 }}
            cover={
                <img style={{ borderRadius: "20px", height: "300px" }} alt="example" src={props.imageSrc} />
            }
        >
            <Meta title={props.title} description={props.text} />
            <PriceSection>
                <p>Price: ${props.price}</p>
                <Link to={`/itempage/${props.id}`} style={{textDecoration: "none"}}>
                    <Button style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000" }}>Buy</Button>
                </Link>
            </PriceSection>
        </Card>
);

export default CustomStoneItem;
