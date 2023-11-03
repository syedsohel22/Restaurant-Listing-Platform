import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";

import Loader from "../components/Loader";
import NewCard from "../components/NewCard";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    axios
      .get("http://localhost:3000/api/v1/restaurants/")

      .then((res) => {
        setRestaurants(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  console.log(restaurants);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Grid container spacing={2}>
            {restaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                {/* <RestaurantCard restaurant={restaurant} /> */}
                <NewCard restaurant={restaurant} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Home;
