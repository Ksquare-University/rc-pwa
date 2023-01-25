import React from "react";
import "../styles/ResContainer.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  Avatar,
} from "@mui/material";

type Props = {
  post: {
    id: number;
    title: string;
    imageUrl: string;
    thumbnailUrl: string;
    costoDeEnvio: number;
    rating: number;
  };
};

export default function ResCard(props: Props) {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            className="photo"
            component="img"
            height="200"
            image={props.post.imageUrl}
            alt="Restaurant"
          />
          <CardHeader
            avatar={
              <Avatar
                src={props.post.thumbnailUrl}
                alt={props.post.title + "logo"}
              ></Avatar>
            }
            action={
              <div className="rating-container">
                <StarRoundedIcon />
                <span className="rating-text">{props.post.rating}</span>
              </div>
            }
            title={props.post.title}
            subheader={
              props.post.costoDeEnvio
                ? `$${props.post.costoDeEnvio} Costo de Envio`
                : "Envio Gratis"
            }
          ></CardHeader>
        </CardActionArea>
      </Card>
    </div>
  );
}
