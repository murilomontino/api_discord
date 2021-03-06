import { Options } from './communicationGetterSetter'
import {  guild } from './communicationGuild'
import Bot from '../botDiscord'
import { Presence, PresenceStatus } from 'discord.js'

interface typeCommunication{
    getGuilds: (DiscordAppBot: Bot) => Promise<{Guild: guild[]}>,
    getBotUsername: (DiscordAppBot: Bot) => Promise<{username: string} | undefined>,
    getBotStatus: (DiscordAppBot: Bot) => Promise<{status: PresenceStatus} | undefined>,
    getBotAvatarURL: (DiscordAppBot: Bot) => Promise<{ avatar: string | null; } | undefined>,
    setBotAvatarURL: (DiscordAppBot: Bot, { avatar }: Options) => Promise<void>,
    setBotActivity: (DiscordAppBot: Bot, { name, url, type, shardID }: Options) => Promise<Presence|undefined>,
    setBotUsername: (DiscordAppBot: Bot, { name }: Options) => Promise<void>,
    loginWithToken: (DiscordAppBot: Bot, { token }: {token: string}) => Promise<'Token Válido' | 'Token Inválido'>,
	logoutBot: (DiscordAppBot: Bot) => Promise<void>,
    [key:string]:any,
}

export default typeCommunication



