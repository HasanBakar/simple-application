import React from 'react';
import { Grid, Paper, TextField, Button } from "@mui/material";

export default function UserInfo() {
    const paperStyle = {
        padding:20,
        height: "55vh",
        width: "30vw",
        margin: "14vh auto"
    }
    const formStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "20px 0"
    };
    const handleSubmit = ()=>{
        console.log("include future")
    }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Provide Info and Take Access</h2>
        </Grid>
        <form style={formStyle} onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            placeholder="Your name here"
            required
          ></TextField>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            fullWidth
            placeholder="Your phone number here"
            required
          ></TextField>
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            placeholder="Your email here"
            required
          ></TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
