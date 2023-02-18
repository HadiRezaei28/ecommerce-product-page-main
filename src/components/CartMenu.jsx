import { useState } from "react";
import { Divider, Typography, Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { imageList } from "../shared/dataProducts";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import cartIcon from "../images/icon-cart.svg";
import { Clear, CheckOut } from "../redux-toolkit/cartSlice";


const CartMenu = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        component="img"
        sx={{
          cursor: "pointer",
          height: { lg: 25, md: 25, sm: 20, xs: 20 },
        }}
        alt="Logo"
        src={cartIcon}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {state.count ? (
          <Box>
            <Typography
              p={2}
              component="p"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              سبد خرید
            </Typography>
            <Divider />
            <Box
              sx={{
                width: "300px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
                <Box
                  component="img"
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "5px",
                  }}
                  alt="Logo"
                  src={imageList[0]}
                />
                <Box px={2}>
                  <Typography
                    component="p"
                    variant="body2"
                    pb={1}
                    sx={{ fontSize: "12px", color: `${grey[600]}` }}
                  >
                    کفش های کتانی نسخه محدود پاییزی
                  </Typography>
                  <Box>
                    <Typography
                      component="p"
                      variant="body2"
                      sx={{
                        fontSize: "12px",
                        dispaly: "inline-block",
                        color: `${grey[600]}`,
                      }}
                    >
                      {`${state.price * (state.off / 100)}T${" "}x${" "}${
                        state.count
                      }${" "}`}
                      <span
                        style={{
                          fontWeight: "800",
                          color: `${grey[900]}`,
                        }}
                      >{`${state.total}T`}</span>
                    </Typography>
                  </Box>
                </Box>
                <DeleteIcon
                    onClick={() => dispatch(Clear())}
                  sx={{
                    color: `${grey[600]}`,
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                />
            </Box>
              <Button
              onClick={() => dispatch(CheckOut())}
                sx={{
                  width: "calc( 100% - 32px)",  
                  marginLeft: "16px",
                  marginRight: "16px",  
                  backgroundColor: "hsl(26, 100%, 55%)",
                  color: "white",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "hsl(26, 100%, 55%)",
                  },
                }}
              >
                تسویه حساب
              </Button>
          </Box>
        ) : (
          <Box>
            <Typography
              p={2}
              component="p"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              سبد خرید
            </Typography>
            <Divider />
            <Box
              sx={{
                width: "300px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
              p={2}
              component="p"
              variant="body2"
              sx={{
                color: "hsl(220, 14%, 75%)",
                  fontSize: "12px",
              }}
            >
                سبد خرید شما خالی است
            </Typography>
            </Box>
          </Box>
        )}
      </Menu>
    </>
  );
};

export default CartMenu;
