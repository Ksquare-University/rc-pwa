import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid } from "@mui/material";
import "../styles/ResContainer.css";
import ResCard from "./ResCard";

const ResContainer = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/GenaroArredondo-Ksquare/d8d2aa63149ee2fa36215bcf71e22887/raw/7f51d064011d862415645de285821fccf2e1c064/mock.restaurantInfo.json"
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    /*Div used for main container*/
    <div>
      <div className="filters">
        <label>Filtrar por:</label>
        <Button className="rating">Rating</Button>
      </div>
      <Grid
        container
        justifyContent="center"
        width={1}
        spacing={3}
        className="res-container"
      >
        {posts.map((post) => (
          <Grid item md={3} sm={5} xs={10} key={post.id}>
            <ResCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ResContainer;
