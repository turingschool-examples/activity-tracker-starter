const chai = require('chai');
const expect = chai.expect;

const Friends = require('../src/friends');

describe('Friends', function() {
    it('should be a function', function() {
        expect(Friends).to.be.a('function');
    })
    })