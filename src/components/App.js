import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './Form';
import scss from '../stylesheets/main.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form form={this.props}/>
        )
    };
}
export default connect(
    state => ({
        ...state.filter
    }),
    dispatch => ({
        onValidate: evt => {
            dispatch({type: evt.target.id.toUpperCase(), data: evt.target.validity.valid ? evt.target.value : 'err'});
        },
        onCheckDate: date => {
            let fullYear = new Date(date.target.value).getFullYear().toString();
            if (fullYear.length === 4) dispatch({type: 'CHECK_DATE', data: date.target.value});
        },
        onSubmit: (data, evt) => {
           if(evt.type === 'click') dispatch({type: 'SUBMIT'});
        }
    })
)(App);