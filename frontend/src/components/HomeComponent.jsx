import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid, Button, Card } from "@mui/material";
import products from "../products/products";
import "./HomeScreenStyle.css";
const HomeComponent = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <img className="banner" src="1-headsets-for-elementary_1.webp"></img>
      </Grid>

      <Grid item xs={12}>
        <Typography className="explore"> Explore Categories</Typography>
      </Grid>

      <Grid container>
        {products.map((obj) => {
          return (
            <Grid item xs={12} sm={6} lg={4} >
              <Card  className="card" >
                <Button onClick={() => navigate("/login")}>
                  {" "}
                  <img src={obj.image} />
                  <br />{" "}
                </Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default HomeComponent;
