import React, { Component } from 'react';
import { connect } from 'react-redux';


// function Details(props) {
function Details(props){
    // componentDidMount(){
    //     console.log(this.props.reduxState.movies)
    // }
    // render() {
        
        const movieInfo = props.reduxState.movies.filter((movie, index) => {
            console.log(movie, 'haaa!');

            return movie.id == props.match.params.id

        })
        console.log('movieInfo: ',movieInfo)
        return (
            <div>
                <h1>Details</h1>
                <p>{movieInfo[0].title}</p>
            </div>
        );
    }


const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Details);