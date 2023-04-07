import React from "react";
import Input from "../input/Input";

export interface Props {
  searchInput?: string;
  setSearchInput: (value: string) => void;
}
const Header: React.FC<Props> = ({ searchInput, setSearchInput }) => {
  return (
    <React.Fragment>
      <h1
        style={{
          cursor: "pointer",
          color: "white",
          padding: "10px",
        }}
      >
        Kurtlar Vadisi Konsey Uyeleri
      </h1>
      <Input searchInput={searchInput} setSearchInput={setSearchInput} />
    </React.Fragment>
  );
};

export default Header;
