import axios from "axios";
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from "redux-form";
import { selectTab, showtabs } from "../common/tab/tabActions";

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
	const request = axios.get(`${BASE_URL}/billingCycles`)
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	}
}

export function create(values) {
	return dispatch => {
		console.log(values)
		axios.post(`${BASE_URL}/billingCycles`, values).then(resp => {
			toastr.success("Sucesso", "Operacao realiada com sucesso")
			dispatch(init())
		}).catch(e => {
			e.response.data.errors.forEach(error => {
				toastr.error('Erro', error)
			});
		})
	}
}


export function showUpdate(billingCycle) {
	return [
		showtabs('tabUpdate'),
		selectTab('tabUpdate'),
		initialize('billingCycleForm', billingCycle)
	]
}

export function init() {
	return [
		showtabs('tabList', 'tabCreate'),
		selectTab('tabList'),
		getList(),
		initialize('billingCycleForm', INITIAL_VALUES),
	]
}