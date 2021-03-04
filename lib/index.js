"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _comunication = require('./comunication/comunication'); var _comunication2 = _interopRequireDefault(_comunication);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);


const API = async ()=> {
	const APP = _express2.default.call(void 0, )
	const COMUNICATION =  _comunication2.default.call(void 0, )
	const port = process.env.PORT || 3000
	
	APP.use(_cors2.default.call(void 0, ))
	APP.use(_bodyparser2.default.urlencoded({ extended: false }))
	APP.use(_bodyparser2.default.json())
	
	console.log(port)
	
	APP.post('/discord', async (req, rep) => {
		// TRY CATCH DEVE SER COLOCADO NAS FUNÇÔES E NÂO AQUI
		const {title, ...body}  = req.body
		try {
			// @ts-ignore
			const response = await COMUNICATION[title]({...body})
			rep.send({result: response})
			console.log(response)

		} catch (error) {
			// error comando inválido
		}
	
	})
	
	await COMUNICATION.loginWithToken({
		token: 'NzE1NjgyMDcxOTQyNTI5MTM0.XtAw3g.R2namfs1RsASUihufSOtWHr6E4Y'})

	APP.listen(port, ( ) => {
		console.log('====================================')
		console.log('===========SERVIDOR ATIVO===========')
		console.log('====================================')
	})
	
}


API()
   

