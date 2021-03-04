import communication, { RESPONSE } from './communication'
import cors from 'cors'
import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'


const API = async () => {
	const APP = express()
	const COMMUNICATION = communication()
	const port = 3000

	APP.use(cors())
	APP.use(bodyParser.urlencoded({ extended: false }))
	APP.use(bodyParser.json())

	APP.post('/discord', async (req: Request, rep: Response) => {
		// TRY CATCH DEVE SER COLOCADO NAS FUNÇÕES
		const { title, ...body }: { title: string } = req.body
		try {
			console.log(rep)

			// @ts-ignore
			const response: RESPONSE = await COMMUNICATION[title]({ ...body })
			rep.send({ result: response })


		} catch (error) {
			// error comando inválido
		}

	})

	console.log(port)

	APP.listen(port, () => {
		console.log('====================================')
		console.log('===========SERVIDOR ATIVO===========')
		console.log('====================================')
	})


}


API()


