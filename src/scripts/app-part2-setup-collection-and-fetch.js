
const Backbone = require('backbone')

const { DaterModel, DaterCollection } = require('./model-dater.js')


const AppRouter = Backbone.Router.extend({
	routes: {
		"profile/:id" : "showSingle",
		"" : "showMultiHome"
	},

	showSingle: function(id){
		document.querySelector('#container').innerHTML = `<h1>Showing the profile for: ${id}</h1>`

	},


	showMultiHome: function(){
		document.querySelector('#container').innerHTML = "<h1>Our eligible daters</h1>"
		let daterCollInstance = new DaterCollection()
		daterCollInstance.fetch().then(function(){

			let namesStr = daterCollInstance.models.map(function(modl){
				return `<h3>${modl.get('first_name')} ${modl.get('last_name')}</h3>`
			}).join('')

			document.querySelector('#container').innerHTML = namesStr



		})
	},

	initialize: function(){
		console.log('app routing!')
		Backbone.history.start()
	}
})

var app = new AppRouter()
