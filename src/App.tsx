import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import CardItem from "./components/cardItem/CardItem";
import data from "./data.json";

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <React.Fragment>
      <div className="main">
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="items">
          {data
            .filter((i) => {
              if (searchInput == "") {
                return i;
              } else if (
                i.title
                  .toLocaleLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
              ) {
                return i;
              }
            })
            .map((data) => (
              <CardItem
                key={data?.id}
                image={data?.image}
                description={data?.Description}
                title={data?.title}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
