import React from "react";
import { IoLocationSharp } from "react-icons/io5";

export const App = () => {
  return (
    <div>
      <main>
        <img src="../public/googlelogo.png" alt="google logo" />
        <h2>concept studio</h2>
        <h3>
          <IoLocationSharp /> DUBAI, UAE
        </h3>
        <p>{new Date().toString()}</p>
      </main>
    </div>
  );
};
