import React, { Component } from 'react';

export default class TransportList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cars, getMarks} = this.props;
        return (
            <select onChange={getMarks} className="fields-select">
                <option>Выберите модель</option>
                {
                    cars.map((car, index) => {
                        return <option key={index}>{car}</option>
                    })
                }
            </select>
        );
    }
}