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
	recommendations: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam congue congue magna et sagittis. Mauris ornare nisi nec arcu elementum, in dignissim tortor ornare. Cras ac eleifend orci. Vestibulum porttitor purus risus, quis sollicitudin lorem ultricies eu. In eu quam ex. Ut laoreet nulla vel condimentum tempus. Curabitur imperdiet volutpat lectus quis vulputate. Aliquam porta magna orci, sit amet porttitor sapien placerat et. Vestibulum leo nibh, sollicitudin et iaculis aliquet, efficitur ac risus. Nam sollicitudin arcu ut tellus pharetra consectetur. \n Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam congue congue magna et sagittis. Mauris ornare nisi nec arcu elementum, in dignissim tortor ornare. Cras ac eleifend orci. Vestibulum porttitor purus risus, quis sollicitudin lorem ultricies eu. In eu quam ex. Ut laoreet nulla vel condimentum tempus. Curabitur imperdiet volutpat lectus quis vulputate. Aliquam porta magna orci, sit amet porttitor sapien placerat et. Vestibulum leo nibh, sollicitudin et iaculis aliquet, efficitur ac risus. Nam sollicitudin arcu ut tellus pharetra consectetur.\n \n Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam congue congue magna et sagittis. Mauris ornare nisi nec arcu elementum, in dignissim tortor ornare. Cras ac eleifend orci. Vestibulum porttitor purus risus, quis sollicitudin lorem ultricies eu. In eu quam ex. Ut laoreet nulla vel condimentum tempus. Curabitur imperdiet volutpat lectus quis vulputate. Aliquam porta magna orci, sit amet porttitor sapien placerat et. Vestibulum leo nibh, sollicitudin et iaculis aliquet, efficitur ac risus. Nam sollicitudin arcu ut tellus pharetra consectetur. \n \n Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam congue congue magna et sagittis. Mauris ornare nisi nec arcu elementum, in dignissim tortor ornare. Cras ac eleifend orci. Vestibulum porttitor purus risus, quis sollicitudin lorem ultricies eu. In eu quam ex. Ut laoreet nulla vel condimentum tempus. Curabitur imperdiet volutpat lectus quis vulputate. Aliquam porta magna orci, sit amet porttitor sapien placerat et. Vestibulum leo nibh, sollicitudin et iaculis aliquet, efficitur ac risus. Nam sollicitudin arcu ut tellus pharetra consectetur.',
	address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa - SP, 02938-000 rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa rafa ',
}

print.scheduleProtocol(schedule, {
	size: 'a4'
}).then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})

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
		procedureName: 'Consulta em consultório (no horário normal ou preestabelecido) jfldksajf akldjflkasçdjf dhgfiyhruwo Consulta em consultório (no horário normal ou preestabelecido) jfldksajf akldjflkasçdjf dhgfiyhruwo',
		value: 'R$ 40,00',
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

/*print.receipt(receipt)
	.then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})*/


const spPrescription = {
	issuer:{
		name: 'Nam Jin Kim',
		associationData: 'CRM/SP 65985-2',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000',
		phone: '(11) 3326-5698'
	},
	patient:{
		name: 'Rafael Souza da Cunha ',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 fhdjka'
	},
	prescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur eros quam, non viverra augue egestas nec. Nam consectetur diam purus, sit amet dapibus libero facilisis quis. Donec sit amet tincidunt lectus, quis venenatis metus. Sed vestibulum tincidunt efficitur. In sed pharetra lacus. Aenean malesuada ultricies mauris, at sagittis erat vulputate sed. Etiam sit amet justo sit amet sem egestas varius nec quis magna. Duis a turpis volutpat diam fringilla porta vitae vel dolor. Ut aliquet feugiat arcu, ac pellentesque sapien placerat eget. Fusce ornare vitae tortor sed efficitur. Phasellus sodales elit quis ex varius, et vestibulum nunc convallis. Praesent nec felis lacinia, pharetra urna id, imperdiet mauris. Maecenas tortor felis, dignissim a quam vitae, dictum sollicitudin velit. Morbi molestie nulla finibus, vulputate tellus sit amet, accumsan arcu. \nQuisque mollis risus erat, vel luctus metus auctor vel. Pellentesque posuere massa a risus maximus vehicula. Proin lacinia urna vel ligula ornare, nec laoreet est eleifend. Quisque sit amet lectus ornare justo laoreet finibus at sit amet justo. Cras a augue sed lectus elementum sollicitudin. Vestibulum vitae arcu ac nisi blandit sagittis sed non ex. Pellentesque erat nunc, condimentum quis dignissim eget, vestibulum vel tortor. Nam id gravida massa, in varius dui. Pellentesq. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur eros quam, non viverra augue egestas nec. Nam consectetur diam purus, sit amet dapibus libero facilisis quis. Donec sit amet tincidunt lectus, quis venenatis metus. Sed vestibulum tincidunt efficitur. In sed pharetra lacus. Aenean malesuada ultricies mauris, at sagittis erat vulputate sed. Etiam sit amet justo sit amet sem egestas varius nec quis magna. Duis a turpis volutpat diam fringilla porta vitae vel dolor. Ut aliquet feugiat arcu, ac pellentesque sapien placerat eget. Fusce ornare vitae tortor sed efficitur. Phasellus sodales elit quis ex varius, et vestibulum nunc convallis. Praesent nec felis lacinia, pharetra urna id, imperdiet mauris. Maecenas tortor felis, dignissim a quam vitae, dictum sollicitudin velit. Morbi molestie nulla finibus, vulputate tellus sit amet, accumsan arcu. \nQuisque mollis risus erat, vel luctus metus auctor vel. Pellentesque posuere massa a risus maximus vehicula. Proin lacinia urna vel ligula ornare, nec laoreet est eleifend. Quisque sit amet lectus ornare justo laoreet finibus at sit amet justo. Cras a augue sed lectus elementum sollicitudin. Vestibulum vitae arcu ac nisi blandit sagittis sed non ex. Pellentesque erat nunc, condimentum quis dignissim eget, vestibulum vel tortor. Nam id gravida massa, in varius dui. Pellentesq'

}

