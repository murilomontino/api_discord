"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }














exports. default = (DiscordAppBot) => {


	const getBotUsername = async () => {
		if(DiscordAppBot.user)
			return DiscordAppBot.user.username
	}

	const setBotUsername = async ({name}) => {
		if(DiscordAppBot.user)
			DiscordAppBot.user.setUsername(name)
	}
    
	const getBotAvatarURL = async () => {
		if(DiscordAppBot.user)
			return DiscordAppBot.user.avatarURL()
	}
    
	const setBotAvatarURL = async ({avatar}) => {
		if(DiscordAppBot.user)
			DiscordAppBot.user.setAvatar(avatar)
	}

	const setBotActivity = async ({name, url, type, shardID}) => {
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

