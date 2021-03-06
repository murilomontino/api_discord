/* eslint-disable no-mixed-spaces-and-tabs */
import Bot from './botDiscord'
import communication from './communication'
import typeCommunication from './communication/communication.interface'

interface Manager {
    [id:string]: Bot
}

class ManagerBot {
    manager : Manager = {}
    commands  : typeCommunication= communication
    
    setManager = (id:string, Bot:Bot):boolean => {
    	this.manager[id] = Bot
    	return true
    }
    
    getBot = (id:string):Bot =>{
    	return this.manager[id]
    }
    
    create_bot =  async (token:string) => {
    	const DiscordAppBot = new Bot()
    	const response = await this.commands.loginWithToken(DiscordAppBot, {token})
    	if (response === 'Token Válido') {
    		const id = (await DiscordAppBot.fetchApplication()).id
    		this.setManager(id, DiscordAppBot)
    		return {
    			validate: 'Token Válido',
			 	id
    		}
    	}else{
    		return {
    			validate:'Token Inválido'
    		}
    	}
    	
    }

}

export default ManagerBot