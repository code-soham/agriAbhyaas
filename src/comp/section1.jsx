import React from "react";
import { Paper, Typography } from "@mui/material";
export default function Welcome() {
  return (
    <React.Fragment>
      <Paper
        sx={{
          backgroundColor: "#0B6E4F",
          minHeight: "100vh",
          width:'100vw',
          borderRadius:'0px',
          display: "flex",
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "wrap",
          },
        }}
      >
        <div
          style={{
            margin: "auto",
            maxWidth: "500px",
            color: "white",
          }}
        >
          <Typography variant="h4" component="h4" align="left">
            Welcome To
          </Typography>
          <Typography gutterBottom variant="h3" component="h3" align="left">
            Agriabhyaas
          </Typography>
          <Typography variant="h5" component="h5" align="left">
            As they say, practice makes you perfect. AgriAbhyaas is your one
            stop platform to practice and excel in challenging subjects.
            <br />
            <br />
            <br />
            <strong>KNOW YOUR SELF TESTS</strong>
          </Typography>
        </div>
        <div
          style={{
            margin: "auto",
            maxHeight: "100vh",
            maxWidth: "90vw",
          }}
        >
          <img
            style={{
              maxHeight: "200px",
              margin: "30px",
            }}
            src="https://i.imgur.com/pfAJVrt.png"
            alt="Illustration"
          />
        </div>
      </Paper>
    </React.Fragment>
  );
}
