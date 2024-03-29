import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Badge,
} from "@mui/material";
import image01 from "../images/image-avatar.png";
import logo from "../images/logo.png";
import { grey } from "@mui/material/colors";
import DrawerMenu from "./DrawerMenu";
import { useSelector } from "react-redux";
import CartMenu from "./CartMenu";


const Navbar = () => {
  const pages = ["کالکشن", "مردانه", "زنانه", "تماس با ما", "درباره ما"];
  const state = useSelector((state) => state.cart);


  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "hsl(0, 0%, 100%)",
        height: 100,
        boxShadow: "none",
      }}
    >
      <Container
        disableGutters
        maxWidth="lg"
        sx={{
          width: "90vw",
          borderBottom: `1px solid ${grey[200]}`,
          py: 2,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: { xs: "flex", sm: "none" }, mr: 2 }}>
              <DrawerMenu />
            </Box>
            <Box
              component="img"
              sx={{
                height: { lg: 60, md: 55, sm: 45, xs: 40 },
                cursor: "pointer",
              }}
              alt="Logo"
              src={logo}
            />
            <Box ml={4} sx={{ display: { xs: "none", sm: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  sx={{ color: grey[600], borderRadius: "10px" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Badge
              badgeContent={state.count}
              color="warning"
              sx={{ mr: "2vw" }}
            >
              <CartMenu />
            </Badge>
            <Avatar
              alt="Avatar"
              src={image01}
              sx={{
                cursor: "pointer",
                height: { lg: 45, md: 40, sm: 35, xs: 30 },
                width: { lg: 45, md: 40, sm: 35, xs: 30 },
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
