
import Bot from '../botDiscord/bot'
import comunicationGetterSetter from './comunicationGetterSetter'
import comunicationGuild from './comunicationGuild'
import comunicationLoginLogout from './comunicationLoginLogout'

export default () => {

	const DiscordAppBot = new Bot()
	const comunicationGetSet = comunicationGetterSetter(DiscordAppBot)
	const comunicationLogin_out = comunicationLoginLogout(DiscordAppBot)
	const comunicationGUILD = comunicationGuild(DiscordAppBot)

	return {
		...comunicationLogin_out,
		...comunicationGetSet,
		...comunicationGUILD
	}
}