/*print.specialPrescription(spPrescription, {size: 'a6'})
	.then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})
*/

const atest = {
	issuer:{
		name: 'Nam Jin Kim',
		associationData: 'CRM/SP 65985-2',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000',
		phone: '(11) 3326-5698'
	},
	patient:{
		name: 'Rafael Souza da Cunha ',
		address: 'Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000 Av. Raimundo Pereira de Magalhães, 12367 - Pirituba, São Paulo - SP, 02938-000'
	},
	atestado: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur eros quam, non viverra augue egestas nec. Nam consectetur diam purus, sit amet dapibus libero facilisis quis. Donec sit amet tincidunt lectus, quis venenatis metus. Sed vestibulum tincidunt efficitur. In sed pharetra lacus. Aenean malesuada ultricies mauris, at sagittis erat vulputate sed. Etiam sit amet justo sit amet sem egestas varius nec quis magna. Duis a turpis volutpat diam fringilla porta vitae vel dolor. Ut aliquet feugiat arcu, ac pellentesque sapien placerat eget. Fusce ornare vitae tortor sed efficitur. Phasellus sodales elit quis ex varius, et vestibulum nunc convallis. Praesent nec felis lacinia, pharetra urna id, imperdiet mauris. Maecenas tortor felis, dignissim a quam vitae, dictum sollicitudin velit. Morbi molestie nulla finibus, vulputate tellus sit amet, accumsan arcu. \nQuisque mollis risus erat, vel luctus metus auctor vel. Pellentesque posuere massa a risus maximus vehicula. Proin lacinia urna vel ligula ornare, nec laoreet est eleifend. Quisque sit amet lectus ornare justo laoreet finibus at sit amet justo. Cras a augue sed lectus elementum sollicitudin. Vestibulum vitae arcu ac nisi blandit sagittis sed non ex. Pellentesque erat nunc, condimentum quis dignissim eget, vestibulum vel tortor. Nam id gravida massa, in varius dui. Pellentesq. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur eros quam, non viverra augue egestas nec. Nam consectetur diam purus, sit amet dapibus libero facilisis quis. Donec sit amet tincidunt lectus, quis venenatis metus. Sed vestibulum tincidunt efficitur. In sed pharetra lacus. Aenean malesuada ultricies mauris, at sagittis erat vulputate sed. Etiam sit amet justo sit amet sem egestas varius nec quis magna. Duis a turpis volutpat diam fringilla porta vitae vel dolor. Ut aliquet feugiat arcu, ac pellentesque sapien placerat eget. Fusce ornare vitae tortor sed efficitur. Phasellus sodales elit quis ex varius, et vestibulum nunc convallis. Praesent nec felis lacinia, pharetra urna id, imperdiet mauris. Maecenas tortor felis, dignissim a quam vitae, dictum sollicitudin velit. Morbi molestie nulla finibus, vulputate tellus sit amet, accumsan arcu. \nQuisque mollis risus erat, vel luctus metus auctor vel. Pellentesque posuere massa a risus maximus vehicula. Proin lacinia urna vel ligula ornare, nec laoreet est eleifend. Quisque sit amet lectus ornare justo laoreet finibus at sit amet justo. Cras a augue sed lectus elementum sollicitudin. Vestibulum vitae arcu ac nisi blandit sagittis sed non ex. Pellentesque erat nunc, condimentum quis dignissim eget, vestibulum vel tortor. Nam id gravida massa, in varius dui. Pellentesq'

}

/*print.atestado(atest)
	.then(input => console.log('done.'))
.catch(e=>{
	console.log(e)
})*/