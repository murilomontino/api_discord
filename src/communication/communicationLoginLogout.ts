import Bot from '../botDiscord'

const loginWithToken = async (DiscordAppBot:Bot, { token }:{token:string}) => {
	try {
		await DiscordAppBot.login(token)
		if(DiscordAppBot.user)
			await DiscordAppBot.user.setStatus('online')
		return 'Token Válido'

	} catch (error) {
		return 'Token Inválido'
	}

}

const logoutBot = async (DiscordAppBot:Bot) => { await DiscordAppBot.logout() }

export default {
	
	loginWithToken,	
	logoutBot,
	
}


