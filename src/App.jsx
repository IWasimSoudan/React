import React from "react";
import Home from "./Home";
import Update from "./Update";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
const App = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/create" element={<Create />}>
            {" "}
          </Route>
          <Route path="/update/:id" element={<Update />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
