import React, {Component} from 'react';

export default class MarkList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select className="fields-select">
                <option>Выберите марку</option>
                {
                    this.props.marks.map((mark, index) => {
                        return <option key={index}>{mark}</option>
                    })
                }
            </select>
        );
    }
}