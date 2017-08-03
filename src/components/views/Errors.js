import React, {Component} from 'react';

export default class Errors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {errors} = this.props;
        return (
            <span className="form-error">
                { errors['FIRSTNAME'] ? <div className="form-error-firstName">{errors['FIRSTNAME']}</div> : '' }

                { errors['LASTNAME'] ? <div className="form-error-lastName">{errors['LASTNAME']}</div> : '' }

                { errors['PATRONYMIC'] ? <div className="form-error-patronymic">{errors['PATRONYMIC']}</div> : '' }

                { errors['DATE'] ? <div className="form-error-date">{errors['DATE']}</div> : '' }

                { errors['PASSPORT'] ? <div className="form-error-passport">{errors['PASSPORT']}</div> : '' }

                { errors['EMAIL'] ? <div className="form-error-email">{errors['EMAIL']}</div> : '' }

                { errors['GENDER'] ? <div className="form-error-gender">{errors['GENDER']}</div> : '' }
            </span>
        );
    }
}