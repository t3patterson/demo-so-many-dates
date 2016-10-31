const Backbone = require('backbone')

const SingleDaterView = Backbone.View.extend({
	el: '#container',
	//
	events: {
		"click .arrow" : "navigateToDater"
	},

	navigateToDater: function(evt){

		window.location.hash = `#profile/${evt.target.dataset.bioid}`
	},

	_buildHTMLTemplate: function(collData, atIndex){
		console.log(selectedIndex)
		// ***********************************
		//(4) logic for handling

		let singleDaterModel = collData.models[atIndex]
		let prevModel = collData.models[atIndex - 1 ]
		let nextModel = collData.models[atIndex + 1 ]

		let leftArrowHTML = ''
		let rightArrowHTML = ''

		if (prevModel){
			leftArrowHTML = `<a class="left-arrow arrow" data-bioid="${prevModel.get('bioguide_id')}">&lt;</a>`
		}
		if (nextModel){
			rightArrowHTML = `<a class="right-arrow arrow" data-bioid="${nextModel.get('bioguide_id')}">&gt;</a>`
		}

		return  `
					${leftArrowHTML}
					${rightArrowHTML}

					<div class="single-profile">

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

	render: function(collectionData, i){
		this.el.innerHTML = this._buildHTMLTemplate(collectionData, i)
	}
})

module.exports = SingleDaterView
