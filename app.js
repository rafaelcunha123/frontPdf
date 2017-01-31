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
	address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa',
}

print.scheduleProtocol(schedule, {
	size: 'a4'
}).then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})