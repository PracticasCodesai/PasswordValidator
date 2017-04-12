'use strict';

let should = require('chai').should();
let assert = require('chai').assert;
let expect = require('chai').expect;

let PasswordValidator = require('../src/PasswordValidator');

describe('PasswordValidator Should', function() {

    var passwordValidator;

    beforeEach(function() {
        passwordValidator = new PasswordValidator();
    });

    it('the password is validate', function() {
        expect(passwordValidator.validate('1234567aB#')).to.be.true;
    });

    it('the password not contains 1 letter uppercase', function () {
        expect(passwordValidator.validate('1234567ab#')).to.be.false;
    });

});