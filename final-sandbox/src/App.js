import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import styles from "./components/components.module.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
      {/* An <Outlet> should be used in parent route elements to render their child route elements.  */}
    </div>
  );
}

export default App;
