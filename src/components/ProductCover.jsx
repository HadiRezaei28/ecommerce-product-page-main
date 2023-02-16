import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import BackDropCover from "./BackDropCover";
import { imageList } from "../shared/dataProducts";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProductCover = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleIndexNext = () => {
    if (index === imageList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleIndexPrev = () => {
    if (index === 0) {
      setIndex(imageList.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <Box sx={{ width: "300px", height: "300px", position: "relative" }}>
        <IconButton
          onClick={handleIndexPrev}
          sx={{
            position: "absolute",
            bottom: "130px",
            left: "10px",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "white",
            },
            zIndex: {lg: "-100", md:"-100", sm: "-100", xs:"0"}
          }}
        >
          <ChevronRightIcon
            sx={{
              color: "black",
              "&:hover": { color: "hsl(26, 100%, 55%)" },
            }}
          />
        </IconButton>
        <Box
          component="img"
          sx={{
            height: "300px",
            width: "300px",
            borderRadius: "15px",
          }}
          alt="Logo"
          src={imageList[index]}
        />
        <IconButton
          onClick={handleIndexNext}
          sx={{
            position: "absolute",
            bottom: "130px",
            right: "10px",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "white",
            },
            zIndex: {lg: "-100", md:"-100", sm: "-100", xs:"0"}
          }}
        >
          <ChevronLeftIcon
            sx={{ color: "black", "&:hover": { color: "hsl(26, 100%, 55%)" } }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "300px",
          height: "60px",
          display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        {imageList.map((product, index) => (
          <Box
            key={index}
            component="img"
            onClick={handleToggle}
            sx={{
              height: "60px",
              width: "60px",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            alt="Logo"
            src={product}
          />
        ))}
      </Box>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          flexDirection: "column",
        }}
        open={open}
      >
        <BackDropCover handleClose={handleClose} />
      </Backdrop>
    </>
  );
};

export default ProductCover;
