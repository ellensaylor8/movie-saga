import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Edit.css';
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

function Edit(props) {

    const [inputText, updateText] = useState('')

    let updatedMovie = {
        id: 0,
        title: '',
        description: '',
    }

    const handleChange = (event, movieKey) => {
        updatedMovie.id = props.match.params.id
        updatedMovie[movieKey] = event.target.value
        updateText(event.target.value)
    }


    const handleCancel = () => {
        props.history.push('/detail/' + props.match.params.id)
    }

    const handleSave = () => {
        // console.log(props.match.params)
        props.dispatch({ type: 'PUT_MOVIE', payload: updatedMovie });
        props.history.push('/detail/' + props.match.params.id)
    }

    return (
        <div>
            <form className="movieEditor" noValidate autoComplete="off">

                <TextField
                    label="Change Movie Title"
                    onChange={(event) => handleChange(event, 'title')}
                />
                <TextField
                    label="Change Movie Description"
                    onChange={(event) => handleChange(event, 'description')}
                />
            </form>
            <Button onClick={handleCancel}>CANCEL</Button>
            <Button onClick={handleSave}>SAVE</Button>
            <p>{inputText}</p>
        </div>
    )
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(withRouter(Edit));