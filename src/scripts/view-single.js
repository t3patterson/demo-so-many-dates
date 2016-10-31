const Backbone = require('backbone')

const SingleDaterView = Backbone.View.extend({
	el: '#container',


	_buildHTMLTemplate: function(collData){
		//C & P'd from app.js
		let singleDaterModel = collData.models[0]
		return `<div class="single-profile">
					  <div class="main">
						 <img src="http://flathash.com/${ singleDaterModel.get('bioguide_id')}" />
						 <h4> &hearts; ${ singleDaterModel.get('district') }   </h4>
						 <button class="add-to-favs" data-bio="${ singleDaterModel.get('bioguide_id')}">+</button>
					  </div>
						 <div class="details">
						 <h3> ${singleDaterModel.get('first_name') } </h3>
						 <h6>D.O.B:</h6>
						 <p>  ${ singleDaterModel.get('birthday') } </p>
						 <h6>Address:</h6>
						 <p>   ${ singleDaterModel.get('office') }   </p>
						 <h6>Originally From:</h6>
						 <p>   ${ singleDaterModel.get('state_name') } </p>
						 <h6>Member Since:</h6>
						 <p>   ${ singleDaterModel.get('term_start') }   </p>
						 <h6>Get in Touch:</h6>
						 <p>   ${ singleDaterModel.get('oc_email') }   <br/>|  ${ singleDaterModel.get('phone')} |</p>
						 <h6>[R]omance or [D]ating</h6>
						 <p>  ${ singleDaterModel.get('party') } </p>
					 </div>
				 </div>`
	},

	render: function(collectionData){
		this.el.innerHTML = this._buildHTMLTemplate(collectionData)
	}
})

module.exports = SingleDaterView
