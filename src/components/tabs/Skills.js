import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Label from '@material-ui/icons/Label';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    flexGrow: 1,
    maxWidth: '100%',
    textAlign: 'left',
    paddingBottom: '20px'
  },
  page: {
      display: 'inline-flex',
  },
  typo: {
    paddingBottom: '20px'
  }
});

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.page}> 
    <Grid container>
        <Grid item xs={12}>
        <Typography className={classes.typo}>Technical Skills</Typography>
        </Grid>
        <Grid item xs={12}>
        <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="Design Tools" labelIcon={Label}>
      <StyledTreeItem
          nodeId="2"
          labelText="Photoshop and CorelDraw"
          labelIcon={BubbleChartIcon}
          labelInfo="90/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="3"
          labelText="Sketch"
          labelIcon={BubbleChartIcon}
          labelInfo="65/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="4"
          labelText="Illustrator"
          labelIcon={BubbleChartIcon}
          labelInfo="60/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="5" labelText="Web Development" labelIcon={Label} >
      <StyledTreeItem
          nodeId="6"
          labelText="HTML5, CSS3"
          labelIcon={BubbleChartIcon}
          labelInfo="80/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="PHP, Wordpress, Prestashop"
          labelIcon={BubbleChartIcon}
          labelInfo="75/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Javascript and jQuery"
          labelIcon={BubbleChartIcon}
          labelInfo="70/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="9" labelText="Programming Languages" labelIcon={Label}>
        <StyledTreeItem
          nodeId="10"
          labelText="Java [Servlet, Sturts, SpringBoot]"
          labelIcon={BubbleChartIcon}
          labelInfo="80/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="11"
          labelText="JavaScript [Nodejs, Reactjs]"
          labelIcon={BubbleChartIcon}
          labelInfo="85/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="12"
          labelText="C# "
          labelIcon={BubbleChartIcon}
          labelInfo="70/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="13"
          labelText="C and C++"
          labelIcon={BubbleChartIcon}
          labelInfo="90/100"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
        <StyledTreeItem
          nodeId="14"
          labelText="Python"
          labelIcon={BubbleChartIcon}
          labelInfo="40/100"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="15" labelText="Messaging and Monitoring Tools" labelIcon={Label}>
        <StyledTreeItem
          nodeId="16"
          labelText="Apache Kafka"
          labelIcon={BubbleChartIcon}
          labelInfo="80/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="17"
          labelText="Newrelic"
          labelIcon={BubbleChartIcon}
          labelInfo="60/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="18"
          labelText="Splunk"
          labelIcon={BubbleChartIcon}
          labelInfo="70/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="19"
          labelText="Kibana"
          labelIcon={BubbleChartIcon}
          labelInfo="60/100"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="20" labelText="Database Languages and Tools" labelIcon={Label}>
      <StyledTreeItem
          nodeId="21"
          labelText="mySQL"
          labelIcon={BubbleChartIcon}
          labelInfo="80/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="22"
          labelText="Postgres"
          labelIcon={BubbleChartIcon}
          labelInfo="60/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="23"
          labelText="MongoDb"
          labelIcon={BubbleChartIcon}
          labelInfo="50/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="24" labelText="DevOps Tools and Others" labelIcon={Label}>
      <StyledTreeItem
          nodeId="25"
          labelText="GIT"
          labelIcon={BubbleChartIcon}
          labelInfo="95/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="26"
          labelText="Kubernets and Docker"
          labelIcon={BubbleChartIcon}
          labelInfo="85/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="27"
          labelText="Jenkins"
          labelIcon={BubbleChartIcon}
          labelInfo="80/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="28" labelText="Servers and Utils" labelIcon={Label}>
      <StyledTreeItem
          nodeId="29"
          labelText="AWS EC2, R53, S3"
          labelIcon={BubbleChartIcon}
          labelInfo="85/100"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="30"
          labelText="Google GCP"
          labelIcon={BubbleChartIcon}
          labelInfo="65/100"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="31"
          labelText="Cpanel and Webhosting"
          labelIcon={BubbleChartIcon}
          labelInfo="90/100"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
      </StyledTreeItem>
    </TreeView>
    
        </Grid>
    </Grid>
    </div>
  );
}
