import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import ServiceToXmeme from "../services/Service";
import HeartFavouriteComponent from "./HeartFavouriteComponent";
import PatchComponent from "./PatchComponent";


/*
* Card component is to display all the memes that have been submitted till date.
*/

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState([]);

  const getMemes = () => {
    ServiceToXmeme.fetchMemes().then((res) => {
      setState(res.data);
    });
  };

  useEffect(() => {
    getMemes();
  }, []);

  const parts = {
    i: [1],
  };

  return parts.i.map((it) => (
    <Grid container spacing={2} direction="row" style={{ padding: 20 }}>
      {state.map((it) => (
        <Grid xs={3} style={{ padding: 25 }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Memes"
                height="300"
                image={it.url}
                title="Memes"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {it.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {it.caption}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <PatchComponent id={it.id} />
              <HeartFavouriteComponent />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ));
}
