import { Client } from 'discord.js'
import commandsReader from './scripts/commandsReader'
import configuration from '../comunication/config.json'
import date_message from '../utils/date_message'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Comand = any
type AllTypes = any

class Bot extends Client {
	
	commands : Comand

	constructor(...args: AllTypes) {
		super(...args)
		this.commands = commandsReader(configuration.prefix)

		this.on('ready', async () => {
			console.log(`${this.user.tag}`)
		})

		this.on('message', async msg => {

			const messageFormated =  `${date_message(msg)} ${msg.author.username}: ${msg.content}`
			console.log(messageFormated)
                        
			if (this.user.presence.status === 'online') {

				if (!msg.author.bot) {

					const args = msg.content.split(' ')
					if (this.commands[args[0]]) {
						await this.commands[args[0]](this, msg)
					}

				}
			}

		})
	
	}

	
	async logout(){
		this.token = null
		setTimeout(async () => await this.user.setStatus('invisible'), 1000)
		console.log('Bot offline')
	}

}

export default Bot