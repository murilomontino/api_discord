import { Message } from 'discord.js'

export default {
	name: 'ping',
	description: 'Ping!',
	execute(message:Message) {
		message.channel.send('Pong.')
	},
}
