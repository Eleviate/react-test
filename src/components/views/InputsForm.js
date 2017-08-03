import React, {Component} from 'react';
import Transport from "../containers/Transport";

export default class InputsForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {error, onValidate, firstName, lastName, patronymic, onCheckDate, passport, onChangeGender, onIsEmail} = this.props.filter;
        return (
            <div className="fields">
                <input type="text"
                       className={error['FIRSTNAME'] ? "fields-input-error" : "fields-input"}
                       pattern="[аА-яЯ]*" id="firstName"
                       onInput={onValidate}
                       value={firstName}/>
                <input type="text"
                       className={error['LASTNAME'] ? "fields-input-error" : "fields-input"}
                       pattern="[аА-яЯ]*" id="lastName"
                       onInput={onValidate}
                       value={lastName}/>
                <input type="text"
                       className={error['PATRONYMIC'] ? "fields-input-error" : "fields-input"}
                       pattern="[аА-яЯ]*" id="patronymic"
                       onInput={onValidate}
                       value={patronymic}/>

                <input type="date"
                       id="date"
                       className={error['DATE'] ? "fields-input-error" : "fields-input"}
                       onInput={onCheckDate}/>

                <select className={error['GENDER'] ? "fields-input-error" : "fields-input"}
                        onChange={onChangeGender}
                        name="gender"
                        id="gender">
                    <option value="0">Выберите пол</option>
                    <option value="1">Женщина</option>
                    <option value="2">Мужчина</option>
                </select>

                <input type="text"
                       id="passport"
                       className={error['PASSPORT'] ? "fields-input-error" : "fields-input"}
                       pattern="[0-9\s]*"
                       onInput={onValidate}
                       value={passport}/>

                <input className={error['EMAIL'] ? "fields-input-error" : "fields-input"}
                       onInput={onIsEmail}
                       type="email"
                       id="email"/>

                <Transport />
            </div>
        )
    }
}