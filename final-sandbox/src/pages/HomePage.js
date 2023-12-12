import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      // clear local storage variables
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // direct user back to login page
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login successful</h1>
      <h2>Welcome {user && user.email}</h2>
      <p>This is the homePage</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
