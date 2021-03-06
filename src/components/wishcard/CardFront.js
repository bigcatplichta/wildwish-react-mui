

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


import boleroImg from './bolero.JPG'
import WishProgress from './WishProgress';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 380,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function CardFront(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} md={4} >  
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bolero the lion"
          height="360"
          image={boleroImg}
          title="Bolero the lion"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.wish.animal.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.wish.animal.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.wish.animal.location}
          </Typography>
        </CardContent>
        <CardContent>
          <WishProgress/>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent: 'center'}}>
        <Button variant="contained" size="large" color="primary" >SPONSOR WISH</Button>
      </CardActions>
      <Divider variant="middle"/>
      <CardActions disableSpacing>
        <Button size="small" color="primary" onClick={handleExpandClick}>
          More Info
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          disableRipple
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="more info"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Info about each animal goes in this expanded card.
          </Typography>
          <Typography paragraph>
            Card content includes animal bio and information about the enrichment for the Wish.
          </Typography>
          <Typography paragraph>
            The bio section will have a character limit so content in cards do not need to be truncated.
          </Typography>
          <Typography paragraph>
            Another link to sponsor the wish will be included in the expanded card to direct action back to donate form.
          </Typography>
          <CardActions style={{justifyContent: 'center'}}>
            <Button size="large" color="primary" >SPONSOR BOLERO</Button>
          </CardActions>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
  );
}