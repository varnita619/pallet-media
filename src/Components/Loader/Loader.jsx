import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const Loader = () => {
  return (
    <ImageList sx={{ width: 950, height: 700 }} cols={1} rowHeight={16}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://res.cloudinary.com/dqgqdj4jf/image/upload/v1654809680/PalletGram/Curve-Loading_pepdeo.gif",
    title: "loader",
  },
];
