import { grey } from "@mui/material/colors";
import { Box, IconButton, Typography } from "@mui/material";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/shopping-cart.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../redux-toolkit/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const [number, setNumber] = useState(0);

  const handlePlus = () => {
    setNumber(number + 1);
  };
  const handleMinus = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Box sx={{ width: "300px", height: "300px" }}>
        <Box>
          <Typography
            component="p"
            variant="subtitle1"
            pb={2}
            sx={{ color: "hsl(26, 100%, 55%)" }}
          >
            شرکت کتونی
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            pb={3}
            sx={{ fontWeight: "900" }}
          >
            کفش های کتانی نسخه محدود پاییزی
          </Typography>
          <Typography
            variant="body2"
            component="p"
            pb={2}
            sx={{ color: `${grey[700]}` }}
          >
            این کفش‌های کتانی کم حاشیه بهترین همراه شما برای لباس‌های غیررسمی
            هستند. با داشتن زیره بیرونی لاستیکی بادوام، هر چیزی که آب و هوا می
            تواند ارائه دهد را تحمل می کند.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            component="h6"
            variant="h6"
            pr={3}
            sx={{ fontWeight: "600" }}
          >
            {state.price*(state.off/100)} تومان
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            px={1}
            sx={{
              color: "hsl(26, 100%, 55%)",
              backgroundColor: "hsl(25, 100%, 94%)",
              borderRadius: "8px",
            }}
          >
            {`${state.off}%`}
          </Typography>
        </Box>
        <Box>
          <Typography
            component="p"
            variant="subtitle1"
            pb={4}
            sx={{ textDecoration: "line-through", color: `${grey[400]}` }}
          >
            {state.price} تومان
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            alignItems: "center",
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              height: "49.5px",
              display: "flex",
              alignItems: "center",
              justifyContent: {
                lg: "flex-start",
                md: "flex-start",
                sm: "space-between",
                xs: "space-between",
              },
              backgroundColor: `${grey[200]}`,
              borderRadius: "10px",
              width: { lg: "auto", md: "auto", sm: "100%", xs: "100%" },
              mr: { lg: 2, md: 2, sm: 0, xs: 0 },
              mb: { lg: 0, md: 0, sm: 2, xs: 2 },
            }}
          >
            <IconButton
              sx={{ width: "40px", height: "40px" }}
              onClick={handlePlus}
            >
              <img alt="plus" src={plus} />
            </IconButton>
            <Typography component="p" variant="subtitle1" px={2}>
              {number}
            </Typography>
            <IconButton
              sx={{ width: "40px", height: "40px" }}
              onClick={handleMinus}
            >
              <img alt="minus" src={minus} />
            </IconButton>
          </Box>
          <Box
          onClick={() => dispatch(Add(number)) }
            p={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              },
              backgroundColor: "hsl(26, 100%, 55%)",
              borderRadius: "10px",
              cursor: "pointer",
              width: { lg: "auto", md: "auto", sm: "100%", xs: "100%" },
            }}
          >
            <Typography
              component="p"
              variant="subtitle1"
              px={1}
              sx={{ color: "white", fontSize: "10px" }}
            >
              افزودن به سبد خرید
            </Typography>
            <img
              alt="cart"
              src={cart}
              style={{ width: "15px", filter: "invert(100%)" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;
