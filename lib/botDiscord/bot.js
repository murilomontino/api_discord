"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _discordjs = require('discord.js');
var _commandsReader = require('./scripts/commandsReader'); var _commandsReader2 = _interopRequireDefault(_commandsReader);
var _configjson = require('../comunication/config.json'); var _configjson2 = _interopRequireDefault(_configjson);
var _date_message = require('../utils/date_message'); var _date_message2 = _interopRequireDefault(_date_message);


class Bot extends _discordjs.Client {
	
	

	constructor(...args) {
		super(...args)
		this.commands = _commandsReader2.default.call(void 0, _configjson2.default.prefix)

		this.on('ready', async () => {
			if(this.user != null) {
				console.log(`${this.user.tag}`)
			}

		})

		this.on('message', async (msg) => {

			const messageFormated =  `${_date_message2.default.call(void 0, msg)} ${msg.author.username}: ${msg.content}`
			console.log(messageFormated)
                        
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

exports. default = Bot