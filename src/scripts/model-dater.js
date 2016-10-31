const Backbone = require('backbone')


const DaterModel = Backbone.Model.extend({
	url: ""
})

const DaterCollection = Backbone.Collection.extend({
	model: DaterModel,
	parse: function(rawJSONRes){
		return rawJSONRes.results
	},
	url: "",

	initialize: function(qryStParams){
		let addedQryStr = ''
		if(typeof qryStParams !== 'undefined') { addedQryStr = `&${qryStParams}` }
		this.url = `https://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141${addedQryStr}`
	}
})

module.exports = {
	DaterCollection : DaterCollection,
	DaterModel : DaterModel
}
