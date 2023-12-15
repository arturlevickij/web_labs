import React from "react";
import { useSelector } from "react-redux";
import {
  CartStyled,
  ImageStyled,
  DataInfo,
  DataButtonStyled,
  VerticalLine,
  CartButtonStyled,
  TotalPrice,
  CartSyte,
  EmptyCart
} from "./Cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "antd";
import dataCard from "../catalog/ProductData";
import { incrementCount, decrementCount, deleteCartItem } from "./action";
import emptyCartImage from "./empty.svg";

const Cart = () => {
  const stoneArray = useSelector((state) => state.stoneList);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (stoneArray && stoneArray.length > 0) {
      const totalPrice = stoneArray.reduce((acc, stone) => {
        return acc + Math.round(stone.price) * stone.count;
      }, 0);
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [stoneArray]);

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCount(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteCartItem(id));
  };

  const filteredStones = stoneArray ? stoneArray.filter((stone) => stone.count > 0) : [];

  return (
    <div>
      <VerticalLine />
      <CartSyte>
        {filteredStones.length > 0 ? (
          <CartStyled>
            {filteredStones.map((stone) => (
              <div key={stone.id}>
                <DataInfo>
                  <NavLink
                    exact="true"
                    to={`/itempage/${stone.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={(e) => {
                      if (e.target.tagName === "BUTTON") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <ImageStyled src={dataCard[stone.id].image} />
                  </NavLink>
                  <h3>{stone.name}</h3>
                  <DataButtonStyled>
                    <Button
                      style={{
                        borderRadius: "10px",
                        background: "#000000",
                        color: "#ffffff",
                        borderColor: "#000000",
                      }}
                      onClick={() => handleDecrement(stone.id)}
                    >
                      -
                    </Button>
                    <p>{stone.count}</p>
                    <Button
                      style={{
                        borderRadius: "10px",
                        background: "#000000",
                        color: "#ffffff",
                        borderColor: "#000000",
                      }}
                      onClick={() => handleIncrement(stone.id)}
                    >
                      +
                    </Button>
                    <Button
                      style={{
                        borderRadius: "10px",
                        background: "#000000",
                        color: "#ffffff",
                        borderColor: "#000000",
                      }}
                      onClick={() => handleDelete(stone.id)}
                    >
                      DELETE
                    </Button>
                  </DataButtonStyled>
                  <h4>{stone.price * stone.count}$</h4>
                </DataInfo>
              </div>
            ))}
          </CartStyled>
        ) : (
            <EmptyCart>
            <img src={emptyCartImage} alt="Empty Cart" />
            <p>Your cart is empty.</p>
          </EmptyCart>
        )}
        <TotalPrice>
          {totalPrice > 0 && (
            <p style={{ fontSize: "2.2vw", marginLeft: "1vw" }}>
              Total Price: {totalPrice}$
            </p>
          )}
        </TotalPrice>
        <CartButtonStyled>
          <Button
            style={{
              borderRadius: "10px",
              background: "#000000",
              color: "#ffffff",
              borderColor: "#000000",
            }}
            size={"large"}
          >
            <NavLink to="/Catalog">BACK TO CATALOG</NavLink>
          </Button>
          {totalPrice > 0 && (
            <Button
              style={{
                borderRadius: "10px",
                background: "#000000",
                color: "#ffffff",
                borderColor: "#000000",
              }}
              size={"large"}
            >
              <NavLink to="/checkout">BUY ONLINE</NavLink>
            </Button>
          )}
        </CartButtonStyled>
      </CartSyte>
    </div>
  );
};

export default Cart;
