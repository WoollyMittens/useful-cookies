# useful.cookies.js: Cookies Library

A library of useful functions to ease working with cookies.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-cookies">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-cookies.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to control the script

### load

```javascript
value = useful.cookies.load(name);
```

Retrieves a value from a cookie.

**name : {string}** - Name of a parameter stored as a cookie.

**value : {string}** - Returned value of the named parameter stored as a cookie.

### save

```javascript
useful.cookies.save(name, value, expires, path, domain, secure);
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
useful.cookies.clear(name, path, domain);
```

Clears a name-value pair from a cookie.

**name : {string}** - Name of a parameter stored as a cookie.

**path : {string}** - URL path for which the cookie is valid.

**domain : {string}** - Domain for which the cookie is valid.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
