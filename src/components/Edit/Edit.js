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

function Edit(props) {

    const handleChange = () => {
        console.log('test');
    }

    const handleCancel = () => {
        props.history.push('/detail/'+props.match.params.id)
    }

    const handleSave = () => {
        props.history.push('/detail/'+props.match.params.id)
    }

    return (
        <div>
            <form className="movieEditor" noValidate autoComplete="off">
                <TextField
                    label="Change Movie Title"
                    // value={}
                    onChange={handleChange('title')}
                />
                <TextField
                    label="Change Movie Description"
                    // value={values.name}
                    onChange={handleChange('description')}
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