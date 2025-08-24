/**
 * ibmFlickr.js 
 * @author Homero Cavazos <homerocavazos@gmail.com>
 * @description Grabs IBM's Flickr images by specific user id.
 */

function ibmFlickr(args){
	// Defaults in case no cofigurations have been added.
	this.APIKey 	= 'a5e95177da353f58113fd60296e1d250';
	this.USER_ID 	= '132365033@N08';
	
	
	if( typeof(args)==='undefined' ) {
	}else{
		var config = {
			apikey: 	( args.apikey 	? this.APIKey 	= args.apikey  	: this.APIKey ),
			user_id: 	( args.user_id 	? this.USER_ID 	= args.user_id  : this.USER_ID )
		};
		var options = {
			obj_array: 	( !args.obj_array ? alert('You need to specify where to save your results.') : args.obj_array )
		};
	}
	
	
	$.getJSON( 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key='+this.APIKey+'&user_id='+this.USER_ID+'&format=json&nojsoncallback=1', function( data ) {
	
	  $.each( data.photos.photo, function( key, val ) {
	  	
	  	// Build image URL
	    var img = 'https://farm' + val.farm + '.staticflickr.com/' + val.server + '/' + val.id + '_' + val.secret + '.jpg';
	    // Create photo object
	    var photo = { title: val.title, image: img };
	    // Save to IBMFLICKR object
	   options.obj_array.push(photo);

	  });
	  
	});

}

