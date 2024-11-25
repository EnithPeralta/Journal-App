import { Button, Grid, TextField, Typography, Link, InputAdornment, IconButton, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Email, Person2, Visibility } from "@mui/icons-material";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterUser } from "../../store";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Please enter a valid email address"],
  password: [(value) => value.length >= 6, "Password must be at least 6 characters long"],
  displayName: [(value) => value.length >= 1, "Display name is required"],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(status => status.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startRegisterUser(formState))
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Full name"
              fullWidth
              name="displayName"
              value={displayName}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              onChange={onInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person2 sx={{ color: "primary.main" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="peralta@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "primary.main" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <Visibility sx={{ color: "primary.main" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid 
            item
             xs={12}
             display={!!errorMessage ? '' :'none'}
            >
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth>
                Create an account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>You already have an account?</Typography>
            <Link component={RouterLink} to="/auth/login" color="inherit">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
