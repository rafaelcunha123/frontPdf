const jsPdf = require('node-jspdf')
const R = require('ramda')
const helper = require('./jsPdfHelper.js')

exports.scheduleProtocol = function(data, options) {
	options = options || {}
	options.orientation = options.orientation ? options.orientation : 'p'
	options.size = options.size ? options.size : 'a4'

	let doc = jsPdf(options.orientation, 'mm', options.size)

	const hwRatio = options.orientation === 'p' ? (297 / 210) : (210 / 297)
	const wConverter = doc.internal.pageSize.width / 210
	const hConverter = doc.internal.pageSize.width * hwRatio / 297

	const settings = {
		headerFont: 'times',
		headerStyle: 'bold',
		headerFontSize: 12 * hConverter,
		headerPadding: 2 * hConverter,

		contentFont: 'times',
		contentFontStyle: 'normal',
		contentFontSize: 14 * hConverter,
		contentPadding: 2 * hConverter,

		borderColor: {
			R: 150,
			G: 150,
			B: 150,
		},

		leftMargin: 10,
		topMargin: 10,
	}

	return helper.text(doc, {
			txtArray: ['PROTOCOLO DE AGENDAMENTO'],
			align: 'center',
			fontSize: 16 * hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: 10 * hConverter,
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: settings.leftMargin * wConverter,
				y: (settings.topMargin + 10) * hConverter,
				w: 94 * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'DATA',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: data.day ? data.day : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: settings.leftMargin + (96 * wConverter),
				y: (settings.topMargin + 10) * hConverter,
				w: 94 * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'HORA',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['slot', 'start'], data) ? data.slot.start : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: settings.leftMargin * wConverter,
				y: (settings.topMargin + 27) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 36 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 29) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'PACIENTE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: data.patient ? data.patient.slice(0, 89) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 46) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'CONVENIO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: data.insurance ? data.insurance.slice(0, 89) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: settings.leftMargin * wConverter,
				y: (settings.topMargin + 65) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 210 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 67) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'PROFISSIONAL',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: data.professional ? data.professional.slice(0, 87) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 84) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'ESPECIALIDADE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: data.speciality ? data.speciality.slice(0, 89) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 101) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 30 * hConverter,
				header: {
					text: 'ENDERECO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor,
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: data.address ? data.address.match(/(.|[\r\n]){1,84}/g).slice(0, 4) : "",
				x: (settings.leftMargin + 4) * wConverter,
				y: 121,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 133) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 140 * hConverter,
				header: {
					text: 'RECOMENDACOES',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor,
					fill: {
						R: 240,
						G: 240,
						B: 240,
					}
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: data.recommendations ? data.recommendations.match(/(.|[\r\n]){1,84}/g).slice(0, 27) : "",
				x: (settings.leftMargin + 4) * wConverter,
				y: 155,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})
		.then(helper.saveDoc)
}



