import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalState = (state) => {
    setIsModalOpen(state);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage onModalState={modalState} />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="gallery"
          element={<GalleryPage isModalOpen={isModalOpen} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
