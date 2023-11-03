import { CircularProgress, Typography, Box } from "@mui/material";

const loaderContainerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.1)",
  zIndex: 9999,
};

const loaderTextStyle = {
  marginTop: "16px",
};

const Loader = () => {
  return (
    <Box sx={loaderContainerStyle}>
      <CircularProgress color="primary" size={60} />
      <Typography variant="h6" color="primary" sx={loaderTextStyle}>
        Loading...!
      </Typography>
    </Box>
  );
};

export default Loader;
