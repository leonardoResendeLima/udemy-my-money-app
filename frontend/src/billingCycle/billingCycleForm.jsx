import React, { Component } from 'react'
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInputField";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field
                        name='name'
                        component={labelAndInput}
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe o nome'></Field>
                    <Field
                        type='number'
                        name='month'
                        component={labelAndInput}
                        label='Mes'
                        cols='12 4'
                        placeholder='Informe o mes'></Field>
                    <Field
                        type='number'
                        name='year'
                        component={labelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'></Field>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)