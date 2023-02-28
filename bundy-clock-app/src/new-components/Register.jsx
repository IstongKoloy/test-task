import React, { useRef, useState } from "react";
import { Paper, Typography, TextField, Button, Divider } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import '../components/scss/styles.scss'

function Register() {
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const navigate = useNavigate()

  const getLocalRegister = JSON.parse(localStorage.getItem("user") || "[]")

  const saveUser = () => {
    
    const user_arr = {
      id: self.crypto.randomUUID(),
      username: regUsername,
      password: regPass,
      email: regEmail,
    };
    if(regUsername&&regEmail&&regPass){
        if(getLocalRegister.filter(arr => arr.email == regEmail) == 0){
            getLocalRegister.push(user_arr)
            localStorage.setItem("user", JSON.stringify(getLocalRegister))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
                
            Toast.fire({
                icon: 'success',
                title: 'Registered successfully'
            })
            navigate("/login")
        }else{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: 'Email address already exists'
              })
        }
        
    }else{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Please complete the requirements'
          })
    }
    
    
  };
  return (
    <Paper
      elevation={5}
      sx={{ paddingX: 5, paddingY: 5, width: "350px", margin: "auto" }}
    >
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        Bundy Clock Sign up
      </Typography>
      <Divider light />
      <TextField
        id="filled-basic"
        defaultValue={regUsername}
        onChange={(e) => setRegUsername(e.target.value)}
        type="text"
        label="Username"
        variant="outlined"
        sx={{ marginTop: 5, marginBottom: 1, width: "100%" }}
        required
      />
      <TextField
        id="filled-basic"
        defaultValue={regEmail}
        onChange={e => setRegEmail(e.target.value)}
        type="text"
        label="Email"
        variant="outlined"
        sx={{ marginTop: 1, marginBottom: 1, width: "100%" }}
        required
      />
      <TextField
        id="filled-basic"
        defaultValue={regPass}
        onChange={e => setRegPass(e.target.value)}
        type="password"
        label="Password"
        variant="outlined"
        sx={{ marginTop: 1, marginBottom: 3, width: "100%" }}
        required
      />
      <Button variant="outlined" sx={{ width: "100%" }} onClick={saveUser}>
        Sign Up
      </Button>
      <Divider light sx={{ marginY: 3 }} />
      <Typography variant="button">
        Already registered? <Link to="/login">Login</Link>
      </Typography>
    </Paper>
    
  );
}

export default Register;
