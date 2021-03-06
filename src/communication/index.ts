import communicationGetterSetter from './communicationGetterSetter'
import communicationGuild from './communicationGuild'
import communicationLoginLogout from './communicationLoginLogout'

import { Presence } from 'discord.js'
import { guild } from './communicationGuild'

type nulls = undefined | null | void
type promises_discord = Promise<'online' | 'idle' | 'dnd' | 'invisible' | 'offline' | 'Token Válido'|'Token Inválido'> 


interface RESPONSE {
	[key:string]: string | Presence | nulls | promises_discord | number | guild[] 
}


export {RESPONSE}


export default {
	...communicationGetterSetter,
	...communicationLoginLogout,
	...communicationGuild
}