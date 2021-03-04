import Bot from '../botDiscord/bot'


export interface guild{
	icon: string | null,
	id: string,
	name: string,
	description: string | null,
	memberCount: number | string,
	owner: string | undefined
}


export default (DiscordAppBot:Bot) => {
    

	const getGuilds = async () => {
		const ArrayGuilds:Array<guild> = []
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

