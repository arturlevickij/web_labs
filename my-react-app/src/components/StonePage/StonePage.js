import React from "react";
import {
    PriceSection,
    SectionWrapper,
    StyledButtons,
    StyledImage,
    StyledRightSection,
    StyledText
} from "./StonePage.styled";
import {Button} from "antd";
import {NavLink} from "react-router-dom";

const StoneDisplay = (props) => {
    const {stone} = props;
    return (
        <SectionWrapper>
            <StyledImage>
                <img src={stone.image} alt="#" />
            </StyledImage>
            <StyledRightSection>
                <h1>{stone.title}</h1>

                <StyledText>
                    {stone.text}
                </StyledText>
                <PriceSection>
                    <h5 style={{marginRight: "20px"}}>
                        Price:
                    </h5>
                    ${stone.price}
                    <Button style={{ marginLeft: "50px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000" }}> Buy </Button>
                </PriceSection>
                <StyledButtons>
                    <NavLink exact to="/catalog" activeClassName="selected">
                        <Button style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", width: "200px"}}>GO TO CATALOG</Button>
                    </NavLink>
                    <NavLink exact to="/cart" activeClassName="selected">
                        <Button style={{ marginTop: "10px", borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000", width: "200px"}}>ADD TO CART</Button>
                    </NavLink>
                </StyledButtons>
            </StyledRightSection>
        </SectionWrapper>
    )
}

export default StoneDisplay;