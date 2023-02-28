import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import './scss/styles.css'

function Home() {
  return (
    <div>
      <AppBar
        sx={{
          width: "100%",
          height: "50px",
          justifyContent: "center",
          paddingX: 12
        }}
        color="primary"
      >
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography variant="h5">Bundy Clock</Typography>
          <Typography variant="button">
            <Link to="/" className="links">Home</Link>
            <Link to="/register" className="links">Sign Up</Link>
            <Link to="/bundy" className="links">Bundy App</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
