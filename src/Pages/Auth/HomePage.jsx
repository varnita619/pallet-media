import * as React from "react";
import {
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Checkbox,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import "./HomePage.css";
import { authServices } from "../../Services/authServices";

const HomePage = () => {
  const [login, setLogin] = React.useState({ username: "", password: "" });
  const { loginService } = authServices();

  const loginHandler = (e) => {
    e.preventDefault();
    loginService(login);
  };

  const loginAsGuestHandler = () => {
    setLogin({ username: "adarshbalika", password: "adarshBalika123" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          component={Paper}
          elevation={6}
          square
          className="as"
          sx={{ backgroundColor: "#fafafa", borderRight: "1px solid #ffdfc3" }}
        >
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold", fontStyle: "italic" }}
            >
              Welcome to <span className="site-name">PalletGram</span>
            </Typography>
            <p>Login to your account</p>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1, borderRadius: "50px" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                value={login.username}
                autoFocus
                onChange={(e) =>
                  setLogin((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={login.password}
                autoComplete="current-password"
                onChange={(e) =>
                  setLogin((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => loginHandler(e)}
              >
                Login
              </Button>
              <Box sx={{ textAlign: "center" }}>
                <Button onClick={(e) => loginAsGuestHandler(e)}>
                  Login As Guest
                </Button>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={6}
          md={8}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/social-media-application-icons-around-smart-phone-3d-premium-photo_125322-128.jpg?w=1060)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export { HomePage };
