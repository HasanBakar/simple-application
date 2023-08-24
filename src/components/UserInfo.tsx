import React from 'react';
import { Grid, Paper, TextField, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import { paperStyle, formStyle } from "../helper/styles.ts";
import {defaultUser} from './../helper/defaultUser';
import { userInterface } from "../models/userInterface.ts";



const UserInfo:React.FC  = () =>{

  const navigate = useNavigate();
  const preUsers = JSON.parse(localStorage.getItem("users"));
  
  const [user, setUser] = useState<userInterface>(defaultUser);
 

   const handleSubmit = (e): void => {
     e.preventDefault();
     localStorage.setItem("users", JSON.stringify([...preUsers, user]));
     navigate("/secondPage");
   };
  

    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      
      setUser({...user, [e.target.name]:e.target.value})
    };
    

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
            onChange={(e) => onValueChange(e)}
            placeholder="Your name here"
            required
          ></TextField>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            fullWidth
            onChange={(e) => onValueChange(e)}
            placeholder="Your phone number here"
            required
          ></TextField>
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            onChange={(e) => onValueChange(e)}
            placeholder="Your email here"
            required
          ></TextField>
          <Button
            onSubmit={()=>handleSubmit(e)}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
           Take Access
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default UserInfo;