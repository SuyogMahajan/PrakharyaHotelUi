import { Button } from "@mui/material";

import {
  MdSpaceDashboard,
  MdMessage,
  MdArrowForwardIos,
  MdAccountCircle,
  MdBedroomParent,
  MdNotifications,
  MdCleaningServices,
  MdLogout
} from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoSettings, IoTicket } from "react-icons/io5";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [toggleSubmenu, setToggleSubmenu] = useState(true);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    if(index === activeTab)
      setToggleSubmenu(!toggleSubmenu);
    else
     setToggleSubmenu(true);
  }

  return (
    <>
      <div className="sidebar">
        <ul>
          {/* Dashboard */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===0 && toggleSubmenu===true? 'active' : ''}`} onClick={()=> isOpenSubmenu(0)}>
                <span className="icon">
                  <MdSpaceDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
          {/* Users */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                <span className="icon">
                  <MdAccountCircle />
                </span>
                Users
                {/* <span className="arrow">
                  <MdArrowForwardIos />
                </span> */}
              </Button>

            </Link>
          </li>
          {/* Bookings */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===2 && toggleSubmenu===true? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className="icon">
                  <IoTicket />
                </span>
                Bookings
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>

            <div className={`submenuWrapper ${activeTab===2 && toggleSubmenu===true? 'openDrop' : 'closeDrop'}`} onClick={()=>isOpenSubmenu(3)}>
              <ul className="submenu">
                <li>
                  <Link to="/">Add Booking</Link>
                </li>
                <li>
                  <Link to="/">Pending Approvals</Link>
                </li>
                <li>
                  <Link to="/">All Bookings</Link>
                </li>
                <li>
                  <Link to="/">Booking History</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Rooms */}
          <li>
            <Button className={`w-100 ${activeTab===3 && toggleSubmenu===true? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
              <span className="icon">
                <MdBedroomParent />
              </span>
              Rooms
              <span className="arrow">
                <MdArrowForwardIos />
              </span>
            </Button>

            <div className={`submenuWrapper ${activeTab===3 && toggleSubmenu===true? 'openDrop' : 'closeDrop'}`} onClick={()=>isOpenSubmenu(3)}>
              <ul className="submenu">
                <li>
                  <Link to="/">All Rooms</Link>
                </li>
                <li>
                  <Link to="/">View Room</Link>
                </li>
                <li>
                  <Link to="/">Available Rooms</Link>
                </li>
                <li>
                  <Link to="/">Booked Rooms</Link>
                </li>
                <li>
                  <Link to="/">Add Room</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Services  */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===5 && toggleSubmenu===true? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                <span className="icon">
                  <MdCleaningServices />
                </span>
                Services
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>

              
            </Link>

            <div className={`submenuWrapper ${activeTab===5 && toggleSubmenu===true? 'openDrop' : 'closeDrop'}`} onClick={()=>isOpenSubmenu(5)}>
              <ul className="submenu">
                <li>
                  <Link to="/">Cleaning</Link>
                </li>
                <li>
                  <Link to="/">Food</Link>
                </li>
                <li>
                  <Link to="/">Loundry</Link>
                </li>
                <li>
                  <Link to="/">Requests</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Notification */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(6)}>
                <span className="icon">
                  <MdNotifications />
                </span>
                Notification
                {/* <span className="arrow">
                  <MdArrowForwardIos />
                </span> */}
              </Button>
            </Link>
          </li>

          {/* Messeges */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===7 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(7)}>
                <span className="icon">
                  <MdMessage />
                </span>
                Messages
                {/* <span className="arrow">
                  <MdArrowForwardIos />
                </span> */}
              </Button>
            </Link>
          </li>
          {/* Invoices */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===8 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(8)}>
                <span className="icon">
                  <FaFileInvoiceDollar />
                </span>
                Invoices
                {/* <span className="arrow">
                  <MdArrowForwardIos />
                </span> */}
              </Button>
            </Link>
          </li>
          {/* Settings  */}
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab===9 && toggleSubmenu===true? 'active' : ''}`} onClick={()=>isOpenSubmenu(9)}>
                <span className="icon">
                  <IoSettings />
                </span>
                Settings
                <span className="arrow">
                  <MdArrowForwardIos />
                </span>
              </Button>
            </Link>
          </li>
        </ul>

        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <span><MdLogout/></span>
              Logout</Button>
            </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
