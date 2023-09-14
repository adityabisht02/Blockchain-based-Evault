import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link2 from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HouseIcon from '@mui/icons-material/House';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Ministryname from './Images/Ministryname.png';
import banner1 from './Images/banner1.png';
import banner2 from './Images/banner2.png';
import zIndex from '@mui/material/styles/zIndex';


function Landing_page() {
  const navigate = useNavigate();
  return (
    <div >
      <AppBar position="static" className='dummy5' elevation={0} style={{ background: '#e4e3db', height: "45px" }}>
        <Container className='cont' maxWidth="xl">
          <Toolbar disableGutters>
            <img src={Ministryname} alt="My logo" width="85" height="33" style={{ marginTop: "-15px", marginLeft: "15px" }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: '10vw', hright: '10vh' }} onClick={(e) => { navigate('/') }} />
            <Typography component="div" sx={{ flexGrow: 1, marginTop: "-14px", color: "black", fontSize: "11px" }}>
            <b>GOVERNMENT OF INDIA</b>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <img src={banner2} alt="Banner" width="33%" />
      <img src={banner1} alt="Banner" width="14.5%" style={{ marginLeft: "705px"}}/>
      <AppBar position="static" className='dummy5' style={{ background: '#0c0d0d', height: "45px" }}>
        <Container className='cont' maxWidth="xl">
          <Toolbar disableGutters>
          <div style={{ display: 'flex' }}>
            <HouseIcon sx={{marginTop: "-20px"}}/>
          </div>
          </Toolbar>
        </Container>
      </AppBar>

    </div>
  );
}

export default Landing_page;
