import allCommands from '../commands'

export default (prefix:string) => {
	const commands = {}
	allCommands.forEach(  script=> commands[prefix+script.name] = script.execute)  
	return commands
}

