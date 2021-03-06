const jsPdf = require('node-jspdf')
const R = require('ramda')
const helper = require('./js_pdf_helper.js')

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
				txtArray: data.address ? helper.paginateString(input.doc, data.address, 160*wConverter).slice(0, 3) : "",
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
				txtArray: data.recommendations ? helper.paginateString(input.doc, data.recommendations, 160*wConverter).slice(0, 25) : "",
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
					text: R.path(['contractor', 'cnpj'], data) ? data.contractor.cnpj : (R.path(['contractor', 'cpf'], data) ? data.contractor.cpf : ''),
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
				txtArray: R.path(['contractor', 'address'], data) ? helper.paginateString(input.doc, data.contractor.address, 167*wConverter).slice(0, 2) : "",
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
					text: R.path(['patient', 'cnpj'], data) ? data.patient.cnpj : (R.path(['patient', 'cpf'], data) ? data.patient.cpf : ''),
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
				txtArray: R.path(['patient', 'address'], data) ? helper.paginateString(input.doc, data.patient.address, 167*wConverter).slice(0, 2) : "",
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
					text: (data.procedures && data.procedures[0] && data.procedures[0].procedureName) ? helper.paginateString(input.doc, data.procedures[0].procedureName,125*wConverter).slice(0, 2) : "",
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
					text: (data.procedures && data.procedures[0] && data.procedures[0].value) ? helper.paginateString(input.doc, data.procedures[0].value,30*wConverter).slice(0, 2) : "",
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
				y: (settings.topMargin + 158 + 17 + 13) * hConverter,
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
				y: (settings.topMargin + 158 + 17 + 13) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[1] && data.procedures[1].procedureName) ? helper.paginateString(input.doc, data.procedures[1].procedureName,125*wConverter).slice(0, 2) : "",
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
					text: (data.procedures && data.procedures[1] && data.procedures[1].value) ? helper.paginateString(input.doc, data.procedures[1].value,30*wConverter).slice(0, 2) : "",
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
				y: (settings.topMargin + 158 + 17 + 26) * hConverter,
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
				y: (settings.topMargin + 158 + 17 + 26) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[2] && data.procedures[2].procedureName) ? helper.paginateString(input.doc, data.procedures[2].procedureName,125*wConverter).slice(0, 2) : "",
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
					text: (data.procedures && data.procedures[2] && data.procedures[2].value) ? helper.paginateString(input.doc, data.procedures[2].value,30*wConverter).slice(0, 2) : "",
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
				y: (settings.topMargin + 158 + 17 + 39) * hConverter,
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
				y: (settings.topMargin + 158 + 17 + 39) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[3] && data.procedures[3].procedureName) ? helper.paginateString(input.doc, data.procedures[3].procedureName,125*wConverter).slice(0, 2): "",
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
					text: (data.procedures && data.procedures[3] && data.procedures[3].value) ? helper.paginateString(input.doc, data.procedures[3].value,30*wConverter).slice(0, 2) : "",
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
				y: (settings.topMargin + 158 + 17 + 52) * hConverter,
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
				y: (settings.topMargin + 158 + 17 + 52) * hConverter,
				w: (132) * wConverter,
				h: 12 * hConverter,
				header: {
					text: (data.procedures && data.procedures[4] && data.procedures[4].procedureName) ? helper.paginateString(input.doc ,data.procedures[4].procedureName,125*wConverter).slice(0, 2) : "",
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
					text: (data.procedures && data.procedures[4] && data.procedures[4].value) ? helper.paginateString(input.doc, data.procedures[4].value,30*wConverter).slice(0, 2) : "",
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
				y: (settings.topMargin + 158 + 17 + 65) * hConverter,
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



exports.specialPrescription = function(data, options) {
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
			txtArray: ['RECEITUÁRIO DE CONTROLE ESPECIAL'],
			align: 'center',
			fontSize: 14 * hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: (settings.topMargin-3) * hConverter,
		})
	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['1ᵃ via do paciente   2ᵃ via da farmácia'],
				fontSize: 10 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 9) * hConverter,
				lineSpacing: 0,
				align: 'center'

			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 15) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 8 * hConverter,

				content: {
					text: 'IDENTIFICAÇÃO DO EMITENTE',
					fontSize: settings.contentFontSize,
					fontStyle: 'bold',
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 23) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 38 * hConverter,

				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 25) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'name'], data) ? data.issuer.name.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 32) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'associationData'], data) ? data.issuer.associationData.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 39) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'phone'], data) ? data.issuer.phone.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: R.path(['issuer', 'address'], data) ? helper.paginateString(input.doc,data.issuer.address, 167 * wConverter).slice(0,2) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 47) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
				align: 'center'
			})
		})



	.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 63) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'PACIENTE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'name'], data) ? data.patient.name.slice(0, 84) : '',
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
				y: (settings.topMargin + 80) * hConverter,
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
				txtArray: R.path(['patient', 'address'], data) ? helper.paginateString(input.doc, data.patient.address, 167*wConverter).slice(0, 2) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 90) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 103) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 70 * hConverter,
				header: {
					text: 'PRESCRIÇÃO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: data.prescription ? helper.paginateString(input.doc,data.prescription, 167*wConverter).slice(0,11) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 113) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})

	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________/____________/____________', '                                 (data)'],
				x: (settings.leftMargin) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 185) * hConverter,
				lineSpacing: 0.3,
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________________________________', '                  (assinatura e carimbo)'],
				x: (settings.leftMargin + 98) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 184.5) * hConverter,
				lineSpacing: 0.3,

			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 200) * hConverter,
				w: (210 - 2 * settings.leftMargin - 8) / 2 * wConverter,
				h: 8 * hConverter,

				content: {
					text: 'IDENTIFICAÇÃO DO COMPRADOR',
					fontSize: settings.contentFontSize,
					fontStyle: 'normal',
					fontFamily: settings.contentFont,
					padding: 1,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 208) * hConverter,
				w: (210 - 2 * settings.leftMargin - 8) / 2 * wConverter,
				h: 70 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})

		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['Nome:  __________________________________'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 213) * hConverter,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['            __________________________________'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 222) * hConverter,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['Ident:   __________________ Org. Em.:_______'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 231) * hConverter,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['Endereço: _____________________________'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 240) * hConverter,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['                    _____________________________'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 249) * hConverter,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['Cidade:  _____________________ UF:_______'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 258) * hConverter,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['Telefone:_______________________________'],
				x: (settings.leftMargin + 3) * wConverter,
				fontSize: 12 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 267) * hConverter,

			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 98) * wConverter,
				y: (settings.topMargin + 200) * hConverter,
				w: (210 - 2 * settings.leftMargin - 8) / 2 * wConverter,
				h: 8 * hConverter,

				content: {
					text: 'IDENTIFICAÇÃO DO FORNECEDOR',
					fontSize: settings.contentFontSize,
					fontStyle: 'normal',
					fontFamily: settings.contentFont,
					padding: 1,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 98) * wConverter,
				y: (settings.topMargin + 208) * hConverter,
				w: (210 - 2 * settings.leftMargin - 8) / 2 * wConverter,
				h: 70 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['__________________________', '               Assinatura do ', '              Farmacêutico'],
				x: (settings.leftMargin + 100) * wConverter,
				fontSize: 10 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 260) * hConverter,
				lineSpacing: -0.2,

			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['______/______/______', '               Data'],
				x: (settings.leftMargin + 150) * wConverter,
				fontSize: 10 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (settings.topMargin + 261.5) * hConverter,
				lineSpacing: 0,

			})
		})



	.then(helper.saveDoc)
}


