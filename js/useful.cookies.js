/*
	Source:
	van Creij, Maurice (2012). "useful.cookies.js: A library of useful functions to ease working with cookies.", version 20121126, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

(function (useful) {

	// Invoke strict mode
	"use strict";

	// private functions
	var cookies = cookies || {};

	// calculates an expiration date for cookies
	cookies.expiration = function (days) {
		// return a date object in the future
		return new Date(
			new Date().getTime() + days * 24 * 60 * 60 * 1000
		);
	};

	// save a value into a cookie
	cookies.save = function (name, value, expires, path, domain, secure) {
		// formulate the cookie
		document.cookie = name + "=" + encodeURIComponent(value) +
			((expires) ? "; expires=" + expires.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	};

	// loads a value from a cookie
	cookies.load = function (name) {
		// return the clipped value from the cookie
		return (
			(document.cookie.indexOf(name + '=') > -1) ?
				decodeURIComponent(document.cookie.split(name + '=')[1].split(';')[0]) :
				null
		);
	};

	// clears the value from a cookie
	cookies.clear = function (name, path, domain) {
		// if the cookie exists
		if (cookies.load(name)) {
			// clear and expire it
			document.cookie = name + "=" +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	};

	// public functions
	useful.cookies = useful.cookies || {};
	useful.cookies.expiration = cookies.expiration;
	useful.cookies.save = cookies.save;
	useful.cookies.load = cookies.load;
	useful.cookies.clear = cookies.clear;

	/*
		useful.polyfills.js
	*/

	// private functions
	var polyfills = polyfills || {};

	// allow console.log
	polyfills.consoleLog = function () {
		if (!window.console) {
			window.console = {};
			window.console.log = function () {
				// if the reporting panel doesn't exist
				var a, b, messages = '', reportPanel = document.getElementById('reportPanel');
				if (!reportPanel) {
					// create the panel
					reportPanel = document.createElement('DIV');
					reportPanel.id = 'reportPanel';
					reportPanel.style.background = '#fff none';
					reportPanel.style.border = 'solid 1px #000';
					reportPanel.style.color = '#000';
					reportPanel.style.fontSize = '12px';
					reportPanel.style.padding = '10px';
					reportPanel.style.position = (navigator.userAgent.indexOf('MSIE 6') > -1) ? 'absolute' : 'fixed';
					reportPanel.style.right = '10px';
					reportPanel.style.bottom = '10px';
					reportPanel.style.width = '180px';
					reportPanel.style.height = '320px';
					reportPanel.style.overflow = 'auto';
					reportPanel.style.zIndex = '100000';
					reportPanel.innerHTML = '&nbsp;';
					// store a copy of this node in the move buffer
					document.body.appendChild(reportPanel);
				}
				// truncate the queue
				var reportString = (reportPanel.innerHTML.length < 1000) ? reportPanel.innerHTML : reportPanel.innerHTML.substring(0, 800);
				// process the arguments
				for (a = 0, b = arguments.length; a < b; a += 1) {
					messages += arguments[a] + '<br/>';
				}
				// output the queue to the panel
				reportPanel.innerHTML = messages + reportString;
			};
		}
	};

	// for immediate use
	polyfills.consoleLog();

}(window.useful = window.useful || {}));
