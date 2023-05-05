import { Block } from "@mui/icons-material";
import { AppBar, Box, Button, Modal, TextField, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import Category from "./Category";
import Post from "./Post";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from 'react';

export default function Entry() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleOpen = () => {
    setOpen(true);
};
  const handleClose = () => {
    setOpen(false);
};
const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleLogin = () => {
  // Handle login logic here
};


  const cat = [
    "Technology",
    "Politics",
    "Geology",
    "Law",
    "Photography",
    "Journalism",
    "Relationships",
    "Programming",
  ];
  const posts = [
    {
      image: "./assets/1.jpeg",
      category: "Natural Beauty",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
      date: "April 12 2023",
    },
    {
      image: "./assets/2.jpeg",
      category: "Natural Beauty",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
      date: "April 12 2023",
    },
    {
      image: "./assets/3.jpeg",
      category: "Natural Beauty",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
      date: "April 12 2023",
    },
    {
      image: "./assets/4.jpeg",
      category: "Natural Beauty",
      description:
        "Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque dictum pellentesque ornare aenean purus risus facilisi.",
      date: "April 12 2023",
    },
  ];
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "Arial"].join(","),
    },
  });
  const theme1 = createTheme({
    typography: {
      fontFamily: ["Roboto"].join(","),
    },
  });
  const chips = {
    backgroundColor: "#023047",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#023047",
    },
    color: "white",
    border: "1px solid #023047",
    borderRadius: "30px",
    textTransform: "none",
    padding: "10px 20px 10px 20px",
  };

  const entry = {
    padding: "6%",
    backgroundColor: "#A3D6EE",
    color: "#023047",
    borderBottom: 1,
    borderColor: "#023047",
  };
  const interest = {
    padding: "2% 6%",
    borderBottom: 1,
    borderColor: "#b0b0b0",
  };
  const modalStyle={
    position: 'absolute',
    bgcolor: 'white',
    height: {xs: "100%", md:"80%"},
    width: {xs:'100%',md:"60%"},
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems:"center",
    justifyContent:"center",
    direction:'column'
  }
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <AppBar
          sx={{ borderBottom: 1, borderColor: "#023047" }}
          style={{ backgroundColor: "#A3D6EE", padding: "0 0 0 5%" }}
          position="static"
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img src="./assets/logo1.svg" />
            </Box>
            <Box style={{ padding: "0 5% 0 0" }}>
              <Button sx={chips} onClick={handleOpen}>Get Started</Button>
              <Modal open={open}
                onClose={handleClose}
                // aria-labelledby="login-modal-title"
                // aria-describedby="login-modal-description"
                >
                <Box sx={modalStyle}>
                  <Typography variant= theme={theme1} style={{textAlign:"center"}}>Join Us</Typography>
          {/* <p id="login-modal-description">Enter your credentials below to login.</p> */}
          <form>
            <TextField
              style={{width:"60%", marginLeft:"20%"}}
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              style={{width:"60%", marginLeft:"20%"}}
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </form>
                </Box>
              </Modal>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <ThemeProvider theme={theme1}>
        <Box sx={entry}>
          <Grid container>
            <Grid item md={7} sm={12} xs={12}>
              <Typography variant="h3">What today?</Typography>
              <br />
              <Typography variant="h6" theme={theme}>
                Lorem ipsum dolor sit amet consectetur. Risus risus pellentesque
                dictum pellentesque ornare aenean purus risus facilisi.Lorem
                ipsum dolor sit amet consectetur. Risus risus pellentesque
                dictum pellentesque ornare aenean purus risus facilisi.{" "}
              </Typography>
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
              <img
                style={{ padding: "0 0 0 15%" }}
                src="./assets/greentypewriter.png"
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <Button sx={chips} theme={theme}>
            Start Reading
          </Button>
        </Box>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid
            item
            sx={{ display: { xs: "block", md: "none" } }}
            style={{
              padding: "10% 12%",
              borderBottom: "1px solid",
              borderColor: "#b0b0b0",
            }}
            xs={12}
          >
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              What is your interest today?
            </Typography>
            <br />
            <Category cat={cat} />
          </Grid>
          <Grid item md={8} xs={12} style={{ padding: "5% 6%" }}>
            <Post posts={posts} />
          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", md: "block" } }}
            style={{ padding: "5% 1%" }}
            md={4}
          >
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              What is your interest today?
            </Typography>
            <br />
            <Category cat={cat} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}
