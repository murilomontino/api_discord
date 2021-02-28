import comunication from './comunication/comunication'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const API = async ()=> {
	const APP = express()
	const COMUNICATION =  comunication()
	const port = process.env.PORT || 3000
	
	APP.use(cors())
	APP.use(bodyParser.urlencoded({ extended: false }))
	APP.use(bodyParser.json())
	
	console.log(port)
	
	APP.post('/discord', async (request, resp) => {
		// TRY CATCH DEVE SER COLOCADO NAS FUNÇÔES E NÂO AQUI
		const {title, ...body} = request.body
		const response = await COMUNICATION[title]({...body})
		console.log(body)
		resp.send({result: response})
	
	})
	
	APP.listen(port, ( ) => {
		console.log('====================================')
		console.log('SERVIDOR ATIVO')
		console.log('====================================')
	})
	
}


API()
   

