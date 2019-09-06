import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    render() {
        console.log(this.props.reduxState.movies)
        return (
            <div>
                <h1>HomePage</h1>
            </div>
        );
    }

}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(HomePage);