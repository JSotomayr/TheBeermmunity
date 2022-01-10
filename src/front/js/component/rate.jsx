import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const Rate = (props) => {
  const [value, setValue] = useState(3);

  const beerRate = (
    <img
      src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1640793667/full.beer_wotybg.png"
      alt="full_beer"
    />
  );
  const beerEmptyRate = (
    <img
      src="https://res.cloudinary.com/de8eg0q3r/image/upload/v1640793667/empty.beer_iuwdku.png"
      alt="empty_beer"
    />
  );
  return (
    <div>
      <Rating
        name="rating"
        value={value}
        max={5}
        icon={beerRate}
        emptyIcon={beerEmptyRate}
        onChange={(event, newValue) => {
          newValue = {props.value}
          setValue(newValue);
        }}
      />
    </div>
  );
};

Rate.propTypes = {
  value: Proptypes.number,
};

export default Rate;
