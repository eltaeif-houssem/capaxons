import React from "react";

import { Routes, Route } from "react-router-dom";

// import pages
import LandingPage from "./pages/LandingPage";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post" element={<PostDetails />} />
    </Routes>
  );
};

export default App;
