# useful.cookies.js: Cookies Library

A library of useful functions to ease working with cookies.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-cookies">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/cookies.min.js"></script>
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

## Prerequisites

To concatenate and minify the script yourself, the following prerequisites are required:
+ https://github.com/WoollyMittens/useful-polyfills

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
