import styled from "@emotion/styled";
import { useState } from "react";

const Rating = ({ rating }:{rating:number}) => {
  const roundedRating = Math.round(Math.min(Math.max(rating, 0), 5));

  return (
    <>
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            style={{
              color: index < roundedRating ? "#ffcf00" : "#ccc",
              cursor: "default",
            }}
          >
            ★
          </span>
        ))}
      </div>
    </>
  );
};

export default Rating;
