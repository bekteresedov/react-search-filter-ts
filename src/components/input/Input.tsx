import React from "react";
import { Props } from "../header/Header";

const Input: React.FC<Props> = ({ searchInput, setSearchInput }) => {
  return (
    <React.Fragment>
      <input
        style={{
          width: "50%",
          height: "40px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
          marginTop: "20px",
        }}
        type="search"
        placeholder="Konsey Uyesi Giriniz"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </React.Fragment>
  );
};

export default Input;
