import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container, Paper } from "@mui/material";
const ViewRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/restaurants/${id}`)
      .then((res) => {
        setRestaurant(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(restaurant);
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to {restaurant.name}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Listed On: {restaurant.createdAt}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Name: {restaurant.name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Contact: {restaurant.contact}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Address: {restaurant.address}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ViewRestaurant;
