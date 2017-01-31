const jsPdf = require('node-jspdf')
const r = require('ramda')
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
		topMargin: 10 ,
	}

	return helper.text(doc, {
			txtArray: ['PROTOCOLO DE AGENDAMENTO'],
			align: 'center',
			fontSize: 16* hConverter,
			fontFamily: 'times',
			fontStyle: 'bold',
			y: 10* hConverter,
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
					text: r.path(['slot', 'start'], data) ? data.slot.start : '',
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
				x: settings.leftMargin  * wConverter,
				y: (settings.topMargin + 27) * hConverter,
				w: (210-2*settings.leftMargin) * wConverter,
				h: 36 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin +2) * wConverter,
				y: (settings.topMargin + 29	) * hConverter,
				w: (210-2*settings.leftMargin -4) * wConverter,
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
				x: (settings.leftMargin +2) * wConverter,
				y: (settings.topMargin + 46) * hConverter,
				w: (210-2*settings.leftMargin -4) * wConverter,
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
				x: settings.leftMargin  * wConverter,
				y: (settings.topMargin + 65) * hConverter,
				w: (210-2*settings.leftMargin) * wConverter,
				h: 210 * hConverter,
				style: {
					borderColor: settings.borderColor
				},
			})
		})
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin +2) * wConverter,
				y: (settings.topMargin + 67) * hConverter,
				w: (210-2*settings.leftMargin -4) * wConverter,
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
				x: (settings.leftMargin +2) * wConverter,
				y: (settings.topMargin + 84) * hConverter,
				w: (210-2*settings.leftMargin -4) * wConverter,
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
				x: (settings.leftMargin +2) * wConverter,
				y: (settings.topMargin + 101) * hConverter,
				w: (210-2*settings.leftMargin -4) * wConverter,
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
				txtArray: data.address ? data.address.match(/(.|[\r\n]){1,84}/g).slice(0,4) : "",
				x: (settings.leftMargin +4) * wConverter,
				y: 121,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})		
		.then(input => {
			return helper.formBox(input.doc, {
				x: (settings.leftMargin +2) * wConverter,
				y: (settings.topMargin + 133) * hConverter,
				w: (210-2*settings.leftMargin -4) * wConverter,
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
					fill:{
						R: 240,
						G: 240,
						B: 240,
					}
				},
			})
		})
		.then(input => {
			return helper.text(input.doc, {
				txtArray: data.recommendations ? data.recommendations.match(/(.|[\r\n]){1,84}/g).slice(0,27) : "",
				x: (settings.leftMargin +4) * wConverter,
				y: 155,
				fontSize: settings.contentFontSize,
				fontStyle: settings.contentFontStyle,
				fontFamily: settings.contentFont,
			})
		})
		.then(helper.saveDoc)
}