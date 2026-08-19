import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const careerTimeline = [
  {
    year: '2010',
    title: 'Lecturer',
    place: 'Christ College of Engineering and Technology',
    summary: 'Started my career in academics after completing my B.E. in Computer Science and Engineering.',
  },
  {
    year: '2015',
    title: 'Assistant Professor',
    place: 'Christ College of Engineering and Technology',
    summary: 'Completed M.E. CSE and grew into a teaching role with a stronger academic foundation and mentoring responsibilities.',
  },
  {
    year: '2017',
    title: 'Software Engineer',
    place: 'AUZMOR',
    summary: 'Moved into software engineering and developed a strong interest in practical product engineering and modern technologies.',
  },
  {
    year: '2018',
    title: 'Software Engineer',
    place: 'Newt Global India Pvt Ltd / Verizon',
    summary: 'Expanded into web and backend engineering with React, Node.js, and enterprise application development.',
  },
  {
    year: '2019',
    title: 'Software Engineer',
    place: 'TechStar Groups / Verizon',
    summary: 'Worked in a contract-based delivery environment focused on enterprise systems and application support.',
  },
  {
    year: '2020',
    title: 'Senior Software Engineer',
    place: 'TechStar Groups / Verizon',
    summary: 'Took on more responsibility in engineering delivery, architecture support, and cross-team execution.',
  },
  {
    year: '2021',
    title: 'Senior Software Engineer',
    place: 'Collabera / PayPal',
    summary: 'Worked in a remote engineering setup with a global product team, bringing in backend and application quality improvements.',
  },
  {
    year: '2023',
    title: 'Analyst Developer',
    place: 'Standard Chartered Bank',
    summary: 'Joined a large enterprise environment and worked in a high-impact technology setting with strong engineering standards.',
  },
  {
    year: '2025',
    title: 'Associate Backend Engineer',
    place: 'Standard Chartered Bank',
    summary: 'Focused on backend engineering, platform thinking, and scalable enterprise solution delivery.',
  },
  {
    year: '2026',
    title: 'Senior Associate Backend Engineer',
    place: 'Standard Chartered Bank',
    summary: 'Promoted to Senior Associate Backend Engineer, continuing to build dependable backend systems in a global banking environment.',
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
  timeline: {
    position: 'relative',
    paddingLeft: theme.spacing(2),
    borderLeft: '2px solid rgba(96,165,250,0.25)',
    marginLeft: theme.spacing(1),
  },
  item: {
    position: 'relative',
    marginBottom: theme.spacing(2.5),
    paddingLeft: theme.spacing(2),
  },
  dot: {
    position: 'absolute',
    left: -15,
    top: 12,
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
    boxShadow: '0 0 0 4px rgba(56,189,248,0.15)',
  },
  cardInner: {
    background: 'rgba(15, 23, 42, 0.7)',
    borderRadius: 18,
    border: '1px solid rgba(148,163,184,0.12)',
    padding: theme.spacing(2),
  },
  year: {
    color: '#7dd3fc',
    fontWeight: 800,
    marginBottom: theme.spacing(0.5),
  },
  title: {
    fontWeight: 700,
    color: '#f8fafc',
    marginBottom: theme.spacing(0.5),
  },
  place: {
    color: '#a5b4fc',
    marginBottom: theme.spacing(1),
    fontWeight: 600,
  },
  summary: {
    color: '#dbeafe',
    lineHeight: 1.8,
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

export default function Works() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Typography variant="h4" className={classes.heading}>Career Journey</Typography>

        <div className={classes.timeline}>
          {careerTimeline.map((item) => (
            <div key={`${item.year}-${item.title}`} className={classes.item}>
              <span className={classes.dot} />
              <Card className={classes.cardInner}>
                <Typography variant="h6" className={classes.year}>{item.year}</Typography>
                <Typography variant="h6" className={classes.title}>{item.title}</Typography>
                <Typography variant="subtitle2" className={classes.place}>{item.place}</Typography>
                <Typography variant="body2" className={classes.summary}>{item.summary}</Typography>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

