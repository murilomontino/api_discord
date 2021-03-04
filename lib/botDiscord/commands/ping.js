"use strict";Object.defineProperty(exports, "__esModule", {value: true});

exports. default = {
	name: 'ping',
	description: 'Ping!',
	execute (client, {message})  {
		message.channel.send('Pong.')
	},
}
