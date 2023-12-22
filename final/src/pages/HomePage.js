import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./pages.module.css";

import { auth } from "../lib/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import Menu from "../components/Menu";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Upload from "../components/Upload";

export default function HomePage({ onModalState }) {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  useEffect(() => {
    const modalStatus =
      isSignupModalOpen || isLoginModalOpen || isUploadModalOpen;
    onModalState(modalStatus);
  }, [isSignupModalOpen, isLoginModalOpen, isUploadModalOpen, onModalState]);

  const navigate = useNavigate();
  const localAuth = getAuth();

  useEffect(() => {
    const loginStatus = onAuthStateChanged(localAuth, (user) => {
      if (user) {
        setIsSignupModalOpen(false);
      } else {
        setIsSignupModalOpen(true);
      }
    });
    return () => loginStatus();
  }, [localAuth]);

  const handleOpenSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };

  const doNotCloseModal = (e) => {
    e.preventDefault();
  };

  const handleOpenLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);

      // clear local storage variables
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // direct user back to login page
      navigate("/gallery");
      // setIsLoginModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenUpload = () => {
    setIsUploadModalOpen(true);
  };

  return (
    <div className={styles.homePage}>
      <Menu handleLogout={handleLogout} openUpload={handleOpenUpload} />
      {isSignupModalOpen && (
        <Signup onModalClick={doNotCloseModal} onLoginClick={handleOpenLogin} />
      )}
      {isLoginModalOpen && (
        <Login
          onModalClick={doNotCloseModal}
          onComplete={handleCloseLogin}
          onSignupClick={handleOpenSignup}
        />
      )}
      {isUploadModalOpen && <Upload onModalClick={closeUploadModal} />}
      <Outlet />
    </div>
  );
}
