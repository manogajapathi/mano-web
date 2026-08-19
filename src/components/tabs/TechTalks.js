import React from 'react';
import YouTube from 'react-youtube';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const videos = [
  'IcCWpEE-sz4',
  'VnwM123VXjc',
  'aXdqjvTJPEc',
  '33G317t-FoQ',
  'jfH9-2DDsXc',
  'eUe86q7MuJw',
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(2),
    color: '#e2e8f0',
  },
  card: {
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(17, 24, 39, 0.8))',
    border: '1px solid rgba(148,163,184,0.18)',
    borderRadius: 24,
    padding: theme.spacing(3),
    boxShadow: '0 18px 40px rgba(15, 23, 42, 0.16)',
  },
  heading: {
    fontWeight: 800,
    letterSpacing: '-0.04em',
    marginBottom: theme.spacing(3),
  },
  videoCard: {
    background: 'rgba(15, 23, 42, 0.68)',
    border: '1px solid rgba(148,163,184,0.12)',
    borderRadius: 18,
    padding: theme.spacing(1.2),
    overflow: 'hidden',
    height: '100%',
  },
  videoWrap: {
    position: 'relative',
    paddingTop: '56.25%',
    overflow: 'hidden',
    borderRadius: 12,
    background: '#020817',
  },
  youtube: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      padding: theme.spacing(1.5),
    },
    card: {
      padding: theme.spacing(2),
    },
  },
}));

export default function TechTalks() {
  const classes = useStyles();

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h4" className={classes.heading}>Tech Talks</Typography>

        <Grid container spacing={2}>
          {videos.map((videoId) => (
            <Grid item xs={12} sm={6} lg={4} key={videoId}>
              <Card className={classes.videoCard}>
                <div className={classes.videoWrap}>
                  <YouTube videoId={videoId} opts={opts} className={classes.youtube} />
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
