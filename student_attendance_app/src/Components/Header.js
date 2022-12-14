import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo_img from "../Images/favicon.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="header">
          <Toolbar>
            <div>
              <a href="" rel="noopener noreferrer">
                <img src={Logo_img} alt="Logo" className="header_img" />
                </a>
            </div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 , color:"black", fontWeight:"bold", textDecoration:"underline"}}>
              Student Attendance Portal
            </Typography>
            <Link to='/home' className="header_btn">
            <Button color="inherit">
              Home
            </Button>
            </Link>
             <Link to="/login" className="header_btn">
            <Button color="inherit">
             Logout
            </Button> 
             </Link> 
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

