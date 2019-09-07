import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    // Card,
    // CardContent,
    // CardActionArea,
    Button,
    // CardActions,
    // CardMedia,
    // Typography,
    TextField
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { stat } from 'fs';

function Edit(props) {

    let updatedMovie = {
        id: 0,
        title: '',
        description: '',
    }

    const handleChange = (event, movieKey) => {
        updatedMovie.id = props.match.params.id
        updatedMovie[movieKey] = event.target.value
    }


    const handleCancel = () => {
        props.history.push('/detail/' + props.match.params.id)
    }

    const handleSave = () => {
        // console.log(props.match.params)
        props.dispatch({ type: 'PUT_MOVIE', payload: updatedMovie});
        props.history.push('/detail/' + props.match.params.id)
    }

    return (
        <div>
            <form className="movieEditor" noValidate autoComplete="off">
                <TextField
                    label="Change Movie Title"
                    // value={}
                    onChange={(event) => handleChange(event, 'title')}
                />
                <TextField
                    label="Change Movie Description"
                    // value={values.name}
                    onChange={(event) => handleChange(event, 'description')}
                />
            </form>
            <Button onClick={handleCancel}>CANCEL</Button>
            <Button onClick={handleSave}>SAVE</Button>
        </div>
    )
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(withRouter(Edit));