import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInputField";
import CreditList from "./creditList";

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit, readOnly } = this.props
		return (
			<form role='form' onSubmit={handleSubmit}>
				<div className='box-body'>
					<Field
						name='name'
						readOnly={readOnly}
						component={labelAndInput}
						label='Nome'
						cols='12 4'
						placeholder='Informe o nome'></Field>
					<Field
						type='number'
						readOnly={readOnly}
						name='month'
						component={labelAndInput}
						label='Mes'
						cols='12 4'
						placeholder='Informe o mes'></Field>
					<Field
						type='number'
						readOnly={readOnly}
						name='year'
						component={labelAndInput}
						label='Ano'
						cols='12 4'
						placeholder='Informe o ano'></Field>

					<CreditList cols='12 6' readOnly={readOnly}></CreditList>
				</div>
				<div className='box-footer'>
					<button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button> &nbsp;
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancel</button>
				</div>
			</form>
		)
	}
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)