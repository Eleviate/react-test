import React, {Component} from 'react';

export default class TransportList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select onChange={this.props.getMarks} className="fields-select">
                <option>Выберите модель</option>
                {
                    this.props.cars.map((car, index) => {
                        return <option key={index}>{car}</option>
                    })
                }
            </select>
        );
    }
}