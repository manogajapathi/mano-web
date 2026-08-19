import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import EventIcon from '@material-ui/icons/Event';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

const folders = [
  { id: 'about', label: 'About Me', icon: AccountCircleIcon, color: '#ff8b7b' },
  { id: 'career', label: 'Career', icon: BusinessCenterIcon, color: '#72b7ff' },
  { id: 'education', label: 'Education', icon: SchoolIcon, color: '#a78bfa' },
  { id: 'lectures', label: 'Guest Lectures', icon: EventIcon, color: '#6ee7b7' },
  { id: 'talks', label: 'Tech Talks', icon: YouTubeIcon, color: '#fbbf24' },
];

const contactLinks = [
  { label: 'Call', url: 'tel:+919578042320', icon: PhoneIcon, color: '#86efac' },
  { label: 'WhatsApp', url: 'https://wa.me/919578042320', icon: WhatsAppIcon, color: '#4ade80', external: true },
  { label: 'Email', url: 'mailto:manogajapathi@gmail.com', icon: EmailIcon, color: '#fcd34d' },
];

const career = [
  ['2010', 'Lecturer', 'Christ College of Engineering and Technology'],
  ['2015', 'Assistant Professor', 'Christ College of Engineering and Technology'],
  ['2017', 'Software Engineer', 'AUZMOR'],
  ['2018', 'Software Engineer', 'Newt Global / Verizon'],
  ['2020', 'Senior Software Engineer', 'TechStar Groups / Verizon'],
  ['2021', 'Senior Software Engineer', 'Collabera / PayPal'],
  ['2023', 'Analyst Developer', 'Standard Chartered Bank'],
  ['2025', 'Associate Backend Engineer', 'Standard Chartered Bank'],
  ['2026', 'Senior Associate Backend Engineer', 'Standard Chartered Bank'],
];

const education = [
  ['2004', 'State Board', 'Calve College Govt Hr. Sec. School', '66.4%'],
  ['2007', 'Diploma in Computer Science & Engineering', 'Padaleswarar Polytechnic College', '83.2%'],
  ['2010', 'B.E. Computer Science & Engineering', 'Mailam Engineering College', '75%'],
  ['2015', 'M.E. Computer Science & Engineering', 'Sathyabama University', '8.26 CGPA'],
];

const talks = ['IcCWpEE-sz4', 'VnwM123VXjc', 'aXdqjvTJPEc', '33G317t-FoQ', 'jfH9-2DDsXc', 'eUe86q7MuJw'];

const aboutTechnologies = ['Java', 'Spring Boot', 'React', 'Node.js', 'Kubernetes', 'DevOps', 'AI', 'LLMs', 'RAG', 'AI agents'];

const guestLectures = [
  ['17.08.2026', 'Chief guest and guest lecture on Modern LLM, RAG and Agents', 'Arunai Engineering College, Thiruvannamalai'],
  ['21.03.2025', 'Data protection in cloud', 'Manakkula Vinayakar Institute of Technology'],
  ['17.05.2021', 'Webinar on micro service architecture', 'Raak Engineering College'],
  ['28.04.2021', 'Webinar on Version control with GIT', 'Manakkula Vinayakar Institute of Technology'],
  ['03.02.2020', 'Guest lecture on Apache Kafka: A Distributed Streaming Platform', 'Manakkula Vinayakar Institute of Technology'],
  ['28.02.2020', 'Guest lecture on Docker', 'Christ College of Engineering and Technology'],
  ['22.11.2013', 'Faculty Development Program on advanced artificial intelligence concepts', 'Erode Sengunthar Engineering College'],
];

