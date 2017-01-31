const print = require('./print')

const schedule = {
	day: '30 de Janeiro de 2017',
	slot: {
		start: '10:00 a.m.'
	},
	professional: 'Pedro Luis Santiago Calderon Pedro Luis Santiago Calderon Pedro Luis Santiago Calderon 123456789',
	speciality: 'Dermatologista com especialidade muito muito longa',
	patient: 'Sandra Oliver Ferreira de Souza',
	insurance: 'Porto Seguro Seguradora de Saúde',
	recommendations: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa',
	address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa ',
}

/*print.scheduleProtocol(schedule, {
	size: 'a4'
}).then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})*/

const receipt = {
	contractor:{
		cnpj: '13.425.588/0001-77',
		name: 'HOSPITAL PREVINA - UNIDADE TAIPAS',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000',
		phone: '(11) 5369-8965',
		email: 'comercial@hospitalprevina.com.br'
	},
	patient: {
		cpf: '010.368.855-45',
		name: 'Sandra Oliver Ferreira de Souza',
		phone: '(11) 97854-9012',
		email: 'sandraoliverferreia@email.com',
		address:'Rua Juréia, 394, apto. 231 - Chácara Inglesa, São Paulo, SP, 04140-110'
	},
	procedures:[{
		date: '31-01-2017',
		procedureName: 'Consulta em consultório (no horário normal ou preestabelecido)',
		value: 'R$ 400,00',
	},{
		date: '01-03-2017',
		procedureName: 'Consulta em consultório (no horário normal ou preestabelecido)',
		value: 'R$ 250,00',
	},{
		date: '01-03-2017',
		procedureName: 'Consulta em consultório (no horário normal ou preestabelecido)',
		value: 'R$ 250,00',
	},{
		date: '01-03-2017',
		procedureName: 'Consulta em consultório (no horário normal ou preestabelecido)',
		value: 'R$ 250,00',
	},{
		date: '01-03-2017',
		procedureName: 'Consulta em consultório (no horário normal ou preestabelecido) laldjhfljsdhdf djhahfkljsahdf kjasdhfjaksdx fhadjkfhasdjklhfkajsdhd',
		value: 'R$ 250,00',
	}],
	totalValue: 'R$ 1400,00',
	receiptNumber: '588814da0211673702d9067c',
}

print.receipt(receipt)
	.then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})