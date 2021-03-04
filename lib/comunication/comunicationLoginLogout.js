"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports. default = (DiscordAppBot) => {


	const loginWithToken = async ({ token }) => {
		try {
			await DiscordAppBot.login(token)
			if(DiscordAppBot.user)
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


