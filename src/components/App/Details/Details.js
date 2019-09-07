import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function Details(props) {
    const movieInfo = props.reduxState.movies.filter((movie, index) => {
        return movie.id == props.match.params.id
    })

    const returnToHome = () => {
        props.history.push('/')
    }

    const Edit = () => {
        props.history.push('/edit/'+props.match.params.id)
    }

    return (
        <div>
            <h1>Details</h1>
            <Card>
                <Typography gutterBottom variant="h5" component="h2">{movieInfo[0].title}</Typography>
                <Typography>{movieInfo[0].name}</Typography>
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