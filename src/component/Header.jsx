import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ListItem, ListItemButton } from "@mui/material";
export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="404" />
      </div>
      <div className="nav-items">
        <ListItem>
          <ListItemButton><Link to="/" className="home"> Home</Link></ListItemButton>
          <ListItemButton><Link to="/about" className="about-us"> About Us</Link></ListItemButton>
          <ListItemButton>Contact us</ListItemButton>
          <ListItemButton> Cart</ListItemButton>
          <Button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </Button>
        </ListItem>
      </div>
    </div>
  );
};
export default Header;
