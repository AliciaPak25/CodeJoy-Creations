import { useNavigate } from "react-router-dom";
import logo from "../assets/images/code.png";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="logo h-16 w-16 cursor-pointer" onClick={handleClick}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
