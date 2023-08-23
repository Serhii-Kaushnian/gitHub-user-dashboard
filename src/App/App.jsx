import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";
import { LoaderPage } from "../components/Loader/Loader";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Repos = lazy(() => import("../pages/Repos/Repos"));
const Followers = lazy(() => import("../pages/Followers/Followers"));
const CommingSoon = lazy(() => import("../pages/CommingSoon/CommingSoon"));
const Error = lazy(() => import("../pages/Error/Error"));

function App() {
  return (
    <>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='repos' element={<Repos />} />
            <Route path='followers' element={<Followers />} />
            <Route path='following-gists' element={<CommingSoon />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
