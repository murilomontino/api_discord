import allCommands from '../commands'

export default (prefix:string) => {
	const commands: {[key: string]: any}  = {}
	allCommands.forEach(  script=> {
		const name_commands:string = prefix+script.name
		commands[name_commands] = script.execute
	})
		  
	return commands
}

