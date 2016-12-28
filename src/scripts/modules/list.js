var dateUtil = require("../common/utils/dateUtil.js");

function say(msg){
	console.log("module/list.js--->" + dateUtil.getDate());
	return 'say list ' + msg;
}

module.exports = say;