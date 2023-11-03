import { useEffect, useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/restaurants/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    axios
      .put(`http://localhost:3000/api/v1/restaurants/${id}`, formData)
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
          <Typography variant="h4">Edit Restaurant</Typography>
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
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditRestaurant;
