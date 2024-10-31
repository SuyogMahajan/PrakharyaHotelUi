import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import {
  MdMenuOpen,
  MdAccountCircle,
  MdNotificationsNone,
  MdOutlineShoppingCart,
  MdOutlineLightMode,
  MdDarkMode,
  MdOutlineMailOutline,
} from "react-icons/md";
import SearchBox from "../SearchBox";
import { FaShieldAlt } from "react-icons/fa";
import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import BookingStatus from "./NotificationItems/BookingStatus";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const [isOpenNotificationDrop, setIsOpenNotificationDrop] =
    React.useState(false);
  const isNotificationOpen = Boolean(isOpenNotificationDrop);
  const handleOpenNotificationDrop = (event) => {
    setIsOpenNotificationDrop(event.currentTarget);
  };
  const handleCloseNotificationDrop = () => {
    setIsOpenNotificationDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center">
            <div className="col-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="Logo" />
                <span className="ms-2">Prakharya</span>
              </Link>
            </div>

            <div className="col-3 d-flex align-items-center part2 pl-2">
              <Button className="rounded-circle me-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className="col-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle me-3">
                <MdOutlineLightMode />
              </Button>

              {/* <Button className="rounded-circle me-3">
                <MdOutlineShoppingCart />
              </Button>

              <Button className="rounded-circle me-3">
                <MdOutlineMailOutline />
              </Button> */}

              <Button
                onClick={handleOpenNotificationDrop}
                className="rounded-circle me-3"
              >
                <MdNotificationsNone />
              </Button>
              {/* Notifications Menu */}
              <Menu
                isOpenNotificationDrop={isOpenNotificationDrop}
                id="nofication-menu"
                className="dropdown-list"
                open={isNotificationOpen}
                onClose={handleCloseNotificationDrop}
                onClick={handleCloseNotificationDrop}
              >
                <div className="head ps-3 pb-1">
                  <h4>Bookings(12)</h4>
                </div>

                <Divider className="mb-1" />
               <div className="scroll">
               <MenuItem onClick={handleCloseNotificationDrop}>
                  <BookingStatus/>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <BookingStatus/>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <BookingStatus/>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <BookingStatus/>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <BookingStatus/>
                </MenuItem>
                <MenuItem onClick={handleCloseNotificationDrop}>
                  <BookingStatus/>
                </MenuItem>
               </div>
               <div className="ps-2 pe-2 pt-2 w-100">

               <Button className="btn-purple w-100">View All Notifications</Button>
               </div>
              </Menu>

              <Button
                onClick={handleOpenMyAccDrop}
                className="myAcc d-flex align-items-center"
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src="https://cdn.pfps.gg/pfps/9377-zorro.png" />
                  </span>
                </div>

                <div className="userInfo">
                  <h4>Roronoa Zoro</h4>
                  <p className="mb-0">@lostZoro</p>
                </div>
              </Button>
              {/* Account Menu */}
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleCloseMyAccDrop}
                onClick={handleCloseMyAccDrop}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <MdAccountCircle />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <Divider className="mb-2" />
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <FaShieldAlt />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDrop}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
