import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

const skillAreas = [
  {
    title: 'Frontend & Web',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'jQuery'],
    tone: '#38bdf8',
  },
  {
    title: 'Backend & Enterprise',
    items: ['Java', 'Spring Boot', 'Servlets', 'REST APIs', 'C#', 'Python'],
    tone: '#8b5cf6',
  },
  {
    title: 'Data & Observability',
    items: ['Kafka', 'Splunk', 'Kibana', 'New Relic', 'Monitoring'],
    tone: '#34d399',
  },
  {
    title: 'Design & CMS',
    items: ['Photoshop', 'CorelDraw', 'Illustrator', 'Sketch', 'WordPress'],
    tone: '#fbbf24',
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
    marginBottom: theme.spacing(2),
  },
  intro: {
    color: '#cbd5e1',
    lineHeight: 1.8,
    marginBottom: theme.spacing(3),
  },
  skillCard: {
    height: '100%',
    background: 'rgba(15, 23, 42, 0.72)',
    border: '1px solid rgba(148,163,184,0.12)',
    borderRadius: 18,
    padding: theme.spacing(2.2),
    color: '#e2e8f0',
  },
  chipRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  chip: {
    background: 'rgba(59,130,246,0.08)',
    border: '1px solid rgba(96,165,250,0.2)',
    color: '#dbeafe',
    fontWeight: 600,
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

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h4" className={classes.heading}>Technical Skills</Typography>
        <Typography variant="body1" className={classes.intro}>
          I work across frontend, backend, and platform layers, combining practical engineering knowledge with product thinking to build reliable and useful systems.
        </Typography>

        <Grid container spacing={2}>
          {skillAreas.map((area) => (
            <Grid item xs={12} sm={6} md={3} key={area.title}>
              <Card className={classes.skillCard}>
                <Typography variant="h6" style={{ fontWeight: 700, color: '#f8fafc', marginBottom: 8 }}>
                  {area.title}
                </Typography>
                <Divider style={{ background: 'rgba(148,163,184,0.18)', marginBottom: 14 }} />
                <div className={classes.chipRow}>
                  {area.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      className={classes.chip}
                      style={{ borderColor: `${area.tone}55`, background: `${area.tone}12` }}
                    />
                  ))}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

