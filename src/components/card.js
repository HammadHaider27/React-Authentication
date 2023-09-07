import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";

export default function ActionAreaCard({
  userData,
  setIsBackButtonClicked,
  isBackButtonClicked,
}) {
  const dispatch = useDispatch();

  const handleBackButtonClick = () => {
    setIsBackButtonClicked(true);
  };
  // const onLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <Card className="main-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userData.image}
          alt="person"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userData.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>username:</b> {userData.username} <br />
            <b>Email:</b> {userData.email} <br />
            {/* <LogoutIcon className="icon" onClick={onLogout} /> */}
            <ArrowBackIcon className="icon" onClick={handleBackButtonClick} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
