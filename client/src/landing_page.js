import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useContext,
} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link2 from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HouseIcon from "@mui/icons-material/House";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Ministryname from "./Images/Ministryname.png";
import banner1 from "./Images/banner1.png";
import banner2 from "./Images/banner2.png";
import img1 from "./Images/1.png";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.png";
import img4 from "./Images/4.png";
import img5 from "./Images/5.png";
import img6 from "./Images/6.png";
import zIndex from "@mui/material/styles/zIndex";
import HomeIcon from "@mui/icons-material/Home"; // Import the MUI icon
import "./landing_page.scss";
import Evidence_form from './Evidence_form';
import EvidenceCards from './evidenceCards';
import AboutUs from './AboutUs';

function Landing_page() {
  const navigate = useNavigate();
  const divToScrollToRef = useRef(null);
  const scrollButtonRef = useRef(null);

  const handleScrollClick = () => {
    divToScrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="pageparent">
      <AppBar
        position="static"
        className="dummy5"
        elevation={0}
        style={{ background: "#e4e3db", height: "45px" }}
      >
        <Container className="cont" maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={Ministryname}
              alt="My logo"
              width="85"
              height="33"
              style={{ marginTop: "-15px", marginLeft: "15px" }}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "10vw",
                hright: "10vh",
              }}
              onClick={(e) => {
                navigate("/");
              }}
            />
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                marginTop: "-14px",
                color: "black",
                fontSize: "11px",
              }}
            >
              <b>GOVERNMENT OF INDIA</b>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <img src={banner2} alt="Banner" width="33%" />
        <img
          src={banner1}
          alt="Banner"
          width="14.5%"
        />
      </div>
      <AppBar
        position="static"
        className="dummy5"
        style={{ background: "#0c0d0d", height: "45px" }}
      >
        <Container className="cont" maxWidth="xl">
          <Toolbar disableGutters style={{ display: "flex" }}>
            <Button
              disableElevation
              variant="contained"
              size="small"
              className="homebutton"
              onClick={handleScrollClick}
            >
              <HomeIcon fontSize="large" />
            </Button>
            <Button
              disableElevation
              variant="contained"
              className="aboutusbutton"
              onClick={handleScrollClick}
            >
              About Us
            </Button>
            <Button
              disableElevation
              variant="contained"
              className="aboutusbutton"
              onClick={handleScrollClick}
            >
              View Cases
            </Button>
            <Button
              disableElevation
              variant="contained"
              className="aboutusbutton"
              onClick={handleScrollClick}
            >
              Authenticate Wallet
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <Evidence_form/> */}
      <EvidenceCards/>
      {/* <AboutUs/> */}

      <div className="footer">
        <div className="footer_boundary" />
        <div className="footerimgs">
          <img
            src={img1}
            alt="img1"
            width="14.5%"
            height="150px"
            style={{ marginLeft: "15px" }}
          />
          <img
            src={img2}
            alt="img2"
            width="11.5%"
            height="80px"
            style={{ marginLeft: "45px" }}
          />
          <img
            src={img3}
            alt="img3"
            width="9.5%"
            height="100px"
            style={{ marginLeft: "45px" }}
          />
          <img
            src={img4}
            alt="img4"
            width="9.5%"
            height="100px"
            style={{ marginLeft: "45px" }}
          />
          <img
            src={img5}
            alt="img5"
            width="14.5%"
            height="150px"
            style={{ marginLeft: "45px" }}
          />
          <img
            src={img6}
            alt="img6"
            width="14.5%"
            height="150px"
            style={{ marginLeft: "45px" }}
          />
        </div>
        <div className="footer2">
          <Typography color={"white"}>Website Policies</Typography>
          <span className="separator">|</span>
          <Typography color={"white"}>Help</Typography>
          <span className="separator">|</span>
          <Typography color={"white"}>Disclaimer</Typography>
          <span className="separator">|</span>
          <Typography color={"white"}>Contact Us</Typography>
          <span className="separator">|</span>
          <Typography color={"white"}>Feedback</Typography>
          <span className="separator">|</span>
          <Typography color={"white"}>Visitor's Analytics</Typography>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
