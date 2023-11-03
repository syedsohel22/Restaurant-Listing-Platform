import { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
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
        toast.success(`Restaurant updated successfully`);
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error in updating");
        console.log(err);
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
              Update Restaurant
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
              Update
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

export default EditRestaurant;
