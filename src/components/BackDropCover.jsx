import { Box, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { imageList } from "../shared/dataProducts";

const BackdropCover = ({ handleClose }) => {

  const [index, setIndex] = useState(0);

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
      <Box
        sx={{
          width: "350px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <IconButton onClick={handleClose}>
          <CloseRoundedIcon
            sx={{ color: "white", "&:hover": { color: "hsl(26, 100%, 55%)" } }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "350px",
          height: "350px",
          display: "flex",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleIndexPrev}
          sx={{
            position: "absolute",
            bottom: "175px",
            left: "-20px",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ChevronRightIcon
            sx={{ color: "black", "&:hover": { color: "hsl(26, 100%, 55%)" } }}
          />
        </IconButton>
        <Box
          component="img"
          sx={{
            height: "350px",
            width: "350px",
            borderRadius: "15px",
          }}
          alt="Logo"
          src={imageList[index]}
        />
        <IconButton
          onClick={handleIndexNext}
          sx={{
            position: "absolute",
            bottom: "175px",
            right: "-20px",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <ChevronLeftIcon
            sx={{ color: "black", "&:hover": { color: "hsl(26, 100%, 55%)" } }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "350px",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        {imageList.map((product, index) => (
          <Box
            key={index}
            onClick={() => setIndex(index)}
            component="img"
            sx={{
              height: "60px",
              width: "60px",
              borderRadius: "15px",
              cursor: "pointer",
              "&:hover": {
                opacity: "0.7",
              },
            }}
            alt="Logo"
            src={product}
          />
        ))}
      </Box>
    </>
  );
};

export default BackdropCover;
