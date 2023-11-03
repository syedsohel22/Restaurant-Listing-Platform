import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NewCard = ({ restaurant,  handleDelete }) => {
  const { id, name, address, contact } = restaurant;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/view/${id}`}>
        <CardMedia
          component="img"
          alt="Restaurant Image"
          height="140"
          image="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contact: {contact}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/edit/${id}`}>
          <Button size="small" color="primary">
            Update
          </Button>
        </Link>

        <Button size="small" color="error" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewCard;
