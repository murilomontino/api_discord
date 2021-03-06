import { RESPONSE } from './communication'
import cors from 'cors'
import express, { Request, Response } from 'express'
import ManagerBot from './manager_bot'


interface Options {
	id: string,
	title:string,
	[key:string]:string|number|undefined
}

const API = async () => {
	const APP = express()
	
	let port: string|number
	if ( process.env.PORT) {
		port = process.env.PORT
	} else {
		port = 3000
	}
	
	const managerBot = new ManagerBot()

	APP.use(cors())
	APP.use(express.urlencoded({ extended: false }))
	APP.use(express.json())

	APP.post('/loginWithToken', async (req: Request, rep: Response) => {
		const { token }: {token:string} = req.body
		const response = await managerBot.create_bot(token)
		rep.send(response)
		
	})

	APP.post('/discord', async (req: Request, rep: Response) => {
		// TRY CATCH DEVE SER COLOCADO NAS FUNÇÕES
		const { title, id, ...body }: Options = req.body
		try {
			
			
			const bot = managerBot.getBot(id)
			const response: RESPONSE = await managerBot.commands[title](bot, {body})
			rep.send(response)


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


