import React, { Component } from 'react';
import { connect } from 'react-redux';


// function Details(props) {
function Details(props){
        const movieInfo = props.reduxState.movies.filter((movie, index) => {
            console.log(movie, 'haaa!');

            return movie.id == props.match.params.id

        })
        console.log('movieInfo: ',movieInfo)
        return (
            <div>
                <h1>Details</h1>
                <p>{movieInfo[0].title}</p>
                <p>{movieInfo[0].description}</p>
            </div>
        );
    }


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);