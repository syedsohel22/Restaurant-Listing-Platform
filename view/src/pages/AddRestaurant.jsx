import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.contact === "" ||
      formData.address === ""
    ) {
      toast.error(`Please enter Mandatory fields`);
      return;
    }

    axios
      .post("http://localhost:3000/api/v1/restaurants/", formData)
      .then((res) => {
        // a toast
        toast.success("Restaurant added.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.message);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Create a New Restaurant
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              sx={{ marginBottom: 2 }}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={formData.address}
              sx={{ marginBottom: 2 }}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <TextField
              label="Contact"
              variant="outlined"
              fullWidth
              value={formData.contact}
              sx={{ marginBottom: 2 }}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{ marginRight: 2 }}
            >
              Create
            </Button>
            <Link to={"/"}>
              <Button color="primary" variant="contained">
                Back
              </Button>
            </Link>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddRestaurant;
