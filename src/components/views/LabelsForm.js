import React, {Component} from 'react';

export default class LabelsForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="labels">
                <div className="labels-label">Имя<b className="labels-label-required">* </b></div>
                <div className="labels-label">Фамилия<b className="labels-label-required">* </b></div>
                <div className="labels-label">Отчество<b className="labels-label-required">* </b></div>
                <div className="labels-label">Дата рождения<b className="labels-label-required">* </b></div>
                <div className="labels-label">Пол<b className="labels-label-required">* </b></div>
                <div className="labels-label">Серия и номер паспорта<b className="labels-label-required">* </b></div>
                <div className="labels-label">Электронная почта<b className="labels-label-required">* </b></div>
                <div className="labels-label-avto">Наличие автомобиля </div>
            </div>
        );
    }
}