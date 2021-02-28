import Bot from '../botDiscord/bot'

export default (DiscordAppBot:Bot) => {


	const loginWithToken = async ({ token }) => {
		try {
			await DiscordAppBot.login(token)
			await DiscordAppBot.user.setStatus('online')
			return 'Token Válido'

		} catch (error) {
			return 'Token Inválido'
		}

	}

	const logoutBot = async () => { await DiscordAppBot.logout() }

	
	return {
		loginWithToken,
		logoutBot,
	}
}


