import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Toolbar,
    Typography,
  } from "@mui/material"; 
import * as React from "react";
export default function Login({setOpen,open}){
    const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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
  const signButton = {
    backgroundColor: "#023047",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#023047",
    },
    width: { md: "60%", xs: "80%" },
    textTransform: "none",
    padding: "10px 0",
    fontFamily: "arial",
    fontSize: { xs: "14px", md: "16px" },
    alignItems: "center",
    marginLeft: { md: "20%", xs: "10%" },
  };
  const signField = {
    width: { md: "60%", xs: "80%" },
    fontFamily: "arial",
    marginLeft: { md: "20%", xs: "10%" },
  };
  const modalStyle = {
    position: "absolute",
    bgcolor: "white",
    height: { xs: "100%", md: "80%" },
    width: { xs: "100%", md: "60%" },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    alignItems: "center",
    justifyContent: "center",
    direction: "column",
  };
  const headerTextStyle = {
    fontFamily: "Roboto",
    fontSize: { xs: "20px", md: "30px" },
  };
  const [isChecked, setIsChecked] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    setHasError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      setHasError(true);
    } else {
      // submit form
    }
  };
  return(
    <Modal
                open={open}
                onClose={handleClose}
                // aria-labelledby="login-modal-title"
                // aria-describedby="login-modal-description"
              >
                <Box sx={modalStyle}>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={headerTextStyle}
                    style={{ textAlign: "center" }}
                  >
                    Join Us
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      sx={signField}
                      style={{ backgroundColor: "#F0F0F0" }}
                      label="Username"
                      value={username}
                      onChange={handleUsernameChange}
                      fullWidth
                      margin="normal"
                      // variant="outlined"
                    />
                    <TextField
                      sx={signField}
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      fullWidth
                      margin="normal"
                      // variant="outlined"
                    />
                    <br></br>
                    <br />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isChecked}
                          onChange={handleCheck}
                          color="primary"
                        />
                      }
                      label="By creating an account you agree to the terms of use and our privacy and policy"
                      sx={signField}
                    />
                    <Box sx={signField}>
                      {hasError && (
                        <div style={{ color: "red" }}>Please check the box</div>
                      )}
                    </Box>
                    <br />
                    <br />
                    <Button  onClick={handleLogin} sx={signButton}>
                      Login
                    </Button>
                    <br />
                    <br />
                    <Box sx={signField}>
                      <p>Have already an account?</p>
                    </Box>
                  </form>
                </Box>
              </Modal>
  )
}