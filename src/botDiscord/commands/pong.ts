import { Message } from 'discord.js'

export default {
	name: 'pong',
	description: 'Pong!',
	execute(message:Message) {
		message.channel.send('Ping.')
	},
}
