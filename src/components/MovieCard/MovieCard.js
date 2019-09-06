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

class MovieCard extends Component {

    render() {

        return (

            <Card className="card">
                <CardActionArea>
                    <CardMedia className="image" image={this.props.movie.poster}
                    />
                    <CardContent color='secondary'>
                        <Typography>
                            {this.props.movie.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary">Delete</Button>
                        <Button>Details</Button>
                    </CardActions>
                </CardActionArea>
            </Card>



        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(MovieCard));