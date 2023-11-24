import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { IMG_URL } from "../utils/constants";
const BasicAccordian = ({ itemCards, title }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {title} ({itemCards.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {itemCards.map((item) => {
            console.log(item);
            return (
              <Box sx={{ display: "flex", justifyContent: "space-between" }} key={item?.card?.info?.id}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <h3>{item?.card?.info?.name}</h3>
                  <Box>
                    <span>₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</span>
                  </Box>
                </Box>
                <Box
                  component="img"
                  sx={{
                    height: 80,
                    width: 110,
                  }}
                  alt="The house from the offer."
                  src={IMG_URL + item?.card?.info?.imageId}
                />
              </Box>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default BasicAccordian;
