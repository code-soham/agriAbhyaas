import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function SubjectCard(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "200px",
          height: "fit-content",
          borderRadius: "10px",
          verticalAlign: "middle",
          border: "4px solid #13ae7e",
          // boxShadow: `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`,
        }}
        onClick={() => {
          navigate(`/quiz/${props.id}`);
        }}
      >
        <CardActionArea>
          <CardMedia sx={{}} component="img" height="250" image={props.img} />
          <CardContent
            sx={{
              backgroundColor: "#13ae7e",
              color: "white",
              fontWeight: "400",
            }}
          >
            <Typography gutterBottom variant="body2" component="body2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
