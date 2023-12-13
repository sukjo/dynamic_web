import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

export default function Signup({ onModalClick, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // hook from React Router DOM

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/gallery");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal onModalClick={onModalClick}>
      <h1>Welcome to Curio Cabinet</h1>
      <p>
        To browse the collection, please create a login and contribute a curio
        of your choice.
      </p>
      <form onSubmit={handleSubmit} className="signup-form">
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
        <button type="submit" className="signup-button">
          Sign up
        </button>
        <p>
          Been here before? <button onClick={onLoginClick}>Login</button>
        </p>
      </form>
    </Modal>
  );
}
