"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdbIcon from "@mui/icons-material/Adb";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { IoMdHelp } from "react-icons/io";
import {
  FcAssistant,
  FcDepartment,
  FcExport,
  FcKey,
  FcSettings,
} from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcDataSheet } from "react-icons/fc";
import { FaHeadSideVirus, FaHome, FaPenAlt } from "react-icons/fa";
import {
  Avatar,
  Badge,
  Container,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FaPersonChalkboard, FaTableCells } from "react-icons/fa6";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const notifications = ["not1", "not2", "not2", "hh"];

////////////////////////////////////////////////

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#ffffff",
  boxShadow: "none",
  border: "1px solid #e1e4e8",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HeaderWithDrawer({
  children,
  ...Props
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  ///////////////////////////////////////////////////
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNotification, setAnchorElNotification] =
    useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenNotificationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseNotificationMenu = () => {
    setAnchorElNotification(null);
  };

  const router = useRouter();

  return (
    <Box sx={{ height: "100%", display: "flex" }}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                color: "#635bff",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                // fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#635bff",
                textDecoration: "none",
              }}
            >
              السنتر
            </Typography>

            <AdbIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                // fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#635bff",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                style={{ marginLeft: "1em" }}
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleOpenNotificationMenu}
              >
                <Badge badgeContent={17} color="primary">
                  <NotificationsIcon color="primary" />
                </Badge>
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 0,
                  
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon sx={{ color: "#635bff" }} />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElNotification}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNotification)}
                onClose={handleCloseNotificationMenu}
              >
                {notifications.map((notification) => (
                  <MenuItem
                    key={notification}
                    onClick={handleCloseNotificationMenu}
                  >
                    <Typography textAlign="center">{notification}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected
              onClick={() => router.push("/dashboard")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText
                
                primary="الرئيسية"
                sx={{ opacity: open ? 1 : 0 }}
              />

              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcDepartment size={25} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              onClick={() => router.push("/table")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText
               
                primary="الجدول"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcDataSheet size={25} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              onClick={() => router.push("/questions")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText
             
                primary=" حل أسئلة"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcIdea size={25} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              onClick={() => router.push("/lessons")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText
              
                primary="شرح الدرس"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcReadingEbook size={25} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => router.push("/settings")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText
            
                primary="إعدادات"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcSettings size={25} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              onClick={() => router.push("/help")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemText
                
                primary="مساعدة"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcKey size={25} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FcExport size={25} />
              </ListItemIcon>
              <ListItemText
                
                primary="Log out"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ height: "100%", flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
