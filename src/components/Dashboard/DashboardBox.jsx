import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const DashboardBox = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Button
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right,${props.color[0]},${props.color[1]})`,
      }}
    >

      {props.grow === true ?
       <span className="chart"><TrendingUpIcon/></span>:
       <span className="chart"><TrendingDownIcon/></span>}

      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white">{props.title}</h4>
          <span className="text-white">277+</span>
        </div>

        <div className="ms-auto">
          {props.icon ? <span className="icon">{props.icon}</span> : ""}
        </div>

      </div>
      
      <div className="d-flex align-items-center w-100">
          <h6 className="text-white mb-0 mt-0">Last Month</h6>
          <span className="ms-auto toggleIcon"><MoreVertIcon/></span>
      </div>

    </Button>
  );
};

export default DashboardBox;
