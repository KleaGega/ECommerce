import {
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type IFormInput = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

const Checkout = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data Submitted:", data);
    console.log("Name:", data.name);
    console.log("Username:", data.username);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
  };

  const handleReset = () => {
    reset();
  };
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext is not available!");
  }

  const { theme } = themeContext;

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "50px auto",
        padding: "20px",
        backgroundColor: theme === "dark" ? "#333" : "#f9f9f9", // Background color based on theme
        color: theme === "dark" ? "#fff" : "#000", // Text color based on theme
        borderRadius: "8px",
        boxShadow:
          theme === "dark"
            ? "0 4px 8px rgba(0, 0, 0, 0.3)"
            : "0 4px 8px rgba(0, 0, 0, 0.1)", // Adjust shadow based on theme
        marginTop: "85px",
        width: " 600px",
        alignIitems: " center",
        display: "inline-block",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "30px", fontWeight: "bold" }}
      >
        Checkout Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ marginBottom: "20px" }}>
          <FormControl
            sx={{ marginBottom: "20px", width: "100%" }}
            error={!!errors.name}
          >
            <InputLabel>Name</InputLabel>
            <Input
              type="text"
              {...register("name", { required: "Name is required" })}
              sx={{
                padding: "10px",
                borderRadius: "4px",
                border: `1px solid ${theme === "dark" ? "#fff" : "#ccc"}`, // Border color based on theme
              }}
            />
            {errors.name && (
              <Typography
                sx={{
                  color: "#f44336",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                }}
              >
                {errors.name.message}
              </Typography>
            )}
          </FormControl>

          <FormControl
            sx={{ marginBottom: "20px", width: "100%" }}
            error={!!errors.username}
          >
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              {...register("username", { required: "Username is required" })}
              sx={{
                padding: "10px",
                borderRadius: "4px",
                border: `1px solid ${theme === "dark" ? "#fff" : "#ccc"}`,
              }}
            />
            {errors.username && (
              <Typography
                sx={{
                  color: "#f44336",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                }}
              >
                {errors.username.message}
              </Typography>
            )}
          </FormControl>

          <FormControl
            sx={{ marginBottom: "20px", width: "100%" }}
            error={!!errors.email}
          >
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
              sx={{
                padding: "10px",
                borderRadius: "4px",
                border: `1px solid ${theme === "dark" ? "#fff" : "#ccc"}`,
              }}
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

          <FormControl
            sx={{ marginBottom: "20px", width: "100%" }}
            error={!!errors.phone}
          >
            <InputLabel>Phone</InputLabel>
            <Input
              type="text"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              sx={{
                padding: "10px",
                borderRadius: "4px",
                border: `1px solid ${theme === "dark" ? "#fff" : "#ccc"}`,
              }}
            />
            {errors.phone && (
              <Typography
                sx={{
                  color: "#f44336",
                  fontSize: "0.875rem",
                  marginTop: "4px",
                }}
              >
                {errors.phone.message}
              </Typography>
            )}
          </FormControl>

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
              onClick={() => navigate("/success")}
              sx={{
                width: "80%",
                backgroundColor: theme === "dark" ? "#4caf50" : "#388e3c", // Button color based on theme
                color: "white",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme === "dark" ? "#388e3c" : "#4caf50", // Hover effect based on theme
                },
              }}
            >
              Save
            </Button>

            <Button
              type="button"
              onClick={handleReset}
              variant="outlined"
              sx={{
                width: "80%",
                padding: "12px",
                borderRadius: "8px",
                border: `1px solid ${theme === "dark" ? "#fff" : "#f44336"}`, // Border color based on theme
                color: theme === "dark" ? "#fff" : "#f44336", // Text color based on theme
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme === "dark" ? "#f44336" : "#f44336",
                  color: "white",
                },
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Checkout;
