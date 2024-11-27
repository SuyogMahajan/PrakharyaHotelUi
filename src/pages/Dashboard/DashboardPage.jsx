import React from "react";
import Chart from "react-google-charts";
import DashboardBox from "../../components/Dashboard/DashboardBox";
import { MdAccountCircle, MdBedroomParent, MdStarRate } from "react-icons/md";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IoTicket } from "react-icons/io5";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Dashboard() {
  const data = [
    ["Task", "Hours per Day"],
    ["Food", 11],
    ["Services", 2],
    ["Salaries", 2],
    ["Margin", 2],
    ["Maintainance", 7],
  ];

  const [catBy, setCatBy] = React.useState("");
  const [showBy, setShowBy] = React.useState("");

  const options = {
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    // slices: {
    //   1: { offset: 0.2 }, // Explodes the second slice
    // },
    backgroundColor: "transparent",
    chartArea: { width: "100%", height: "100%" },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      alignment: "center",
      textStyle: {
        color: "#FFF",
        fontSize: 14,
      },
    },
    colors: ["#ED1F17", "#009efa", "#f4bc2b", "#b0b0eb", "#1a1d45"],
  };
  return (
    <>
      <div className="right-content">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                grow={true}
                title="Total Users"
                color={["#1da256", "#48d483"]}
                icon={<MdAccountCircle />}
              />
              <DashboardBox
                grow={false}
                title="Total Rooms"
                color={["#c012e2", "#eb64fe"]}
                icon={<MdBedroomParent />}
              />
              <DashboardBox
                grow={true}
                title="Total Bookings"
                color={["#2c78e5", "#60aff5"]}
                icon={<IoTicket />}
              />
              <DashboardBox
                grow={true}
                title="Total Reviews"
                color={["#e1950e", "#f3cd29"]}
                icon={<MdStarRate />}
              />
            </div>
          </div>

          <div className="col-md-4 ps-0 ">
            <div className="box graphBox">
              {/* <h4>Total Bookings</h4> */}
              <div className="d-flex align-items-center w-100">
                <h6 className="text-white mb-0 mt-0">Total Revenue</h6>
                <span className="ms-auto toggleIcon">
                  <MoreVertIcon />
                </span>
              </div>

              <h3 className="text-white font-weight-bold">$323,923.00</h3>
              <p>$323,923.00 in last month</p>

              <Chart
                className="chart"
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"220px"}
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Most Booked Rooms</h3>
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>Sort By</h4>
              <FormControl size="small" className="w-100">
              <Select
                value={showBy}
                onChange={(e) => setShowBy(e.target.value)}
                displayEmpty
                className="w-100"
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Category</h4>
              <FormControl size="small" className="w-100">
              <Select
                value={catBy}
                onChange={(e) => setCatBy(e.target.value)}
                displayEmpty
                className="w-100"
                labelId="demo-select-small-label"
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>Room No</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Bookings</th>
                  <th>Reviews</th>
                  <th>Actions</th> 
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#904</td>
                  <td>Single Bed Room</td>
                  <td>
                    <del className="old">$3,000.00</del>
                    <span className="new text-danger">$2,000.00</span>
                  </td>
                  <td>4.5</td>
                  <td>17</td>
                  <td>14</td>
                  <td>
                    <div className="actions d-flex align-items-center w-100 ">
                      <Button className ="secondary" color="secondary"><FaEye/></Button>
                      <Button className ="success" color="success"><FaPencilAlt/></Button>
                      <Button className ="error" color="error"><MdDelete/></Button>
                    </div>

                  </td>
                </tr>
                
                
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
