import React, {Component} from 'react';
import Transport from './Transport';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="form">
                <div className="form-header">Анкета</div>
                <div className="fields">
                    <input type="text"
                           className={this.props.form.error['FIRSTNAME'] ? "fields-input-error" : "fields-input"}
                           pattern="[аА-яЯ]*" id="firstName"
                           onInput={this.props.form.onValidate}
                           onBlur={this.props.form.onValidate}
                           value={this.props.form.firstName}/>
                    <input type="text"
                           className={this.props.form.error['LASTNAME'] ? "fields-input-error" : "fields-input"}
                           pattern="[аА-яЯ]*" id="lastName"
                           onInput={this.props.form.onValidate}
                           value={this.props.form.lastName}/>
                    <input type="text"
                           className={this.props.form.error['PATRONYMIC'] ? "fields-input-error" : "fields-input"}
                           pattern="[аА-яЯ]*" id="patronymic"
                           onInput={this.props.form.onValidate}
                           value={this.props.form.patronymic}/>

                    <input type="date"
                           className={this.props.form.error['CHECK_DATE'] ? "fields-input-error" : "fields-input"}
                           onInput={this.props.form.onCheckDate}/>

                    <select className="fields-select" name="gender" id="gender">
                        <option value="0">Выберите пол</option>
                        <option value="1">Женский</option>
                        <option value="2">Мужской</option>
                    </select>

                    <input type="text"
                           id="passport"
                           className="fields-input"
                           pattern="[0-9\s]*"
                           onInput={this.props.form.onValidate}
                           value={this.props.form.passport}
                        />

                    <input className="fields-input" type="email"/>

                    <Transport />
                </div>
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
                <span className="form-error">
                    {
                        this.props.form.error['FIRSTNAME']
                            ? <div className="form-error-firstName">{this.props.form.error['FIRSTNAME']}</div>
                            : ''
                    }
                    {
                        this.props.form.error['LASTNAME']
                            ? <div className="form-error-lastName">{this.props.form.error['LASTNAME']}</div>
                            : ''
                    }
                    {
                        this.props.form.error['PATRONYMIC']
                            ? <div className="form-error-patronymic">{this.props.form.error['PATRONYMIC']}</div>
                            : ''
                    }
                    {
                        this.props.form.error['CHECK_DATE']
                            ? <div className="form-error-date">{this.props.form.error['CHECK_DATE']}</div>
                            : ''
                    }
                    {
                        this.props.form.error['PASSPORT']
                            ? <div className="form-error-passport">{this.props.form.error['PASSPORT']}</div>
                            : ''
                    }
                </span>
                <span className="form-info">`<b className="labels-label-required">*</b>` - обязательно для заполнения</span>
                <div className="form-button" onClick={this.props.form.onSubmit.bind(this.props, this)}>Отправить</div>
            </div>
        );
    }
}