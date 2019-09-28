import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCycleActions";
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
                        name='years'
                        component={labelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'></Field>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)