import Button from "../components/Button.js";
import { MdFlutterDash } from "react-icons/md";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex">
      <Button onClick={handleClick} primary rounded outline className="mb-5">
        Buy <MdFlutterDash />
      </Button>
      <Button success rounded>
        Sign Out
      </Button>
      <Button danger outline>
        Delete
      </Button>
    </div>
  );
}
