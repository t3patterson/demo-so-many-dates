const Backbone = require('backbone')

const MultiDaterView = Backbone.View.extend({
	el: '#container',

	events: {
		"click .profile-card" : 'routeToSingle'
	},

	routeToSingle: function(evt){
		console.log(evt.currentTarget.id)
		//(2) unique-id picked up here in order to route to #profile/:id to fetch
		//    congressperson data
		window.location.hash = `profile/${evt.currentTarget.id}`
	},


	_buildHTMLTemplate: function(collData){
		//C & P'd from app.js
		console.log('inside _buildHTMLTemplate', collData)
		let largeHTMLStr = `<h2>So, so many...</h2>`
		largeHTMLStr += collData.models.map(function(modl){
			// (1) unique-id in `id` attribute so critical for routing
			return `<div class="profile-card" id='${modl.get('bioguide_id')}'>
						  <img src="http://flathash.com/${modl.get('bioguide_id')}">
						  <h5> ${modl.get('first_name')}</br>
								<small> + ${modl.get('state_name')} </small>
						  </h5>
				    </div>`
		}).join('')

		return largeHTMLStr
	},

	render: function(collectionData){
		this.el.innerHTML = this._buildHTMLTemplate(collectionData)
	}
})

module.exports = MultiDaterView
