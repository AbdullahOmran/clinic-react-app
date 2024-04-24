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
import Image from "next/image";
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
import styles from "./page.module.scss";

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
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAuthTokens, setUser } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { truncate } from "fs";


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
  const router = useRouter();
  const dispatch = useDispatch();
  const activeItem = useSelector((state: RootState)=>state.user.activeSideMenuItem);

  const logout = ()=>{
    const tokens  = localStorage.getItem('Tokens');
    if(tokens){
      localStorage.removeItem('Tokens');
    }
    dispatch(setAuthTokens(null));
    dispatch(setUser(null));
    router.push('/signIn/');
  }
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



  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
            <Link className={styles.link} href="/dashboard/">
              <Image
                //replace this image with icon

                src="/images/medcy.png"
                width={80}
                className={styles.brand}
                height={80}
                alt="Medcy"
                unoptimized
              />
            </Link>
            <Box
              sx={{ flexGrow: 1, display: {  md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                style={{ marginRight: "1em" }}
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
                
                  <MenuItem onClick={logout}>
                    <Typography textAlign="center">Sign out</Typography>
                  </MenuItem>
                
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
              {...((activeItem==0)&&{selected:true})}
              onClick={() => router.push("/dashboard")}
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
                <FcDepartment size={25} />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            

            <ListItemButton
            {...((activeItem==1)&&{selected:true})}
              onClick={() => router.push("/patient-encounter")}
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
                <FcDataSheet size={25} />
              </ListItemIcon>
              <ListItemText
                primary="Patient Encounter"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            <ListItemButton
            {...((activeItem==2)&&{selected:true})}
              onClick={() => router.push("/treatment-plans")}
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
                <FcSettings size={25} />
              </ListItemIcon>
              <ListItemText primary="Treatment Plans" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
            {...((activeItem==3)&&{selected:true})}
              onClick={() => router.push("/patients")}
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
                <FcKey size={25} />
              </ListItemIcon>
              <ListItemText
                primary="Patients"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            <ListItemButton
            {...((activeItem==3)&&{selected:true})}
              onClick={() => router.push("/prescriptions")}
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
                <FcKey size={25} />
              </ListItemIcon>
              <ListItemText
                primary="Prescriptions"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            <ListItemButton
            {...((activeItem==4)&&{selected:true})}
              onClick={() => router.push("/calendar/")}
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
                <FcIdea size={25} />
              </ListItemIcon>
              <ListItemText primary="Calendar" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
            {...((activeItem==5)&&{selected:true})}
              onClick={() => router.push("/emr")}
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
                <FcReadingEbook size={25} />
              </ListItemIcon>
              <ListItemText primary="EMR" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
            {...((activeItem==6)&&{selected:true})}
              onClick={() => router.push("/settings")}
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
                <FcSettings size={25} />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
            onClick={logout}
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
              <ListItemText primary="Log out" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{bgcolor:"#f6f6f6", height: "100%", flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
