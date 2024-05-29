import React from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "@base/components/loader/loader";
const Home = React.lazy(() => import("@view/Home/Home")) 

const Routers: React.FC = () => {

  return (

    <Routes>
      <Route path=""
        element={
          <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>
        }
      />
    </Routes>

  );
};

export default Routers;