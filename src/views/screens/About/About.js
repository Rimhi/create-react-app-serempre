import React, { Suspense } from "react";
import useComponents from "../../components";

const About = () => {
  const { MovieInfoTwo } = useComponents();
  console.log("About ejecutado");
  return (
    <div>
      <p>Abaout Screen</p>
      <Suspense fallback={<h1 style={{ backgroundColor: "blue" }}>FFFFFFFFFFFFFF</h1>}>
        <MovieInfoTwo />
      </Suspense>
    </div>
  );
};

export default About;