exports.receipt = function(data, options) {
	options = options || {}
	options.orientation = options.orientation ? options.orientation : 'p'
	options.size = options.size ? options.size : 'a4'

	let doc = jsPdf(options.orientation, 'mm', options.size)

	const hwRatio = options.orientation === 'p' ? (297 / 210) : (210 / 297)
	const wConverter = doc.internal.pageSize.width / 210
	const hConverter = doc.internal.pageSize.width * hwRatio / 297

	const settings = {
		headerFont: 'times',
		headerStyle: 'bold',
		headerFontSize: 12 * hConverter,
		headerPadding: 2 * hConverter,

		contentFont: 'times',
		contentFontStyle: 'normal',
		contentFontSize: 14 * hConverter,
		contentPadding: 2 * hConverter,

		borderColor: {
			R: 150,
			G: 150,
			B: 150,
		},
		blankBorder: {
			R: 255,
			G: 255,
			B: 255,
		},

		lightFill: {
			R: 250,
			G: 250,
			B: 250,
		},

		leftMargin: 10,
		topMargin: 10,
	}



	return helper.text(doc, {
			txtArray: ['RECIBO DE PRESTAÇÃO DE SERVIÇOS'],
			align: 'center',
			fontSize: 16 * hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: settings.topMargin * hConverter,
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['IDENTIFICAÇÃO DO PRESTADOR'],
				x: settings.leftMargin,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'bold',
				y: (settings.topMargin + 15) * hConverter,
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 23) * hConverter,
				w: 44 * wConverter,
				h: 15 * hConverter,
				header: {
					text: R.path(['contractor', 'cnpj'], data) ? 'CNPJ' : 'CPF',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['contractor', 'cnpj'], data) ? data.contractor.cnpj : (data.contractor.cpf ? data.contractor.cpf : ''),
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 46) * wConverter,
				y: (settings.topMargin + 23) * hConverter,
				w: (210 - 2 * settings.leftMargin - 46) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'NOME',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['contractor', 'name'], data) ? data.contractor.name.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 40) * hConverter,
				w: 44 * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'TELEFONE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['contractor', 'phone'], data) ? data.contractor.phone : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 46) * wConverter,
				y: (settings.topMargin + 40) * hConverter,
				w: (210 - 2 * settings.leftMargin - 46) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'E-MAIL',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['contractor', 'email'], data) ? data.contractor.email.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})


	.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 57) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 21 * hConverter,
				header: {
					text: 'ENDERECO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor,
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: R.path(['contractor', 'address'], data) ? data.contractor.address.match(/(.|[\r\n]){1,84}/g).slice(0, 2) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: 77,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})



	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['IDENTIFICAÇÃO DO PACIENTE'],
				x: settings.leftMargin,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'bold',
				y: (settings.topMargin + 87) * hConverter,
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 87 + 8) * hConverter,
				w: 44 * wConverter,
				h: 15 * hConverter,
				header: {
					text: R.path(['patient', 'cnpj'], data) ? 'CNPJ' : 'CPF',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'cnpj'], data) ? data.patient.cnpj : (data.patient.cpf ? data.patient.cpf : ''),
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 46) * wConverter,
				y: (settings.topMargin + 87 + 8) * hConverter,
				w: (210 - 2 * settings.leftMargin - 46) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'NOME',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'name'], data) ? data.patient.name.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 87 + 8 + 17) * hConverter,
				w: 44 * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'TELEFONE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'phone'], data) ? data.patient.phone : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 46) * wConverter,
				y: (settings.topMargin + 87 + 8 + 17) * hConverter,
				w: (210 - 2 * settings.leftMargin - 46) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'E-MAIL',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'email'], data) ? data.patient.email.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})


	.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 87 + 8 + 17 + 17) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 21 * hConverter,
				header: {
					text: 'ENDERECO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor,
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: R.path(['patient', 'address'], data) ? data.patient.address.match(/(.|[\r\n]){1,84}/g).slice(0, 2) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 87 + 8 + 17 + 17 + 10) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})

	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['PROCEDIMENTOS'],
				x: settings.leftMargin,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'bold',
				y: (settings.topMargin + 158) * hConverter,
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 158 + 8) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 80 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 158 + 9) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: 'DATA',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: 1,
				},
				style: {
					borderColor: settings.blankBorder,
					fill: settings.lightFill,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 9) * hConverter,
				w: (132) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: 'PROCEDIMENTO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: 0,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 9) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: 'VALOR',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: 0,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		//Procedure 0
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 158 + 17) * hConverter,
				w: (25) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[0] && data.procedures[0].date) ? data.procedures[0].date : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 17) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[0] && data.procedures[0].procedureName) ? data.procedures[0].procedureName.match(/(.|[\r\n]){1,74}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 17) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: (data.procedures && data.procedures[0] && data.procedures[0].value) ? data.procedures[0].value.match(/(.|[\r\n]){1,52}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		//Procedure 1
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 158 + 17+13) * hConverter,
				w: (25) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[1] && data.procedures[1].date) ? data.procedures[1].date : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 17+13) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[1] && data.procedures[1].procedureName) ? data.procedures[1].procedureName.match(/(.|[\r\n]){1,74}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 17 + 13) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: (data.procedures && data.procedures[1] && data.procedures[1].value) ? data.procedures[1].value.match(/(.|[\r\n]){1,52}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		
		//Procedure 2
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 158 + 17+26) * hConverter,
				w: (25) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[2] && data.procedures[2].date) ? data.procedures[2].date : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 17+26) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[2] && data.procedures[2].procedureName) ? data.procedures[2].procedureName.match(/(.|[\r\n]){1,74}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 17 + 26) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: (data.procedures && data.procedures[2] && data.procedures[2].value) ? data.procedures[2].value.match(/(.|[\r\n]){1,52}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		//Procedure 3
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 158 + 17+39) * hConverter,
				w: (25) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[3] && data.procedures[3].date) ? data.procedures[3].date : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 17+39) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[3] && data.procedures[3].procedureName) ? data.procedures[3].procedureName.match(/(.|[\r\n]){1,74}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 17 + 39) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: (data.procedures && data.procedures[3] && data.procedures[3].value) ? data.procedures[3].value.match(/(.|[\r\n]){1,52}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		//Procedure 4
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 158 + 17+52) * hConverter,
				w: (25) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[4] && data.procedures[4].date) ? data.procedures[4].date : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 17+52) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[4] && data.procedures[4].procedureName) ? data.procedures[4].procedureName.match(/(.|[\r\n]){1,74}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 17 + 52) * hConverter,
				w: (25) * wConverter,
				h: 6.5 * hConverter,
				header: {
					text: (data.procedures && data.procedures[4] && data.procedures[4].value) ? data.procedures[4].value.match(/(.|[\r\n]){1,52}/g).slice(0, 2) : "",
					fontSize: settings.headerFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		//Total
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2 + 27) * wConverter,
				y: (settings.topMargin + 158 + 17+65) * hConverter,
				w: (132) * wConverter,
				h: 5 * hConverter,
				header: {
					text: 'TOTAL',
					fontSize: settings.headerFontSize,
					fontStyle: 'bold',
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (210 - 25 - settings.leftMargin - 2) * wConverter,
				y: (settings.topMargin + 158 + 17 + 65) * hConverter,
				w: (25) * wConverter,
				h: 5 * hConverter,
				header: {
					text: data.totalValue ? data.totalValue : "",
					fontSize: settings.headerFontSize,
					fontStyle: 'bold',
					fontFamily: settings.contentFont,
				},
				style: {
					borderColor: settings.blankBorder,
				},
			})
		})


	.then(input => {
		return helper.text(input.doc, {
			txtArray: ['Nº do recibo: ' + (data.receiptNumber ? data.receiptNumber.slice(0, 24) : '-')],
			x: (settings.leftMargin + 122) * wConverter,
			fontSize: 10 * hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: (settings.topMargin + 246) * hConverter,
		})
	})

	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________________________________', '                       (cidade e data)'],
				x: (settings.leftMargin) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 265) * hConverter,
				lineSpacing: 1,
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________________________________', '         (assinatura do emissor do recibo)'],
				x: (settings.leftMargin + 98) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 265) * hConverter,
				//lineSpacing: 1,

			})
		})



	.then(helper.saveDoc)
}