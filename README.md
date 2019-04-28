# cookies.js: Cookies Library

A library of useful functions to ease working with cookies.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-cookies">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/cookies.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/cookies.js'
], function(cookies) {
	...
});
```

Or import into an MVC framework.

```js
var cookies = require('js/cookies.js');
``

## How to control the script

### load

```javascript
value = cookies.load(name);
```

Retrieves a value from a cookie.

**name : {string}** - Name of a parameter stored as a cookie.

**value : {string}** - Returned value of the named parameter stored as a cookie.

### save

```javascript
cookies.save(name, value, expires, path, domain, secure);
```

Saves a name-value pair to a cookie.

**name : {string}** - Name of a parameter stored as a cookie.

**value : {string}** - Value to be stored as a cookie.

**expires : {object}** - A date object setting the expiration date of the cookie.

**path : {string}** - URL path for which the cookie is valid.

**domain : {string}** - Domain for which the cookie is valid.

**secure : {boolean}** - Specifies if the cookie is supposed to be secure.

### clear

```javascript
cookies.clear(name, path, domain);
```

Clears a name-value pair from a cookie.

**name : {string}** - Name of a parameter stored as a cookie.

**path : {string}** - URL path for which the cookie is valid.

**domain : {string}** - Domain for which the cookie is valid.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
