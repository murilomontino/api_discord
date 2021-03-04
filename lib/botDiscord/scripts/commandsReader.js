"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _commands = require('../commands'); var _commands2 = _interopRequireDefault(_commands);

exports. default = (prefix) => {
	const commands  = {}
	_commands2.default.forEach(  script=> {
		const name_commands = prefix+script.name
		commands[name_commands] = script.execute
	})
		  
	return commands
}

