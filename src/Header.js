import React,{useState} from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
    const [showSearch, setShowSearch] = useState(false);
     const history = useHistory();
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header_icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </Link>

        <div className="header_center search-bar row">
          <div className="col-lg-3 my-inputs">
            <div className="input-data">
              <label>Location</label>
              <input
                type="text"
                placeholder="Select Destination"
                className="limited-input"
              />
            </div>
          </div>
          <div className="col-lg-3 my-inputs">
            <div className="input-data">
              <label>Check In</label>
              {showSearch && <Search />}
              <Button onClick={() => setShowSearch(!showSearch)}>
                {showSearch ? "Hide" : "Add Dates"}
              </Button>
            </div>
          </div>
          <div className="col-lg-3 my-inputs">
            <div className="input-data">
              <label>Check Out</label>
              <Button>Add Dates</Button>
            </div>
          </div>
          <div className="col-lg-3 my-inputs without-border search-input-container">
            <div className="input-data">
              <label className="guest-label">Guests</label>
              <input
                type="number"
                placeholder="Add Guests"
                className="limited-input guest-input"
              />
            </div>
            <div className="search-icon">
              <SearchIcon onClick={() => history.push("/search")} />
            </div>
          </div>
        </div>

        <div className="header_right">
          <p>Become a Host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <div className="header-right-avatar">
            <Avatar />
          </div>
        </div>
      </div>
    );
}

export default Header;