exports.prescription = function(data, options) {
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
			txtArray: ['RECEITUÁRIO MÉDICO'],
			align: 'center',
			fontSize: 14 * hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: (settings.topMargin-3) * hConverter,
		})
	
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 15) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 8 * hConverter,

				content: {
					text: 'IDENTIFICAÇÃO DO EMITENTE',
					fontSize: settings.contentFontSize,
					fontStyle: 'bold',
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 23) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 38 * hConverter,

				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 25) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'name'], data) ? data.issuer.name.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 32) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'associationData'], data) ? data.issuer.associationData.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 39) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'phone'], data) ? data.issuer.phone.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: R.path(['issuer', 'address'], data) ? helper.paginateString(input.doc,data.issuer.address, 167 * wConverter).slice(0,2) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 47) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
				align: 'center'
			})
		})



	.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 63) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'PACIENTE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'name'], data) ? data.patient.name.slice(0, 84) : '',
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
				y: (settings.topMargin + 80) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 170 * hConverter,
				header: {
					text: 'PRESCRIÇÃO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: data.prescription ? helper.paginateString(input.doc, data.prescription, 167*wConverter).slice(0,30) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 93) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})

	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________/____________/____________', '                                 (data)'],
				x: (settings.leftMargin) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (287 - settings.topMargin ) * hConverter,
				lineSpacing: 0.3,
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________________________________', '                  (assinatura e carimbo)'],
				x: (settings.leftMargin + 98) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (287 -settings.topMargin) * hConverter,
				lineSpacing: 0.3,

			})
		})
	.then(helper.saveDoc)
}

