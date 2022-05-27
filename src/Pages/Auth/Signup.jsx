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

export const Signup = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const { signupService } = authServices();
  const signupHandler = (e) => {
    e.preventDefault();
    // setFormData({firstName: "", lastName: "", username: "", password: "" })
    signupService(formData);
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
            <p>Create your account</p>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                autoFocus
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                autoFocus
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, username: e.target.value }))
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
                autoComplete="current-password"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
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
                onClick={(e) => signupHandler(e)}
              >
                Sign up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    {"Already have an account?"}
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
            backgroundImage: "url(./img/bg3.webp)",
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
