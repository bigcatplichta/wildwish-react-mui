import React from 'react';
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton, Button } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForeverRounded';
import { makeStyles } from '@material-ui/core/styles';
// import AnimalTile from './AnimalTile';

import { NavLink } from 'react-router-dom';
import DefaultImage from './default_img.jpg';
import { connect } from 'react-redux';

import { deleteAnimal } from '../actions/animalActions';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    //   width: 360
    },

    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

function AnimalGrid(props) {
    const classes = useStyles();
    
    // TODO: Add styling to New Animal Button
    // TODO: Use below inside JSX instead of mapping over props, will need <AnimalTile> component to include <GridListTile> when rendering
    // const animalCards = props.animals.map(animal => {
    //     return <AnimalTile animal={animal} key={animal.id} />
    // })
    // debugger
    // console.log(props.animals)
    // if (props.animals.isFetching) {
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }
    return (
        <>
        <Button color="inherit" component={NavLink} to="/animals/new">New Animal</Button>
        <div className={classes.root}>
            
            <GridList cellHeight={180} className={classes.gridList} >
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">User Animals</ListSubheader>
                </GridListTile>
                {/* props.animals is an object like {animals: [], loading: false}, map over the nested animals array */}
                {props.animals.map((animal, idx) => (
                <GridListTile key={animal.id} cols={1} >
                    <a href={`/animals/${animal.id}`}><img src={animal.img || DefaultImage} alt={animal.name} /></a>
                    <GridListTileBar
                    title={animal.name}
                    subtitle={<span>{animal.species}</span>}
                    actionIcon={
                    <IconButton onClick={() => props.deleteAnimal(animal)} aria-label={`info about ${animal.name}`} className={classes.icon}>
                        <DeleteForeverIcon />
                    </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
            
        </div>
        </>
    )
}

// TODO: Move this function (and icon display) to animal show page and have edit action also
const mapDispatchToProps = dispatch => {
    return {
      deleteAnimal: (animal) => {
        dispatch(deleteAnimal(animal))  // dispatch() provided by redux library
      }
    };
};

const mapStateToProps = (state) => {
    return {
        animals: state.animals,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalGrid)