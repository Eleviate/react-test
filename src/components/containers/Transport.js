import React, {Component} from 'react';
import {connect} from 'react-redux';
import TransportList from '../views/CarsList';
import MarkList from '../views/MarksList';

class Transport extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onGetCars, onGetMarks, marks, cars} = this.props;
        return (
            <div>
                <input type="checkbox" value="false" onChange={onGetCars} className="fields-input"/>
                {cars && cars.length ? <TransportList cars={cars} getMarks={onGetMarks}/> : ''}
                {marks && marks.length ? <MarkList marks={marks}/> : ''}
            </div>
        );
    }
}

export default connect(
    state => ({
        ...state.transport
    }),
    dispatch => ({
        onGetCars: (evt) => {
            let checked = evt.target.checked;
            if (checked) {
                dispatch({type: 'GET_CAR'})
            } else {
                dispatch({type: 'REMOVE_CAR'})
            }
        },
        onGetMarks: (carName) => {
            dispatch({type: 'GET_MARK', data: carName.target.value.toUpperCase()});
        }
    })
)(Transport)