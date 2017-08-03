import React, {Component} from 'react';

export default class MarkList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {marks} = this.props;
        return (
            <select className="fields-select">
                <option>Выберите марку</option>
                {
                    marks.map((mark, index) => {
                        return <option key={index}>{mark}</option>
                    })
                }
            </select>
        );
    }
}