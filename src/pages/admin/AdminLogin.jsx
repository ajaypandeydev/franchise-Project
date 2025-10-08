import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import loginImg from '../../assets/adminLogin.jpg'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MOCK_USER = [
  { email: "admin@example.com", password: "admin123", role:"admin"},
  {email: "user@example.com", password: "user123", role: "user"},
]

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    const user = MOCK_USER.find(u => u.email === email && u.password === password)
    if(!user){
      toast.error("Invaild error or password")
      return
    }

    localStorage.setItem("token", "mock-token");
    localStorage.setItem("role", user.role)

    toast.success("Login SuccessFully");

    setTimeout(() => {
      if(user.role === 'admin'){
        navigate('/admin-dashboard')
      } else{
        navigate('/')
      }
    }, 800)
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${loginImg})`
      }}
    >
    <Toaster position="top-center"/>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(20px)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          width: "100%",
          maxWidth: 380,
          px: 4,
        }}
      >
        <FaUserShield size={70} color="#fff" style={{ marginBottom: 20 }} />
        <Typography
          variant="h5"
          sx={{
            letterSpacing: 2,
            mb: 5,
            fontWeight: 300,
          }}
        >
          ADMIN LOGIN
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            mb: 3,
            borderBottom: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          <MdEmail style={{ marginRight: 10, color: "white" }} />
          <TextField
            variant="standard"
            fullWidth
            label="Email ID"
            InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
            InputProps={{
              disableUnderline: true,
              style: { color: "white" },
            }}
            onChange={e => setEmail(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            mb: 3,
            borderBottom: "1px solid rgba(255,255,255,0.5)",
          }}
        >
          <MdLock style={{ marginRight: 10, color: "white" }} />
          <TextField
            variant="standard"
            fullWidth
            type="password"
            label="Password"
            InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
            InputProps={{
              disableUnderline: true,
              style: { color: "white" },
            }}
            onChange={e => setPassword(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            fontSize: 14,
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              cursor: "pointer",
              fontStyle: "italic",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#fff",
            borderRadius: 1,
            py: 1.2,
            fontWeight: "bold",
            letterSpacing: 1,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.3)",
            },
          }}
          onClick={handleLogin}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
