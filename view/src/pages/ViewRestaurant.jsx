import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return <div>ViewRestaurant</div>;
};

export default ViewRestaurant;
