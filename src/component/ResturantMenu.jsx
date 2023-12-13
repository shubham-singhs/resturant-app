import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import BasicAccordian from "./BasicAccordian";
import { Box } from "@mui/material";

const ResturantMenu = () => {
  const [resturantData, setResturantData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResturantData(json.data);
  };
  if (resturantData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resturantData?.cards[0]?.card?.card?.info;
  const itemCards =
    resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  const title =
    resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.title;
  const itemCardsOne =
    resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  const titleOne =
    resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.title;
  const itemCardsTwo =
    resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;
  const titleTwo =
    resturantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.title;
  return (
    <>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <p>{costForTwoMessage}</p>
      <Box sx={{ maxWidth: "700px", margin: "0 auto" }}>
        <BasicAccordian itemCards={itemCards} title={title}></BasicAccordian>
        <BasicAccordian
          itemCards={itemCardsOne}
          title={titleOne}
        ></BasicAccordian>
        <BasicAccordian
          itemCards={itemCardsTwo}
          title={titleTwo}
        ></BasicAccordian>
      </Box>
    </>
  );
};

export default ResturantMenu;
