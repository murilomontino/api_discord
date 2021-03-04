"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// const {Client} = require('discord.js')
// const guilds = Client.prototype.guilds.cache
// guilds.forEach( guild => {
// 	console.log('------------------------')
// 	console.log(guild.iconURL())
// 	console.log(`ID: ${guild.id}`)
// 	console.log(`Name: ${guild.name}`)
// 	console.log(`Description: ${guild.description}`)
// 	console.log(`memberCount: ${guild.memberCount}`)
// 	guild.owner.user.username
    
// })













exports. default = (DiscordAppBot) => {
    

	const getGuilds = async () => {
		const ArrayGuilds = []
		const guilds = DiscordAppBot.guilds.cache
        
        
		guilds.forEach( async guild => {
			
			ArrayGuilds.push({
				icon: guild.iconURL(),
				id: guild.id,
				name: guild.name,
				description: guild.description,
				memberCount: guild.memberCount,
				owner: guild.owner? guild.owner.user.username:undefined

			})
    
            
		})

		return ArrayGuilds
	}
    
	return {
		getGuilds
	}
}

