import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/restaurants/")

      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(restaurants);
  return <div>Home</div>;
};

export default Home;
