import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom';

function Details(props) {
    const movieInfo = props.reduxState.movies.filter((movie, index) => {
        console.log(movie, 'haaa!');

        return movie.id == props.match.params.id

    })

    const returnToHome = () => {
        props.history.push('/')
    }

    return (
        <div>
            <h1>Details</h1>
            <Button onClick={returnToHome}>Back</Button>
            <Button>Edit</Button>
            <p>Title: <i>{movieInfo[0].title}</i></p>
            <p>Genre: <i>{movieInfo[0].name}</i></p>
            <p>Description: <i>{movieInfo[0].description}</i></p>
        </div>
    );
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(Details));