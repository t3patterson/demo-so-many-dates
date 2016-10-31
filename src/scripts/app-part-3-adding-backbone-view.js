const $ = require('jquery')
const Backbone = require('backbone')

const { DaterModel, DaterCollection } = require('./model-dater.js')

const MultiDaterView = require('./view-multi.js')

const AppRouter = Backbone.Router.extend({
	routes: {
		"profile/:id" : "showSingle",
		"" : "showMultiHome"
	},

	showSingle: function(bioId){
		document.querySelector('#container').innerHTML = `<h1>Showing the profile for: ${id}</h1>`
		


	},


	showMultiHome: function(){
		document.querySelector('#container').innerHTML = "<h1>Our eligible daters</h1>"
		let daterCollInstance = new DaterCollection()
		daterCollInstance.fetch().then(function(){

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

var UserModel = Backbone.Model.extend({})

var UserColl = Backbone.Collection.extend({
	model: UserModel,
	url: "https://api.myjson.com/bins/31m4i"
})

var collinst = new UserColl()
collinst.fetch().then(function(d){
	console.log('so cool:', collinst)
})
