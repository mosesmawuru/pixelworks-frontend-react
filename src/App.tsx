// @import npm modules
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// @import custom components
import { About, Home, Speciality } from "./pages";
import { AppLayout } from "./layouts";

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speciality" element={<Speciality />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
