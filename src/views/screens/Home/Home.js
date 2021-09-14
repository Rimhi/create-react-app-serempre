import React, { Suspense } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import useControllers from "../../../controllers";
import useComponents from "../../components";
import useSkeletons from "../../skeletons";

const Home = () => {
  // Components & Skeleton
  const { MovieInfoOne } = useComponents();
  const { MovieInfoOneSkeleton } = useSkeletons();

  //Hooks
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { movieNumberOne } = useHome();

  const { promiseInProgress } = usePromiseTracker();

  return (
    <div>
      <header>Home</header>
      <Suspense fallback={<MovieInfoOneSkeleton />}>
        <MovieInfoOne movieNumberOne={movieNumberOne} />
      </Suspense>
    </div>
  );
};

export default Home;
