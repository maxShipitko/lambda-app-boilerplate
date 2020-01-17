const nock = require('nock')
const chai = require('chai');
const sinon = require('sinon');
const deepEqual = require('deep-equal')
const expect = chai.expect;

const app = require('../../lambda-app');
const testConfig = require('../resources/config');
const getParameters = require('../resources/get-parameters');


describe('Lambda apps tests', function () {
    beforeEach('mock ssm params', () => {
        app.deps.getParameters = getParameters;
    });

    beforeEach('mock dependencies', () => {
        if (!testConfig.mockExternalCalls) {
            return;
        }
        nock.cleanAll();
    });

    it('Call test', async () => {
        const result = await app.handler(null, null);
        expect(result.statusCode).to.equal(200);
    });
});