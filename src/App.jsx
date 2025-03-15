import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionOverview from "./components/CollectionsOverview";
import CollectionDetailsPage from "./components/CollectionDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path="/collection/:id" element={<CollectionDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
