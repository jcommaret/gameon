import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Root } from "./pages/Root";
import { Homepage } from "./pages/Homepage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
