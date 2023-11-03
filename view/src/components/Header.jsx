import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container maxWidth={"100%"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box padding={"20px 40px"}>
          <Typography variant="h4" gutterBottom>
            Welcome to Restaurant List
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Link to={"/add"}>
            <Button>Add Restaurant</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
