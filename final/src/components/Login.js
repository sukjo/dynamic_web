import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

export default function Login({ onModalClick, onComplete, onSignupClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/gallery");
      onComplete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal onModalClick={onModalClick}>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Log in
        </button>
      </form>
      <p>
        First time visiting? <button onClick={onSignupClick}>Sign up</button>
      </p>
    </Modal>
  );
}
