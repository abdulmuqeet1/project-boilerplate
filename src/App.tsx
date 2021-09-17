import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 450px;
  height: 250px;
  img {
    width: 300px;
    height: 250px;
  }
`;

export const App = (): JSX.Element => {
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div>
      <main>
        <ImageWrapper>
          <img src={require("./assets/headphone.jpg")} alt="headphone" />
        </ImageWrapper>
        <h2>concept studio</h2>
        <h3>
          <IoLocationSharp /> LAHORE, PAK
        </h3>
        <br /> <p>{new Date().toString()}</p>
      </main>
    </div>
  );
};
