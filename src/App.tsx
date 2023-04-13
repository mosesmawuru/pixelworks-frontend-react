// @import npm modules
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// @import custom components
import { About, Home, Speciality } from "./pages";
import { AppLayout } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />} />
        <Route path="/speciality" element={<Speciality />} />
      </Route>
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
