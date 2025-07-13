import React from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slices/Loginslice";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const data = await dispatch(loginAsync(values));

      if (data.meta.requestStatus === "rejected") {
        toast.error(data.payload.message);
      }

      const token = localStorage.getItem("jwt");
      const is_admin = localStorage.getItem("is_admin");
      if (token && is_admin === "false") {
        navigate("/");
        window.location.reload("true");
        toast.success("login successfully");
      }
      if (token && is_admin === "true") {
        navigate("/admin"); // Redirect admin to /admin
        window.location.reload("true");
        toast.success(" admin login successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const validationSchema = yup.object({
    username: yup.string().required("Username must be required"),
    password: yup.string().required("Password must be required"),
  });

  return (
    <>
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "70vh",
        }}
      >
        <Box sx={{
          boxShadow: 4,
          borderRadius: 3,
          p: 4,
          background: '#fff',
          width: '100%',
        }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, color: '#1976d2' }}>
            Login
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="text"
                    label="Username"
                    variant="outlined"
                    name="username"
                    fullWidth
                    sx={{ borderRadius: 2, background: '#f5faff' }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage name="username" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    fullWidth
                    sx={{ borderRadius: 2, background: '#f5faff' }}
                  />
                  <Box sx={{ color: "red" }}>
                    <ErrorMessage name="password" />  
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      mt: 1,
                      mb: 1,
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(90deg, #1976d2 60%, #00bcd4 100%)',
                      boxShadow: 2,
                      textTransform: 'none',
                    }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <a href="/forgot-password" style={{
                    color: '#fff',
                    background: 'linear-gradient(90deg, #1976d2 60%, #00bcd4 100%)',
                    padding: '8px 24px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'inline-block',
                    transition: 'background 0.3s',
                  }}
                  onMouseOver={e => e.target.style.background = '#00bcd4'}
                  onMouseOut={e => e.target.style.background = 'linear-gradient(90deg, #1976d2 60%, #00bcd4 100%)'}
                  >
                    Forgot Password?
                  </a>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Container>
    </Box>
    </>
  );
}

export default LoginForm;
