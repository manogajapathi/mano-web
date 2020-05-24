import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import info from '../../imgs/info.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'inline-block'
  }
});

export default function AboutSite() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={info}
          title="Made in love with React"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About the site
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This website is servered by Google domains, designs made in React with material-ui from scratch and hosted in heroku server from my private github repository.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
