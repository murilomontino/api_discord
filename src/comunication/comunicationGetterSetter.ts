import Bot from '../botDiscord/bot'

export default (DiscordAppBot:Bot) => {


	const getBotUsername = () => DiscordAppBot.user.username

	const setBotUsername =({name}) => DiscordAppBot.user.setUsername(name)
    
	const getBotAvatarURL = ()=> DiscordAppBot.user.avatarURL()
    
	const setBotAvatarURL = ({avatar}) => DiscordAppBot.user.setAvatar(avatar)

	const setBotActivity = ({name, url, type, shardID}) => DiscordAppBot.user.setActivity(name, {url, type, shardID})

	const getBotStatus = async () => {
		const {status} = await DiscordAppBot.user.presence
		return status    
	}

	return {
		getBotUsername,
		getBotStatus,
		setBotUsername,
		getBotAvatarURL,
		setBotAvatarURL,
		setBotActivity,
        
	}
}

