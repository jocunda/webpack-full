import "./styles/index.scss";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TestSub from "./components/TestSub";
import TestSub2 from "./components/TestSub/TestSub2";

const AppHome = React.lazy(() => import("app_home/CounterAppHome"));
const AppLogin = React.lazy(() => import("app_login/CounterAppLogin"));

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AppHome />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AppLogin />
            </React.Suspense>
          }
        />
        <Route path="/TestSub2" element={<TestSub2 />} />
        <Route
          path="/"
          element={
            <h1>
              This is container <Link to="/login">click</Link>
              <Link to="/home">home</Link>
            </h1>
          }
        />
      </Routes>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppHome />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppLogin />
      </React.Suspense>
      <TestSub />
      layer0
    </>
  );
};

export default App;