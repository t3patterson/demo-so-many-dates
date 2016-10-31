const $ = require('jquery')
const Backbone = require('backbone')

const { DaterModel, DaterCollection } = require('./model-dater.js')

const MultiDaterView = require('./view-multi.js')
const SingleDaterView = require('./view-single.js')


const AppRouter = Backbone.Router.extend({
	routes: {
		"profile/:id" : "showSingle",
		"" : "showMultiHome"
	},

	showSingle: function(bioId){
		let daterCollOfOneInstance = new DaterCollection(`bioguide_id=${bioId}`)
		let singleDaterViewInstance = new SingleDaterView()

		if (typeof this.datersColl === 'undefined'){
			daterCollOfOneInstance.fetch().then(function(){
				console.log(daterCollOfOneInstance)
				// document.querySelector('#container').innerHTML = `<h1>Showing the profile for: ${daterCollOfOneInstance.models[0].get('first_name')}</h1>`
				singleDaterViewInstance.render(daterCollOfOneInstance, 0)
			})
		} else {
			var selectedIndex = this.datersColl.findIndex(function(modl, i){
				// console.log(modl)
				return modl.get('bioguide_id') === bioId
			})

			console.log(selectedIndex)
			singleDaterViewInstance.render(this.datersColl, selectedIndex)
		}
	},


	showMultiHome: function(){
		let self = this
		let daterCollInstance = new DaterCollection()
		daterCollInstance.fetch().then(function(){
			self.datersColl = daterCollInstance
			// let namesStr = daterCollInstance.models.map(function(modl){
			// 	return `<h3>${modl.get('first_name')} ${modl.get('last_name')}</h3>`
			// }).join('')
			let multiViewInstance = new MultiDaterView()

			multiViewInstance.render(daterCollInstance)




		})
	},

	initialize: function(){
		console.log('app routing!')
		Backbone.history.start()
	}
})

var app = new AppRouter()
