import React from "react";

const MovieInfoOneSkeleton = () => {
  return (
    <div style={styleContainer}>
      <img src="" style={styleImage}></img>
      <div style={{ padding: 15, flex: 1 }}>
        <h3 style={{ width: 150, height: 20, backgroundColor: "#999" }}></h3>
        <p style={{ flex: 1, height: 10, backgroundColor: "#999" }}></p>
        <p style={{ flex: 1, height: 10, backgroundColor: "#999" }}></p>
        <p style={{ flex: 1, height: 10, backgroundColor: "#999" }}></p>
        <p style={{ flex: 1, height: 10, backgroundColor: "#999" }}></p>
        <p style={{ width: "50%", height: 10, backgroundColor: "#999" }}></p>
      </div>
    </div>
  );
};

export default MovieInfoOneSkeleton;

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
