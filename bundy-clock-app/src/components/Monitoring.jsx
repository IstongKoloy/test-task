import { Paper, TextField, Grid, Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");

  const totalArr_timeIn = JSON.parse(localStorage.getItem("Time in") || "[]");
  const totalArr_timeOut = JSON.parse(localStorage.getItem("Time out") || "[]");

  const saveTimeIn = () => {
    const arr_timeIn = {
      timeIn: timeIn,
    };

    totalArr_timeIn.push(arr_timeIn);
    localStorage.setItem("Time in", JSON.stringify(totalArr_timeIn));
  };

  const saveTimeOut = () => {
    const arr_timeOut = {
      timeIn: timeOut,
    };

    totalArr_timeOut.push(arr_timeOut);
    localStorage.setItem("Time out", JSON.stringify(totalArr_timeOut));
  };

  return (
    <>
      <Grid container spacing={2} sx={{justifyContent: 'center', marginY: '50px '}}>
        <Grid item>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <TextField
              id="time"
              type="datetime-local"
              defaultValue={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
            />
          </Paper>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            color="secondary"
            onClick={saveTimeIn}
          >
            Time in
          </Button>
        </Grid>
        <Grid item>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <TextField
              id="time"
              type="datetime-local"
              defaultValue={timeOut}
              onChange={(e) => setTimeOut(e.target.value)}
            />
          </Paper>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            color="secondary"
            onClick={saveTimeOut}
          >
            Time out
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
