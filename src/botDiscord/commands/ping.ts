import { Message, Client } from 'discord.js'

export default {
	name: 'ping',
	description: 'Ping!',
	execute (client:Client, {message}:{message:Message})  {
		message.channel.send('Pong.')
	},
}
