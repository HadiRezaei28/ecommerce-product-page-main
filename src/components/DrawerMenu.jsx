import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close.svg";
import { IconButton, ListItemIcon } from "@mui/material";
const DrawerMenu = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 160 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemIcon
            sx={{
              paddingLeft: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
          >
            <img alt="sd" src={closeIcon} />
          </ListItemIcon>
        </ListItem>
        {["کالکشن", "مردانه", "زنانه", "تماس با ما", "درباره ما"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{ fontWeight: "800", paddingLeft: "5px" }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer("left", true)}>
        <img alt="menu" src={menuIcon} />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
