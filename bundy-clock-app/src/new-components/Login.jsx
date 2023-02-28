import { Paper, Typography, TextField, Button, Divider } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"


function Login() {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')

  return (
        <Paper elevation={5} sx={{paddingX: 5,paddingY: 5, width: '350px', margin: 'auto'}}>
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
