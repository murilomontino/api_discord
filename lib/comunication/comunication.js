"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _bot = require('../botDiscord/bot'); var _bot2 = _interopRequireDefault(_bot);
var _comunicationGetterSetter = require('./comunicationGetterSetter'); var _comunicationGetterSetter2 = _interopRequireDefault(_comunicationGetterSetter);
var _comunicationGuild = require('./comunicationGuild'); var _comunicationGuild2 = _interopRequireDefault(_comunicationGuild);
var _comunicationLoginLogout = require('./comunicationLoginLogout'); var _comunicationLoginLogout2 = _interopRequireDefault(_comunicationLoginLogout);











exports. default = () => {

	const DiscordAppBot = new (0, _bot2.default)()
	const comunicationGetSet = _comunicationGetterSetter2.default.call(void 0, DiscordAppBot)
	const comunicationLogin_out = _comunicationLoginLogout2.default.call(void 0, DiscordAppBot)
	const comunicationGUILD = _comunicationGuild2.default.call(void 0, DiscordAppBot)

	return {
		...comunicationGetSet,
		...comunicationLogin_out,
		...comunicationGUILD
	}
}

