import { Paper, Typography, TextField, Button, Divider, Alert } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"


function Login() {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    const [logSuccess, setLogSuccess] = useState(false)

    const getLocaluser = JSON.parse(localStorage.getItem("user"))

    const handleLogin = () => {
        const userFilterEmail = getLocaluser.filter(e=> e.email)
        const userFilterName = getLocaluser.filter(e=> e.username)
        const userFilterPass = getLocaluser.filter(e=> e.password)
        const userFilterId = getLocaluser.filter(e=> e.id)

        console.log(userFilterEmail)
    }
  return (
        <Paper elevation={5} sx={{paddingX: 5,paddingY: 5, width: '350px', marginY: '50px', marginX: 'auto'}}>
        <Alert severity="error">This page is currently not working!</Alert>
        <Typography variant="h5" sx={{marginBottom: 4}}>
            Bundy Clock Login
        </Typography>
        <Divider light />
        <TextField
            id="filled-basic"
            defaultValue={loginEmail}
            type="text"
            label="Email"
            variant="outlined"
            onChange={ e => setLoginEmail(e.target.value) }
            sx={{
                marginTop: 5,
                marginBottom: 1,
                width: '100%'
            }}
            required
        />
        <TextField
            id="filled-basic"
            defaultValue={loginPass}
            type="password"
            label="Password"
            variant="outlined"
            onChange={ e => setLoginPass(e.target.value) }
            sx={{
                marginTop: 1,
                marginBottom: 3,
                width: '100%'
            }}
            required
        />
        <Button
            variant="outlined"
            onClick={handleLogin}
            sx={{
                width: '100%'
            }}
        >Login
        </Button>
        <Divider light sx={{marginY: 3}}/>
        <Typography variant="button">
            Not yet registered? <Link to="/register">Sign up</Link>
        </Typography>
    </Paper>
    
    
  )
}

export default Login