const useStyles = makeStyles((theme) => ({
  root: { minHeight: '100svh', height: '100svh', overflow: 'hidden', position: 'relative', color: '#fff', background: '#17233d', fontFamily: 'Inter, sans-serif' },
  wallpaper: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 18% 12%, rgba(96,165,250,0.68), transparent 30%), radial-gradient(circle at 78% 76%, rgba(217,70,239,0.52), transparent 34%), radial-gradient(circle at 52% 48%, rgba(45,212,191,0.2), transparent 30%), linear-gradient(135deg, #17233d, #283c67 50%, #171e35)', '&::before': { content: '""', position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'linear-gradient(120deg, transparent 0 48%, rgba(255,255,255,0.28) 49%, transparent 50%)', backgroundSize: '90px 90px' }, '&::after': { content: '""', position: 'absolute', width: '42vw', height: '42vw', right: '-12vw', top: '-14vw', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', filter: 'blur(10px)' } },
  menuBar: { position: 'absolute', top: 'max(10px, env(safe-area-inset-top))', left: '2vw', right: '2vw', height: 38, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: theme.spacing(0, 2), background: 'linear-gradient(110deg, rgba(255,255,255,0.2), rgba(255,255,255,0.07))', backdropFilter: 'blur(24px) saturate(160%)', WebkitBackdropFilter: 'blur(24px) saturate(160%)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, boxShadow: '0 12px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.3)', fontSize: '0.78rem' },
  menuLeft: { display: 'flex', gap: theme.spacing(2), alignItems: 'center' },
  apple: { fontSize: '1.1rem', fontWeight: 900 },
  desktop: { position: 'relative', zIndex: 2, height: '100%', padding: 'calc(68px + env(safe-area-inset-top)) 7vw 100px', display: 'grid', gridTemplateColumns: 'repeat(3, 104px)', gridAutoRows: '112px', gap: 18, alignContent: 'start' },
  folder: { width: 96, minHeight: 104, padding: theme.spacing(0.8), borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, color: '#fff', cursor: 'pointer', textAlign: 'center', transition: 'transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease', background: 'linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.06))', backdropFilter: 'blur(18px) saturate(145%)', WebkitBackdropFilter: 'blur(18px) saturate(145%)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 10px 24px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.28)', '&:hover': { transform: 'translateY(-7px) scale(1.04)', background: 'linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))', boxShadow: '0 18px 34px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.4)' }, '&:focus': { outline: '2px solid rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.22)' } },
  folderIcon: { fontSize: 60, filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.25)) drop-shadow(0 0 12px rgba(255,255,255,0.12))' },
  folderLabel: { fontSize: '0.78rem', lineHeight: 1.15, textShadow: '0 2px 4px rgba(0,0,0,0.8)' },
  contactLink: { textDecoration: 'none' },
  widgetStack: { position: 'absolute', zIndex: 2, right: '8vw', bottom: 'calc(86px + env(safe-area-inset-bottom))', width: 320, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: theme.spacing(1.2) },
  widget: { minWidth: 0, padding: theme.spacing(1.4), borderRadius: 22, background: 'linear-gradient(145deg, rgba(255,255,255,0.24), rgba(255,255,255,0.08))', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(26px) saturate(150%)', WebkitBackdropFilter: 'blur(26px) saturate(150%)', boxShadow: '0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.38)' },
  galleryWidget: { gridColumn: '1 / -1' },
  widgetHeader: { display: 'flex', alignItems: 'center', gap: theme.spacing(0.8), color: 'rgba(255,255,255,0.78)', fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: theme.spacing(1) },
  portrait: { width: '100%', height: 'auto', borderRadius: 14, objectFit: 'contain', objectPosition: 'center top' },
  signature: { fontFamily: 'Caveat, cursive', fontSize: '1.7rem', color: '#ffd166', marginTop: 5 },
  window: { position: 'absolute', zIndex: 8, top: '12%', left: '50%', transform: 'translateX(-50%)', width: 'min(780px, 86vw)', height: 'min(640px, 72vh)', minHeight: 360, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 20, background: 'linear-gradient(145deg, rgba(255,255,255,0.88), rgba(239,246,255,0.68))', color: '#202733', backdropFilter: 'blur(30px) saturate(145%)', WebkitBackdropFilter: 'blur(30px) saturate(145%)', border: '1px solid rgba(255,255,255,0.72)', boxShadow: '0 30px 90px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.8)', animation: '$windowIn 0.25s ease-out' },
  titleBar: { height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1.2), gap: 7, background: 'rgba(226,232,240,0.54)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(148,163,184,0.24)' },
  traffic: { display: 'flex', gap: 6 },
  trafficButton: { width: 13, height: 13, padding: 0, borderRadius: '50%', color: 'transparent', background: '#ff5f57', '& svg': { display: 'none' }, '&:nth-child(2)': { background: '#febc2e' }, '&:nth-child(3)': { background: '#28c840' } },
  windowTitle: { flex: 1, textAlign: 'center', fontWeight: 800, fontSize: '0.85rem', marginRight: 60 },
  windowBody: { padding: theme.spacing(3), overflow: 'auto', flex: 1 },
  windowHeading: { fontWeight: 900, color: '#17233d', letterSpacing: '-0.04em', marginBottom: theme.spacing(1) },
  windowText: { color: '#475569', lineHeight: 1.7, maxWidth: 620 },
  aboutProfile: { display: 'flex', alignItems: 'center', gap: theme.spacing(2), padding: theme.spacing(1.5), marginBottom: theme.spacing(2), borderRadius: 16, background: 'linear-gradient(135deg, #e0f2fe, #f0fdf4)', border: '1px solid #bae6fd' },
  aboutAvatar: { width: 74, height: 74, flexShrink: 0, borderRadius: 16, objectFit: 'cover', objectPosition: 'center top', boxShadow: '0 8px 18px rgba(30,64,175,0.18)' },
  aboutName: { color: '#17233d', fontWeight: 900, fontSize: '1.18rem' },
  aboutRole: { color: '#475569', fontSize: '0.86rem', lineHeight: 1.45, marginTop: 4 },
  aboutStats: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: theme.spacing(1), marginBottom: theme.spacing(2) },
  aboutStat: { padding: theme.spacing(1.1), borderRadius: 12, background: '#f1f5f9', border: '1px solid #e2e8f0' },
  aboutStatValue: { display: 'block', color: '#17233d', fontWeight: 900, fontSize: '1.15rem' },
  aboutStatLabel: { display: 'block', color: '#64748b', fontSize: '0.7rem', lineHeight: 1.25, marginTop: 3 },
  aboutParagraph: { color: '#475569', lineHeight: 1.75, marginBottom: theme.spacing(2) },
  aboutSection: { marginTop: theme.spacing(2.5), padding: theme.spacing(1.8), borderRadius: 14, background: '#eef2ff', border: '1px solid #c7d2fe' },
  aboutSectionLabel: { color: '#4338ca', fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: theme.spacing(0.8) },
  aboutPills: { display: 'flex', flexWrap: 'wrap', gap: theme.spacing(0.8), marginTop: theme.spacing(1) },
  aboutPill: { padding: theme.spacing(0.55, 1), borderRadius: 999, background: 'rgba(255,255,255,0.82)', border: '1px solid #c7d2fe', color: '#3730a3', fontSize: '0.78rem', fontWeight: 800 },
  aboutClosing: { marginTop: theme.spacing(2.5), padding: theme.spacing(1.8, 2), borderRadius: 14, background: '#17233d', color: '#ffd166', fontSize: '1.18rem', lineHeight: 1.5, fontWeight: 800 },
  careerSummary: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: theme.spacing(2), padding: theme.spacing(1.7, 2), marginBottom: theme.spacing(2), borderRadius: 14, background: 'linear-gradient(135deg, #dbeafe, #fce7f3)', border: '1px solid #bfdbfe' },
  careerSummaryTitle: { color: '#17233d', fontWeight: 900, fontSize: '1.15rem' },
  careerSummaryText: { color: '#475569', fontSize: '0.82rem', lineHeight: 1.4, marginTop: 3 },
  careerBadge: { flexShrink: 0, whiteSpace: 'nowrap', padding: theme.spacing(0.8, 1), borderRadius: 12, background: '#17233d', color: '#86efac', fontWeight: 900, fontSize: '0.76rem', textAlign: 'center' },
  careerGrid: { position: 'relative', display: 'flex', gap: theme.spacing(1.2), overflowX: 'auto', overflowY: 'hidden', marginTop: theme.spacing(2), padding: theme.spacing(2, 0, 1.5), scrollbarWidth: 'thin', '&::before': { content: '""', position: 'absolute', left: 8, right: 8, top: 30, height: 2, background: 'linear-gradient(90deg, #72b7ff, #a78bfa, #22c55e)', borderRadius: 10 } },
  careerCard: { position: 'relative', zIndex: 1, flex: '0 0 142px', minHeight: 116, padding: theme.spacing(1.1), paddingTop: theme.spacing(1.5), borderRadius: 12, background: 'rgba(248,250,252,0.94)', border: '1px solid #dbe4f0', borderTop: '3px solid var(--career-accent)', transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&::after': { content: '""', position: 'absolute', top: 20, left: 10, width: 9, height: 9, borderRadius: '50%', background: 'var(--career-accent)', border: '2px solid #f8fafc', boxShadow: '0 0 0 2px var(--career-accent)' }, '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 10px 20px rgba(30,64,175,0.12)' } },
  careerYear: { color: 'var(--career-accent)', fontWeight: 900, fontSize: '1.05rem', textAlign: 'right' },
  careerTitle: { color: '#17233d', fontWeight: 900, fontSize: '0.82rem', lineHeight: 1.3, marginTop: 10 },
  careerPlace: { color: '#64748b', fontSize: '0.7rem', lineHeight: 1.35, marginTop: 5 },
  careerTimeline: { position: 'relative', display: 'grid', gap: theme.spacing(1.2), marginTop: theme.spacing(2), padding: theme.spacing(1, 0), '&::before': { content: '""', position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '2px dashed #94a3b8' } },
  careerStep: { position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 64px 1fr', alignItems: 'center', minHeight: 100 },
  careerSide: { minHeight: 76, padding: theme.spacing(1.1), borderRadius: 12, background: '#f8fafc', border: '1px solid #dbe4f0', borderBottom: '3px solid var(--career-accent)', boxShadow: '0 5px 12px rgba(30,64,175,0.08)' },
  careerSideRight: { gridColumn: 3 },
  careerNode: { gridColumn: 2, gridRow: 1, justifySelf: 'center', width: 46, height: 46, display: 'grid', placeItems: 'center', borderRadius: '50%', background: 'var(--career-accent)', border: '4px solid #f8fafc', boxShadow: '0 0 0 2px var(--career-accent)', color: '#17233d', fontWeight: 900, fontSize: '0.72rem', textAlign: 'center' },
  careerIcon: { fontSize: '1.2rem', display: 'block', marginBottom: 3 },
  list: { display: 'grid', gap: theme.spacing(1), marginTop: theme.spacing(2) },
  listRow: { display: 'grid', gridTemplateColumns: '64px 1fr', gap: theme.spacing(1), padding: theme.spacing(1.1), borderRadius: 10, background: '#e8eef8', borderLeft: '4px solid var(--accent)' },
  rowYear: { fontWeight: 900, color: '#17233d' },
  rowTitle: { fontWeight: 800, color: '#17233d' },
  rowPlace: { color: '#64748b', fontSize: '0.82rem', marginTop: 2 },
  lectureList: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: theme.spacing(1.5), marginTop: theme.spacing(2) },
  lectureRow: { minHeight: 145, position: 'relative', padding: theme.spacing(1.5), borderRadius: 3, background: '#fef08a', color: '#17233d', boxShadow: '3px 6px 12px rgba(15,23,42,0.15)', transform: 'rotate(var(--note-tilt))', transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&::before': { content: '""', position: 'absolute', top: -5, left: '50%', width: 54, height: 14, transform: 'translateX(-50%) rotate(-2deg)', background: 'rgba(255,255,255,0.55)' }, '&:nth-child(2n)': { background: '#bfdbfe' }, '&:nth-child(3n)': { background: '#bbf7d0' }, '&:hover': { transform: 'translateY(-5px) rotate(0deg)', boxShadow: '5px 12px 18px rgba(15,23,42,0.22)' } },
  lectureDate: { color: '#475569', fontWeight: 900, fontSize: '0.76rem', lineHeight: 1.4, marginBottom: theme.spacing(1) },
  lectureTitle: { color: '#17233d', fontWeight: 900, lineHeight: 1.35, fontSize: '0.9rem' },
  lecturePlace: { color: '#475569', fontSize: '0.72rem', lineHeight: 1.4, marginTop: theme.spacing(1) },
  talkGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: theme.spacing(1.5), marginTop: theme.spacing(2) },
  talk: { position: 'relative', display: 'block', minHeight: 142, overflow: 'hidden', borderRadius: 12, color: '#fff', background: '#17233d', border: '1px solid rgba(255,255,255,0.35)', textDecoration: 'none', boxShadow: '0 8px 18px rgba(15,23,42,0.14)', transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 14px 26px rgba(15,23,42,0.25)' } },
  talkThumb: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 },
  talkShade: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.9))' },
  talkPlay: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -58%)', width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: '50%', background: '#ef4444', color: '#fff', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' },
  talkLabel: { position: 'absolute', left: 12, bottom: 10, fontWeight: 900, fontSize: '0.82rem' },
  dock: { position: 'absolute', zIndex: 5, bottom: 'calc(18px + env(safe-area-inset-bottom))', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'flex-end', gap: 10, padding: '11px 15px', borderRadius: 24, background: 'linear-gradient(110deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08))', border: '1px solid rgba(255,255,255,0.34)', backdropFilter: 'blur(28px) saturate(160%)', WebkitBackdropFilter: 'blur(28px) saturate(160%)', boxShadow: '0 18px 42px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.4)' },
  dockItem: { width: 48, height: 48, borderRadius: 15, display: 'grid', placeItems: 'center', color: '#fff', background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08))', border: '1px solid rgba(255,255,255,0.22)', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&:hover': { transform: 'translateY(-9px) scale(1.08)', boxShadow: '0 10px 20px rgba(0,0,0,0.25)' } },
  [theme.breakpoints.down('sm')]: { desktop: { padding: 'calc(58px + env(safe-area-inset-top)) 4vw 90px', gridTemplateColumns: 'repeat(3, 76px)', gridAutoRows: 96, gap: '14px 12px' }, folder: { width: 72, minHeight: 92, padding: theme.spacing(0.5) }, folderIcon: { fontSize: 40 }, folderLabel: { fontSize: '0.62rem' }, widgetStack: { right: 12, bottom: 'calc(110px + env(safe-area-inset-bottom))', width: 184, gap: theme.spacing(0.7) }, widget: { padding: theme.spacing(0.8), borderRadius: 16 }, widgetHeader: { fontSize: '0.58rem', marginBottom: theme.spacing(0.6) }, signature: { fontSize: '1.12rem' }, window: { top: 'calc(48px + env(safe-area-inset-top))', width: '94vw', height: 'calc(100vh - 140px - env(safe-area-inset-top))', minHeight: 0 }, windowBody: { padding: theme.spacing(2) }, aboutProfile: { alignItems: 'flex-start' }, aboutAvatar: { width: 60, height: 60 }, aboutStats: { gridTemplateColumns: '1fr 1fr 1fr', gap: theme.spacing(0.6) }, aboutStat: { padding: theme.spacing(0.8) }, aboutStatValue: { fontSize: '1rem' }, aboutStatLabel: { fontSize: '0.64rem' }, careerSummary: { alignItems: 'flex-start', padding: theme.spacing(1.3) }, careerSummaryTitle: { fontSize: '1rem' }, careerTimeline: { padding: theme.spacing(1, 0), '&::before': { left: 23 } }, careerStep: { gridTemplateColumns: '48px 1fr', minHeight: 100, gap: theme.spacing(1) }, careerSide: { gridColumn: 2, gridRow: 1 }, careerSideRight: { gridColumn: 2 }, careerNode: { gridColumn: 1, width: 42, height: 42, fontSize: '0.66rem' }, lectureList: { gridTemplateColumns: '1fr' }, lectureRow: { minHeight: 130 }, talkGrid: { gridTemplateColumns: '1fr' }, talk: { minHeight: 160 }, dock: { gap: 8, padding: '7px 9px' }, dockItem: { width: 38, height: 38 } },
  '@keyframes windowIn': { from: { opacity: 0, transform: 'translateX(-50%) scale(0.96)' }, to: { opacity: 1, transform: 'translateX(-50%) scale(1)' } },
}));

