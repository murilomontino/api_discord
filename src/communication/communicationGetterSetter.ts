import Bot from '../botDiscord/bot'

type statusType = "PLAYING" | "STREAMING" | "LISTENING" | 
					"WATCHING" | "CUSTOM_STATUS" | "COMPETING" | undefined

interface Options{
	name:string,
	avatar:string 
	url:string,
	type: number | statusType,
	shardID: number | readonly number[]
}

export {Options}

export default (DiscordAppBot:Bot) => {


	const getBotUsername = async () => {
		if(DiscordAppBot.user)
			return DiscordAppBot.user.username
	}

	const setBotUsername = async ({name}:Options) => {
		if(DiscordAppBot.user)
			DiscordAppBot.user.setUsername(name)
	}
    
	const getBotAvatarURL = async () => {
		if(DiscordAppBot.user)
			return DiscordAppBot.user.avatarURL()
	}
    
	const setBotAvatarURL = async ({avatar}:Options) => {
		if(DiscordAppBot.user)
			DiscordAppBot.user.setAvatar(avatar)
	}

	const setBotActivity = async ({name, url, type, shardID}:Options) => {
		if(DiscordAppBot.user){
			const response = await DiscordAppBot.user.setActivity(name, {url, type, shardID})
			return response
		}
	}
		
	const getBotStatus = async () => {
		if(DiscordAppBot.user)
			return DiscordAppBot.user.presence.status    
	}

	return {
		getBotUsername,
		getBotStatus,
		getBotAvatarURL,
		setBotAvatarURL,
		setBotActivity,
		setBotUsername
        
	}
}

