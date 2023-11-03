import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import NewCard from "../components/NewCard";
import Header from "../components/Header";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(true);
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
        toast.error(err.message);
        console.log(err);
      });
  }, [reload]);

  const handleDelete = (id) => {
    console.log("handleDelere", id);
    axios
      .delete(`http://localhost:3000/api/v1/restaurants/${id}`)
      .then((res) => {
        // a toast
        toast.success("Restaurant deleted successfully");
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in deleting");
      });
  };
  console.log(restaurants);
  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Grid container spacing={2}>
            {restaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                {/* <RestaurantCard restaurant={restaurant} /> */}
                <NewCard restaurant={restaurant} handleDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Home;
