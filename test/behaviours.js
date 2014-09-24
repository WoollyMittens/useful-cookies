var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    usefulCookies = require('../src/js/useful-cookies.js'),
    path = 'http://local.woollymittens.nl/useful-cookies/';

describe('Expected behaviours of "useful-cookies"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should save and retrieve a value', function(done){

        client
            .url(path)
            .execute(function () {

                useful.cookies.save('foo', 'bar');
                return useful.cookies.load('foo');

            }, function (err, result) {

                assert(
                    result.value === 'bar'
                );

            })
            .call(done);

    });

    it('should delete a previously stored value', function(done){

        client
            .url(path)
            .execute(function () {

                useful.cookies.save('foo', 'bar');
                var A = useful.cookies.load('foo');
                useful.cookies.clear('foo');
                var B = useful.cookies.load('foo');
                return [A, B];

            }, function (err, result) {

                assert(
                    result.value[0] !== result.value[1] &&
                    result.value[1] === null
                );

            })
            .call(done);

    });

    it('should return a date in the future', function(done){

        var A = usefulCookies.expiration(7),
            B = new Date();

        assert(A.getTime() - B.getTime() === 604800000);
        done();

    });

    after(function(done) {
        client.end(done);
    });
});
