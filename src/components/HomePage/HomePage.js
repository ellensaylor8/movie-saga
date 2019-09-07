import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../MovieCard/MovieCard';
import '../HomePage/HomePage.css'


class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    render() {
        console.log('moviesArray :', this.props.reduxState.movies)

        const movie = this.props.reduxState.movies.map((movie, index) => {
            return (
                
                    <Grid key={index} item xs={2}>
                        <MovieCard movie={movie}></MovieCard>
                    </Grid>
                
            )
        }

        )

        return (
            <Grid container spacing={8}>
                {movie}
            </Grid>
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(HomePage);