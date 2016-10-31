const Backbone = require('backbone')

var AppRouter = Backbone.Router.extend({
	routes: {
		"profile/:id" : "showSingle",
		"" : "showMultiHome"
	},

	showSingle: function(id){
		document.querySelector('#container').innerHTML = `<h1>Showing the profile for: ${id}</h1>`

	},


	showMultiHome: function(){

		document.querySelector('#container').innerHTML = "<h1>Our eligible daters</h1>"
	},

	initialize: function(){
		console.log('app routing!')
		Backbone.history.start()
	}
})

var app = new AppRouter()
