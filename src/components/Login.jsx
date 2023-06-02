import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  AppBar,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";

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
  height: { xs: "100%", md: "90%" },
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
export default function Login({ setOpen, open, handleOpen }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
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
  //Sign Up
  const [username, setUsername] = React.useState("");
  const [emailSignUp, setEmailSignUp] = React.useState("");
  const [passwordSignUp, setPasswordSignUp] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleSignupClose = () => {
    setSignUpOpen(false);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSignUpEmailChange = (event) => {
    setEmailSignUp(event.target.value);
  };

  const handleSignUpPasswordChange = (event) => {
    setPasswordSignUp(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  // const [passwordError, setPasswordError] = React.useState("");

  // const validatePassword = () => {
  //   if (passwordSignUp !== confirmPassword) {
  //     setPasswordError('Passwords do not match');
  //     return false;
  //   }
  //   setPasswordError('');
  //   return true;
  // }
  const handleSignUp = () => {
    // Handle Signup logic here
  };
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const handleSignupOpen = () => {
    setOpen(false);
    setSignUpOpen(true);
  };
  return (
    <Box>
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
          <br />
          <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
            Welcome Back.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={signField}
              style={{ backgroundColor: "#F0F0F0" }}
              label="Email"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              margin="normal"
              // variant="outlined"
            />
            <TextField
              sx={signField}
              label="Password"
              type="password"
              style={{ backgroundColor: "#F0F0F0" }}
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              margin="normal"
              // variant="outlined"
            />
            <br></br>
            <br/>
            
            <Button type="submit" onClick={handleLogin} sx={signButton}>
              Login
            </Button>
            <br/>
            <br />
            <Box sx={signField}>
              Don't you have an account?
              <p
                style={{ color: "#306AFF" }}
                onClick={() => {
                  handleSignupOpen();
                }}
              >
                Register Now
              </p>
            </Box>
            <br />
            <br />
          </form>
        </Box>
      </Modal>
      <Box sx={signField}>
        <Modal open={signUpOpen} onClose={handleSignupClose}>
          <Box sx={modalStyle}>
            <IconButton onClick={handleSignupClose}>
              <CloseIcon />
            </IconButton>
            <br />
            <Typography sx={headerTextStyle} style={{ textAlign: "center" }}>
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
                style={{ backgroundColor: "#F0F0F0" }}
                label="Email"
                value={emailSignUp}
                onChange={handleSignUpEmailChange}
                fullWidth
                margin="normal"
                // variant="outlined"
              />
              <TextField
                sx={signField}
                label="Password"
                type="password"
                style={{ backgroundColor: "#F0F0F0" }}
                value={passwordSignUp}
                onChange={handleSignUpPasswordChange}
                fullWidth
                margin="normal"
                // variant="outlined"
              />
              <TextField
              fullWidth
              margin="normal"
                sx={signField}
                style={{ backgroundColor: "#F0F0F0" }}
                id="confirm-password"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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
              <Button type="submit" onClick={handleLogin} sx={signButton}>
                Register
              </Button>
              <Box sx={signField}>
                {/* {passwordError && <Typography color="error">{passwordError}</Typography>} */}
              </Box>
              <br />
              <Box sx={signField}>
                Have already an account?
                <p
                  style={{ color: "#306AFF" }}
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  Login
                </p>
              </Box>
              <br />
              <br />
            </form>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