function WindowContent({ id, classes }) {
  if (id === 'about') return <><div className={classes.aboutProfile}><img src="/dp.PNG" alt="Manogajapathi" className={classes.aboutAvatar} /><div><div className={classes.aboutName}>Manogajapathi Velmurugan</div><div className={classes.aboutRole}>Software Engineer · Technology enthusiast · Lifelong learner<br />Chennai, India</div></div></div><div className={classes.aboutStats}><div className={classes.aboutStat}><span className={classes.aboutStatValue}>9+</span><span className={classes.aboutStatLabel}>Years engineering</span></div><div className={classes.aboutStat}><span className={classes.aboutStatValue}>Full stack</span><span className={classes.aboutStatLabel}>Applications & services</span></div><div className={classes.aboutStat}><span className={classes.aboutStatValue}>AI</span><span className={classes.aboutStatLabel}>Current curiosity</span></div></div><Typography className={classes.aboutParagraph}>I build full-stack applications, backend services, microservices, and cloud-native systems.</Typography><div className={classes.aboutSection}><div className={classes.aboutSectionLabel}>Technology I work with</div><div className={classes.aboutPills}>{aboutTechnologies.map((technology) => <span className={classes.aboutPill} key={technology}>{technology}</span>)}</div></div><div className={classes.aboutSection}><div className={classes.aboutSectionLabel}>Current curiosity</div><Typography className={classes.aboutParagraph}>Exploring how <strong>AI, LLMs, RAG, and AI agents</strong> can become useful solutions to real-world problems.</Typography></div><Typography className={classes.aboutParagraph}>I started in academics, and still enjoy teaching, mentoring, speaking at technical sessions, and creating content for developers and students.</Typography><div className={classes.aboutClosing}>I build things. I break things.<br />I learn. And I share what I discover.</div></>;
  if (id === 'career') return <><div className={classes.careerSummary}><div><div className={classes.careerSummaryTitle}>My career journey</div><div className={classes.careerSummaryText}>From Assistant Professor to Senior Associate Backend Engineer.</div></div><div className={classes.careerBadge}>2010 → 2026</div></div><div className={classes.careerTimeline}>{career.map((item, index) => <div className={classes.careerStep} key={`${item[0]}-${item[1]}`}><article className={`${classes.careerSide} ${index % 2 ? classes.careerSideRight : ''}`} style={{ '--career-accent': item[0] === '2026' ? '#22c55e' : ['#72b7ff', '#a78bfa', '#fb7185'][index % 3] }}><div className={classes.careerTitle}>{item[1]}</div><div className={classes.careerPlace}>{item[2]}</div></article><div className={classes.careerNode} style={{ '--career-accent': item[0] === '2026' ? '#22c55e' : ['#72b7ff', '#a78bfa', '#fb7185'][index % 3] }}><span>{item[0]}</span></div></div>)}</div></>;
  if (id === 'education') return <><div className={classes.careerSummary}><div><div className={classes.careerSummaryTitle}>Academic journey</div><div className={classes.careerSummaryText}>From State Board to a Master’s degree in Computer Science.</div></div><div className={classes.careerBadge}>2004 → 2015</div></div><div className={classes.careerTimeline}>{education.map((item, index) => <div className={classes.careerStep} key={`${item[0]}-${item[1]}`}><article className={`${classes.careerSide} ${index % 2 ? classes.careerSideRight : ''}`} style={{ '--career-accent': ['#a78bfa', '#c084fc', '#818cf8', '#6366f1'][index] }}><div className={classes.careerTitle}>{item[1]}</div><div className={classes.careerPlace}>{item[2]}</div><div className={classes.rowPlace}>{item[3]}</div></article><div className={classes.careerNode} style={{ '--career-accent': ['#a78bfa', '#c084fc', '#818cf8', '#6366f1'][index] }}><span>{item[0]}</span></div></div>)}</div></>;
  if (id === 'talks') return <><Typography variant="h4" className={classes.windowHeading}>Tech Talks</Typography><Typography className={classes.windowText}>Open a talk from the archive.</Typography><div className={classes.talkGrid}>{talks.map((id, index) => <a className={classes.talk} key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer"><img className={classes.talkThumb} src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={`Tech Talk ${index + 1}`} /><span className={classes.talkShade} /><span className={classes.talkPlay}>▶</span><span className={classes.talkLabel}>Tech Talk {String(index + 1).padStart(2, '0')}</span></a>)}</div></>;
  return <><Typography className={classes.windowText}>Talks, webinars, and faculty development programs.</Typography><div className={classes.lectureList}>{guestLectures.map((lecture, index) => <div className={classes.lectureRow} key={`${lecture[0]}-${lecture[1]}`} style={{ '--note-tilt': `${index % 2 ? 1.5 : -1.5}deg` }}><div className={classes.lectureDate}>{lecture[0]}</div><div className={classes.lectureTitle}>{lecture[1]}</div><div className={classes.lecturePlace}>{lecture[2]}</div></div>)}</div></>;
}

export default function MacDesktop() {
  const classes = useStyles();
  const [openFolder, setOpenFolder] = React.useState(null);

  return <main className={classes.root}>
    <div className={classes.wallpaper} />
    <div className={classes.menuBar}><div className={classes.menuLeft}><span className={classes.apple}>●</span><strong>Mano&apos;s Desktop</strong><span>File</span><span>View</span><span>Window</span></div></div>
    <div className={classes.desktop}>
      {folders.map(({ id, label, icon: Icon, color }) => <button className={classes.folder} key={id} onClick={() => setOpenFolder(id)}><Icon className={classes.folderIcon} style={{ color }} /><span className={classes.folderLabel}>{label}</span></button>)}
      {contactLinks.map(({ label, url, icon: Icon, color, external }) => <a className={`${classes.folder} ${classes.contactLink}`} key={label} href={url} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} aria-label={label}><Icon className={classes.folderIcon} style={{ color }} /><span className={classes.folderLabel}>{label}</span></a>)}
    </div>
    <div className={classes.widgetStack}>
      <div className={`${classes.widget} ${classes.galleryWidget}`}><img src="/dp.PNG" alt="Manogajapathi" className={classes.portrait} /><div className={classes.signature}>Manogajapathi / Developer</div></div>
    </div>
    <div className={classes.dock}>{folders.map(({ id, icon: Icon, color }) => <button className={classes.dockItem} key={id} onClick={() => setOpenFolder(id)} aria-label={`Open ${id}`}><Icon style={{ color, fontSize: 28 }} /></button>)}</div>
    {openFolder && <section className={classes.window} role="dialog" aria-modal="true" aria-label={openFolder}>
      <div className={classes.titleBar}><div className={classes.traffic}><IconButton className={classes.trafficButton} onClick={() => setOpenFolder(null)} aria-label="Close"><CloseIcon /></IconButton><IconButton className={classes.trafficButton} onClick={() => setOpenFolder(null)} aria-label="Minimize"><RemoveIcon /></IconButton><IconButton className={classes.trafficButton} onClick={() => setOpenFolder(null)} aria-label="Maximize"><AddIcon /></IconButton></div><span className={classes.windowTitle}>{folders.find((folder) => folder.id === openFolder).label}</span></div>
      <div className={classes.windowBody}><WindowContent id={openFolder} classes={classes} /></div>
    </section>}
  </main>;
}
