import Link from "./components/Link";

export default function App() {
  return (
    <div>
      <div className="flex gap-3">
        <Link to="/button">Go to button page</Link>
        <Link to="/accordion">Go to accordion page</Link>
        <Link to="/users">Go to users page</Link>
      </div>
      Page routes coming soon...
    </div>
  );
}
