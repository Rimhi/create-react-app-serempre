import React from "react";

const MovieInfoOne = ({ movieNumberOne }) => {
  return (
    <div style={styleContainer}>
      <img src="" style={styleImage}></img>
      <div style={{ padding: 15 }}>
        <h3>{movieNumberOne.title}</h3>
        <p>{movieNumberOne.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfoOne;

const styleContainer = {
  width: "100%",
  height: 300,
  border: "1px solid",
  borderRadius: 5,
  borderColor: "gray",
  display: "flex",
  overflow: "hidden",
};

const styleImage = {
  width: 200,
  height: "100%",
  backgroundColor: "#C3C3C3",
};
