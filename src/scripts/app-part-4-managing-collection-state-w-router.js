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

		// ***********************************
		//(2) if this.datersColl doesnt exists then fetch
		//    else find the collection's index of the bioId
		//    that is currently in the hash

		if (typeof this.datersColl === 'undefined'){
			daterCollOfOneInstance.fetch().then(function(){
				console.log(daterCollOfOneInstance)
				singleDaterViewInstance.render(daterCollOfOneInstance, 0)
			})
		} else {
			// ***********************************
			//(3a) FIND the index of the datersCollection's model
			//     that corresponds to the at the window.location.hash
		   var selectedIndex = this.datersColl.findIndex(function(modl, i){
				return modl.get('bioguide_id') === bioId
			})

			console.log(selectedIndex)
			// ***********************************
			//(3b) pass:
			//      - the dater collection
			//      - the collections.model-index of the bioguide_id
			//
			//     to the view's render method
			//      (check out the view-single.js  .buildHTML() function
			//			 to see how the html string is built )

  			singleDaterViewInstance.render(this.datersColl, selectedIndex)
		}
	},


	showMultiHome: function(){
		let self = this
		let daterCollInstance = new DaterCollection()
		daterCollInstance.fetch().then(function(){
			// ***********************************
			//(1) Put datersColl on the router
			self.datersColl = daterCollInstance
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
