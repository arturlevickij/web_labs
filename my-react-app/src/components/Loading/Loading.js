import React from "react";
import { Rectangle, LoadingContainer, Rectangle1, Rectangle2 } from "./Loading.styled";

const Loading = () => {
  return (
    <LoadingContainer>
      <Rectangle1 />
      <Rectangle />
      <Rectangle2 />
    </LoadingContainer>
  );
};

export default Loading;
