import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Details/Details.css'
import {
    Card,
    CardContent,
    CardActionArea,
    Button,
    CardActions,
    CardMedia,
    Typography
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

//filters movie array from reducer to move that matches incoming movie id coming in through route
function Details(props) {
    console.log(props.match.params)
    const movieInfo = props.reduxState.movies.filter((movie, index) => {
        return movie.movie_id == props.match.params.id
    })

    const genreArray = movieInfo[0].array_agg.map((genre, index) => {
        return <p className="genre" key={index}>{genre}</p> 
    })

    console.log(genreArray)

    //route to home page
    const returnToHome = () => {
        props.history.push('/')
    }

    //route to edit page
    const Edit = () => {
        props.history.push('/edit/' + props.match.params.id)
    }

    return (
        <div>
            <h1>Details</h1>
            <Card>
                <Typography gutterBottom variant="h5" component="h2">{movieInfo[0].title}</Typography>
                <Typography><div>{genreArray}</div></Typography>
                <Typography variant="body2" color="textSecondary" component="p">{movieInfo[0].description}</Typography>
                <Button onClick={returnToHome}>Back</Button>
                <Button onClick={Edit}>Edit</Button>
            </Card>
        </div>
    );
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(Details));