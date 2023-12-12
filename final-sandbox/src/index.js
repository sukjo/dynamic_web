import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import UploadModal from "./modals/UploadModal";
import SignupModal from "./modals/SignupModal";
import LoginModal from "./modals/LoginModal";
import Protected from "./components/Protected";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<SignupModal />} />
      <Route path="login" element={<LoginModal />} />
      <Route path="upload" element={<UploadModal />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<HomePage />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
