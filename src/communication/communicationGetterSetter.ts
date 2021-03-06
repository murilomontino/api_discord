import Bot from '../botDiscord'

type statusType = 'PLAYING' | 'STREAMING' | 'LISTENING' | 
					'WATCHING' | 'CUSTOM_STATUS' | 'COMPETING' | undefined

interface Options{
	name:string,
	avatar:string 
	url:string,
	type: number | statusType,
	shardID: number | readonly number[]
}

export {Options}

const getBotUsername = async (DiscordAppBot:Bot) => {
	if(DiscordAppBot.user){
		return {username: DiscordAppBot.user.username}
	}
		
}
	
const setBotUsername = async (DiscordAppBot:Bot,{name}:Options) => {
	if(DiscordAppBot.user)
		DiscordAppBot.user.setUsername(name)
}
		
const getBotAvatarURL = async (DiscordAppBot:Bot) => {
	if(DiscordAppBot.user)
		return {avatar: DiscordAppBot.user.avatarURL()}
}
		
const setBotAvatarURL = async (DiscordAppBot:Bot, {avatar}:Options) => {
	if(DiscordAppBot.user)
		DiscordAppBot.user.setAvatar(avatar)
}
	
const setBotActivity = async (DiscordAppBot:Bot, {name, url, type, shardID}:Options) => {
	if(DiscordAppBot.user){
		const response = await DiscordAppBot.user.setActivity(name, {url, type, shardID})
		return response
	}
}
			
const getBotStatus = async (DiscordAppBot:Bot) => {
	if(DiscordAppBot.user)
		return {status: DiscordAppBot.user.presence.status}    
}
	
export default {
	
	getBotUsername,
	getBotStatus,
	getBotAvatarURL,
	setBotAvatarURL,
	setBotActivity,
	setBotUsername
        
	
}

