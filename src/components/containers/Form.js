import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputsForm from '../views/InputsForm';
import LabelsForm from '../views/LabelsForm';
import Errors from "../views/Errors";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            simulate: false
        }
    }

    request(data, evt) {
        this.props.onSubmit(data, evt);
        if (!this.props.error) {
            this.setState({
                simulate: true
            });

            setTimeout(() => {
                this.setState({
                    simulate: false
                });
            }, 2000)
        }
    }

    render() {
        const {error} = this.props;
        return (
            <div className={this.state.simulate ? 'form-simulate' : 'form'}>
                <div className="form-header">Анкета</div>
                <InputsForm filter={this.props}/>
                <LabelsForm />
                <Errors errors={error}/>
                <span className="form-info">`<b
                    className="labels-label-required">*</b>` - обязательно для заполнения</span>
                <div className="form-button" onClick={this.request.bind(this, this.props)}>Отправить</div>
            </div>
        );
    }
}
export default connect(
    state => ({
        ...state.filter
    }),
    dispatch => ({
        onIsEmail: (evt) => {
            dispatch({type: evt.target.id.toString().toUpperCase(), data: evt.target.value})
        },
        onValidate: evt => {
            dispatch({type: evt.target.id.toUpperCase(), data: evt.target.validity.valid ? evt.target.value : 'err'});
        },
        onCheckDate: date => {
            let fullYear = new Date(date.target.value).getFullYear().toString();
            if (fullYear.length === 4) dispatch({type: 'DATE', data: date.target.value});
        },
        onSubmit: (data, env) => {
            let arr = [];
            for (let key in data) {
                if (typeof data[key] === 'function') continue;
                data[key] || arr.push(key);
            }
            dispatch({type: 'SUBMIT', fields: arr});
        },
        onChangeGender: (evt) => {
            dispatch({type: 'GENDER', data: +evt.target.value});
        }
    })
)(Form);