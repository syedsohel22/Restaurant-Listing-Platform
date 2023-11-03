import { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    axios
      .post("http://localhost:3000/api/v1/restaurants/", formData)
      .then((res) => {
        // a toast
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4">Create a New Restaurant</Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <TextField
            label="Contact"
            variant="outlined"
            fullWidth
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
          />
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddRestaurant;
