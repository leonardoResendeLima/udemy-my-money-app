import React, { Component } from 'react'
import Grid from "../common/layout/grid";
import { Field } from "redux-form";
import Input from "../common/form/input";

class CreditList extends Component {
	render() {
		return (
			<Grid cols={this.props.cols}>
				<fieldset>
					<legend>Creditos</legend>
					<table className='table'>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Valor</th>
								<th>Acoes</th>
							</tr>
						</thead>
					</table>
					<tbody>
						{this.renderRows()}
					</tbody>
				</fieldset>
			</Grid>
		)
	}

	renderRows() {
		return (
			<tr>
				<td>
					<Field name='credits[0].name' component={Input} placeholder='Informe o nome' readOnly={this.props.readOnly}></Field>
				</td>
				<td>
					<Field name='credits[0].value' component={Input} placeholder='Informe o valor' readOnly={this.props.readOnly}></Field>
				</td>
				<td>
				</td>
			</tr>
		)
	}
}

export default CreditList