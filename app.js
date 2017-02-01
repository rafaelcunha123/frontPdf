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

/*print.receipt({})
	.then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})*/


const spReceipt = {
	issuer:{
		name: 'Nam Jin Kim',
		associationData: 'CRM/SP 65985-2',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000',
		phone: '(11) 3326-5698'
	},
	patient:{
		name: 'Rafael Souza da Cunha ',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000'
	},
	prescription: 'Prescrevo um monte de \n medicamentos \n legais para o paciente. Quando ele tomar tudo, vai ficar bem louco e ver estrela. Uma hora eu canso de escrever, mas enquanto isso, vou prescrever pra caralho ate dar overdose no brother.\nPedrao ze ruela nao tem ideia do trampo que da pra fazer ess poha dar newline'

}

print.specialPrescription(spReceipt, {size: 'a6'})
	.then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})