import React, { useState } from 'react'
import "./Result.css"
import StarIcon from "@material-ui/icons/Star";
import Heart from "react-animated-heart";

function Result({ img, location, title, description, star, price, total }) {
     const [isClick, setClick] = useState(false);
  return (
    <div className="result">
      <img src={img} alt="" />
      <div className="result__heart">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
      <div className="result__info">
        <div className="result__infoTop">
          <h3>{title}</h3>
          <p>{location}</p>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="result__infoBottom">
          <div className="result__stars">
            <StarIcon className="result__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="result__price">
            <h6>{price}</h6>
            <h5>{total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result
