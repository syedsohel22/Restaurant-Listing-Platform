import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddRestaurant from "../pages/AddRestaurant";
import EditRestaurant from "../pages/EditRestaurant";
import ViewRestaurant from "../pages/ViewRestaurant";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddRestaurant />} />
      <Route path="/edit" element={<EditRestaurant />} />
      <Route path="/view/:id" element={<ViewRestaurant />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default AllRoutes;
