import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CharacterDetails from "./CharacterDetails";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/characterDetails" element={<CharacterDetails/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
