import React, {Component} from 'react';
import {connect} from 'react-redux';
import TransportList from './TransportList';
import MarkList from './MarkList';

class Transport extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type="checkbox"
                       value="false"
                       onChange={this.props.onGetCars.bind(this)}
                className="fields-input"/>
                {
                    this.props.cars && this.props.cars.length
                        ? <TransportList cars={this.props.cars} getMarks={this.props.onGetMarks}/>
                        : ''
                }
                {
                    this.props.marks && this.props.marks.length
                        ? <MarkList marks={this.props.marks}/>
                        : ''
                }
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