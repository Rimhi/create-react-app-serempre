import React, { Suspense } from "react";
import useComponents from "../../components";

const Dashboard = () => {
  const { MovieInfoThree } = useComponents();
  console.log("About ejecutado");
  return (
    <div>
      <p>Dashboard Screen</p>
      <Suspense
        fallback={<h3 style={{ backgroundColor: "green" }}>AaAaAaAaAaAaAaaAAaAaAaAaAaAaAaaA</h3>}
      >
        <MovieInfoThree />
      </Suspense>
    </div>
  );
};

export default Dashboard;
