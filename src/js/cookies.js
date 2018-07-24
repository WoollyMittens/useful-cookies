/*
	Source:
	van Creij, Maurice (2018). "cookies.js: A library of useful functions to ease working with cookies.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var cookies = {

	// calculates an expiration date for cookies
	expiration : function (days) {
		// return a date object in the future
		return new Date(
			new Date().getTime() + days * 24 * 60 * 60 * 1000
		);
	},

	// save a value into a cookie
	save : function (name, value, expires, path, domain, secure) {
		// formulate the cookie
		document.cookie = name + "=" + encodeURIComponent(value) +
			((expires) ? "; expires=" + expires.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	},

	// loads a value from a cookie
	load : function (name) {
		// return the clipped value from the cookie
		return (
			(document.cookie.indexOf(name + '=') > -1) ?
				decodeURIComponent(document.cookie.split(name + '=')[1].split(';')[0]) :
				null
		);
	},

	// clears the value from a cookie
	clear : function (name, path, domain) {
		// if the cookie exists
		if (this.load(name)) {
			// clear and expire it
			document.cookie = name + "=" +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	}

};

// return as a require.js module
if (typeof module !== 'undefined') {
	exports = module.exports = cookies;
}
