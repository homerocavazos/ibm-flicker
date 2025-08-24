# Flickr feed challenge


Web-app that fetches IBM's Flickr images based on specific user.

## Technology

- HTML
- JavaScript
- LESS
- Twitter Bootstrap
- JQuery
- Vuejs
- NPM
- Gulpjs


## Files to review

### ibmFlickr.js
A reusable custom object that fetches the images from Flickr by the user's id. 

    app/js/ibmFlickr.js
    
 
### app.js
This file instantiates a ibmFlickr object with options of API key and user id. The instantiation of this object saves the response to IBMFLICKR.photos. Vuejs will use this object's data to display on the page.

	app/js/app.js
	

