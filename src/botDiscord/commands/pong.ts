import { Message, Client } from 'discord.js'

export default {
	name: 'pong',
	description: 'Pong!',
	execute(client:Client, {message}:{message:Message}) {
		message.channel.send('Ping.')
	},
}
