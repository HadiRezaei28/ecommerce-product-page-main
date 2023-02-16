import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ProductCover from "./ProductCover";
import ProductDetail from "./ProductDetail";

const Main = () => {
  return (
    <Grid2 container sx={{ mt:{lg:6, md:6, sm:4, xs:0} }}>
      <Grid2
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: {
            lg: "flex-end",
            md: "flex-end",
            sm: "center",
            xs: "center",
          },
          justifyContent: "flex-start",
          pr: { lg: 10, md: 10, sm: 0, xs: 0 },
        }}
      >
        <ProductCover />
      </Grid2>
      <Grid2
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            lg: "flex-start",
            md: "flex-start",
            sm: "center",
            xs: "center",
          },
          justifyContent: "flex-start",
          pl: { lg: 10, md: 10, sm: 0, xs: 0 },
          mt: { lg: 0, md: 0, sm: 5, xs: 5 },
          mb: { lg: 0, md: 0, sm: 20, xs: 20 },
        }}
      >
        <ProductDetail />
      </Grid2>
    </Grid2>
  );
};

export default Main;