exports.atestado = function(data, options) {
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
			txtArray: ['ATESTADO MÉDICO'],
			align: 'center',
			fontSize: 14 * hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: (settings.topMargin-3) * hConverter,
		})
	
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 15) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 8 * hConverter,

				content: {
					text: 'IDENTIFICAÇÃO DO EMITENTE',
					fontSize: settings.contentFontSize,
					fontStyle: 'bold',
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 23) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 32 * hConverter,

				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 25) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'name'], data) ? data.issuer.name.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 32) * hConverter,
				w: (210 - 2 * settings.leftMargin - 4) * wConverter,
				h: 8 * hConverter,

				content: {
					text: R.path(['issuer', 'associationData'], data) ? data.issuer.associationData.slice(0, 60) : '',
					fontSize: settings.contentFontSize,
					fontStyle: settings.contentFontStyle,
					fontFamily: settings.contentFont,
					padding: settings.contentPadding,
					align: 'center'
				},
				style: {
					borderColor: settings.blankBorder
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: R.path(['issuer', 'address'], data) ? helper.paginateString(input.doc,data.issuer.address, 167*wConverter).slice(0,2) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 41) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
				align: 'center'
			})
		})



	.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin) * wConverter,
				y: (settings.topMargin + 57) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 15 * hConverter,
				header: {
					text: 'PACIENTE',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				content: {
					text: R.path(['patient', 'name'], data) ? data.patient.name.slice(0, 84) : '',
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
				y: (settings.topMargin + 74) * hConverter,
				w: (210 - 2 * settings.leftMargin) * wConverter,
				h: 170 * hConverter,
				header: {
					text: 'ATESTADO',
					fontSize: settings.headerFontSize,
					fontStyle: settings.headerStyle,
					fontFamily: settings.headerFont,
					padding: settings.headerPadding,
				},
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: data.atestado ? helper.paginateString(input.doc, data.atestado, 167*wConverter).slice(0,30) : "",
				x: (settings.leftMargin + 2) * wConverter,
				y: (settings.topMargin + 86) * hConverter,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})

	.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________/____________/____________', '                                 (data)'],
				x: (settings.leftMargin) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (287 - settings.topMargin ) * hConverter,
				lineSpacing: 0.3,
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: ['____________________________________', '                  (assinatura e carimbo)'],
				x: (settings.leftMargin + 98) * wConverter,
				fontSize: 14 * hConverter,
				fontFamily: 'times',
				fontStyle: 'normal',
				y: (287 -settings.topMargin) * hConverter,
				lineSpacing: 0.3,

			})
		})
	.then(helper.saveDoc)
}