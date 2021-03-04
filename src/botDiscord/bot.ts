import { Client, Message } from 'discord.js'
import commandsReader from './scripts/commandsReader'
import configuration from '../communication/config.json'
import date_message from '../utils/date_message'


class Bot extends Client {
	
	commands : {[key:string]:any}

	constructor(...args:any[]) {
		super(...args)
		this.commands = commandsReader(configuration.prefix)

		this.on('ready', async () => {
			if(this.user != null) {
				console.log(`${this.user.tag}`)
			}

		})

		this.on('message', async (msg: Message) => {

			const messageFormatted =  `${date_message(msg)} ${msg.author.username}: ${msg.content}`
			console.log(messageFormatted)
                        
			if (this.user && this.user.presence.status === 'online') {

				if (!msg.author.bot) {

					const args = msg.content.split(' ')
					if (this.commands[args[0]]) {
						await this.commands[args[0]](this, {message: msg})
						
					}

				}
			}

		})
	
	}

	
	async logout(){
		this.token = null
		setTimeout(async () => {
			if(this.user != null){
				await this.user.setStatus('invisible')
			}
		}, 1000)
		console.log('Bot offline')
	}

}

export default Bot