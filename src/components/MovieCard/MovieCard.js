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
import '../MovieCard/MovieCard.css'
import { withRouter } from 'react-router-dom';


class MovieCard extends Component {

    //route to detail page with id specific to movie
    goToDetail = () => {
        this.props.history.push('/detail/' + this.props.movie.movie_id);
    }

    render() {
        return (

            <Card className="card">
                {/* <CardActionArea> */}
                <CardMedia className="image" image={this.props.movie.poster}
                />
                <CardContent className="cardContent" color='secondary'>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.movie.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.movie.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={this.goToDetail}>Details</Button>
                </CardActions>
                {/* </CardActionArea> */}
            </Card>


        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(MovieCard));