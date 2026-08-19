import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const education = [
  {
    year: '2004',
    title: 'State Board',
    place: 'Calve College Govt Hr. Sec. School',
    score: '66.4%',
  },
  {
    year: '2007',
    title: 'Diploma in Computer Science & Engineering',
    place: 'Padaleswarar Polytechnic College',
    score: '83.2%',
  },
  {
    year: '2010',
    title: 'B.E. in Computer Science & Engineering',
    place: 'Mailam Engineering College',
    score: '75%',
  },
  {
    year: '2015',
    title: 'M.E. in Computer Science & Engineering',
    place: 'Sathyabama University',
    score: '8.26 CGPA',
  },
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
  eduCard: {
    height: '100%',
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(148,163,184,0.12)',
    borderRadius: 18,
    padding: theme.spacing(2.2),
    color: '#e2e8f0',
  },
  year: {
    color: '#7dd3fc',
    fontWeight: 800,
    marginBottom: theme.spacing(0.8),
  },
  title: {
    fontWeight: 700,
    color: '#f8fafc',
    marginBottom: theme.spacing(0.7),
  },
  place: {
    color: '#cbd5e1',
    marginBottom: theme.spacing(1),
    lineHeight: 1.7,
  },
  badge: {
    display: 'inline-flex',
    padding: theme.spacing(0.55, 1),
    borderRadius: 999,
    background: 'rgba(52,211,153,0.12)',
    border: '1px solid rgba(52,211,153,0.24)',
    color: '#a7f3d0',
    fontWeight: 700,
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

export default function Colleges() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h4" className={classes.heading}>Education</Typography>

        <Grid container spacing={2}>
          {education.map((item) => (
            <Grid item xs={12} md={6} key={`${item.year}-${item.title}`}>
              <Card className={classes.eduCard}>
                <Typography variant="h6" className={classes.year}>{item.year}</Typography>
                <Typography variant="h6" className={classes.title}>{item.title}</Typography>
                <Typography variant="body1" className={classes.place}>{item.place}</Typography>
                <div className={classes.badge}>{item.score}</div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

