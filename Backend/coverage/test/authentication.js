var expect = require("chai").expect;
var request = require("request");

describe("Test if login and logout validators are working", function () {

    describe("Should check the headers and session", function () {

        var url = "http://localhost:3005/auth/login";

        it("returns status as 404", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});