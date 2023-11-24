import { IMG_URL, STAR_URL } from "../utils/constants";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
const ResturantCard = ({ resData }) => {
  const { name, cuisines, avgRating, areaName, cloudinaryImageId, sla } =
    resData?.info;
    console.log(resData);
    
    
  return (
    <Link to={`/resturants/${resData?.info?.id}`}>
    <div className="res-card">
      <div className="res-img-wrapper">
        <img src={IMG_URL + cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>
      <div className="res-review">
        <img src={STAR_URL} alt="" />
        <h4>
          {avgRating} stars <span>{sla.slaString}</span>
        </h4>
      </div>
      <p className="res-card-cusine">{cuisines.join(', ')}</p>
      <p>{areaName}</p>
    </div>
    </Link>
  );
};
export default ResturantCard;
