var dateUtil = require('../common/utils/dateUtil.js');

function Detail(){};

Detail.prototype = {
	constructor:Detail,
	say:function(msg){
		console.log('module/detail.js--->' + dateUtil.getDate());
		return 'show detail ' + msg;
	}
}

module.exports = Detail;