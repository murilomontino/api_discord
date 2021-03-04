
import Bot from '../botDiscord/bot'
import communicationGetterSetter from './communicationGetterSetter'
import communicationGuild from './communicationGuild'
import communicationLoginLogout from './communicationLoginLogout'

import { Presence } from "discord.js";
import { guild } from './communicationGuild'

type RESPONSE = (
	string | undefined | 
	Promise<"online" | "idle" | "dnd" | "invisible" | "offline" | 'Token Válido'|'Token Inválido'> |
	guild[] | Presence |  null | void )

export {RESPONSE}

export default () => {

	const DiscordAppBot = new Bot()
	const communicationGetSet = communicationGetterSetter(DiscordAppBot)
	const communicationLogin_out = communicationLoginLogout(DiscordAppBot)
	const communicationGUILD = communicationGuild(DiscordAppBot)

	return {
		...communicationGetSet,
		...communicationLogin_out,
		...communicationGUILD
	}
}

