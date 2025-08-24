
// Create the main object for the feed.
var IBMFLICKR 		= {};

// Save the response
IBMFLICKR.photos 	= [];


// Instantiate a feed object
var ibmfeed = new ibmFlickr(
{
	apikey: 'a5e95177da353f58113fd60296e1d250',
	user_id: '132365033@N08',
	obj_array: IBMFLICKR.photos
});


// Using VUEjs http://vuejs.org/ to display the response. 
var vm = new Vue({

	el: '#ibm',

	data: {

		search: '',
		sortKey: '',
		reverse: false,

		photos: IBMFLICKR.photos

	},

	methods: {
		sortBy: function(sortKey){
			this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
			this.sortKey = sortKey;
		}
	}


});
