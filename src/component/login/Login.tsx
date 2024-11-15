import React from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ILoginFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}
      >
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ marginBottom: "20px" }}>
          <FormControl fullWidth error={!!errors.email}>
            <InputLabel>Email</InputLabel>
            <Input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <Typography
                sx={{
                  color: "#f44336",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                }}
              >
                {errors.email.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <FormControl fullWidth error={!!errors.password}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <Typography
                sx={{
                  color: "#f44336",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                }}
              >
                {errors.password.message}
              </Typography>
            )}
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "80%",
              backgroundColor: "#4caf50",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
          >
            Login
          </Button>

          <Button
            type="button"
            variant="outlined"
            sx={{
              width: "80%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #f44336",
              color: "#f44336",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f44336",
                color: "white",
              },
            }}
          >
            Reset
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => navigate("/signUp")}
            sx={{
              width: "80%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #f44336",
              color: "#f44336",
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f44336",
                color: "white",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
