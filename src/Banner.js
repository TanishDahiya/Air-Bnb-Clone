import { Button } from "@material-ui/core";
import React from "react";
import "./Banner.css";
import {useHistory} from "react-router-dom";

function Banner() {
    const history = useHistory();
    return (
      <div className="banner">
        <div className="banner_info">
          <h2>
            <strong>Go Near</strong>
          </h2>
          <h6>
            Plan a different kind of gateway to uncover the hidden gems near
            you.
          </h6>
          <Button onClick={() => history.push("/search")} variant="outlined">
            Explore Nearby
          </Button>
        </div>
      </div>
    );
}

export default Banner;
