import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import {
  OrderConfirmationContainer,
  ConfirmationHeader,
  ConfirmationText,
  VerticalLine
} from './Orders.styled';
import OrderConfirmation from './success.svg';

function OrderConfirmationPage() {
  return (
    <div>
        <VerticalLine />
        <OrderConfirmationContainer>
        <img
            src={OrderConfirmation}  
            alt="Order Confirmation"
        />
        <ConfirmationHeader>Success!</ConfirmationHeader>
        <ConfirmationText>Your order has been confirmed. Thank you for shopping with us!</ConfirmationText>
        <Button style={{borderRadius: "10px", background: "#000000", color: "#ffffff", borderColor: "#000000" }} size={"large"}>
            <NavLink to="/catalog">Go Back to Catalog</NavLink>
            </Button>
        </OrderConfirmationContainer>
        </div>
  );
}

export default OrderConfirmationPage;
