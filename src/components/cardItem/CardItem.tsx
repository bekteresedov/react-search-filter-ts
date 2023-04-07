import React from "react";

interface Props {
  image: string;
  title: string;
  description: string;
}

const CardItem: React.FC<Props> = ({ image, title, description }) => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          width: "200px",
          minHeight: "200px",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <img
          style={{
            width: "60%",
            height: "7%",
            objectFit: "cover",
            marginTop: "10px",
          }}
          src={image}
          alt=""
        />
        <h4>{title}</h4>
        <p
          style={{
            padding: "10px",
          }}
        >
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default CardItem;
