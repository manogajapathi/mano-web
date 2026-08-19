import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import fb from '../../imgs/logos/fb.png';
import twit from '../../imgs/logos/twit.png';
import link from '../../imgs/logos/linkedin.png';
import git from '../../imgs/logos/git.png';
import insta from '../../imgs/logos/insta.png';
import smule from '../../imgs/logos/smule.png';
import ytube from '../../imgs/logos/ytube.png';
import wp from '../../imgs/logos/wp.png';

const links = [
  { name: 'GitHub', url: 'https://github.com/manogajapathi', img: git },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manogajapathi', img: link },
  { name: 'Instagram', url: 'https://www.instagram.com/manogajapathi', img: insta },
  { name: 'Twitter', url: 'https://www.twitter.com/manogajapathi', img: twit },
  { name: 'Facebook', url: 'https://www.facebook.com/manogajapathi', img: fb },
  { name: 'YouTube', url: 'https://www.youtube.com/classadviser', img: ytube },
  { name: 'Smule', url: 'https://www.smule.com/ManoGajapathi', img: smule },
  { name: 'WhatsApp', url: 'https://wa.me/919578042320', img: wp },
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
  socialCard: {
    height: '100%',
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(148,163,184,0.12)',
    borderRadius: 18,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: 'rgba(96,165,250,0.3)',
    },
  },
  icon: {
    width: 54,
    height: 54,
    objectFit: 'contain',
  },
  label: {
    color: '#dbeafe',
    fontWeight: 700,
    textAlign: 'center',
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

export default function Networks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h4" className={classes.heading}>Social Networks</Typography>

        <Grid container spacing={2}>
          {links.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.name}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Card className={classes.socialCard}>
                  <img src={item.img} alt={item.name} className={classes.icon} />
                  <Typography variant="body2" className={classes.label}>{item.name}</Typography>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

