const testConfig = require('../resources/config');

module.exports = getParameters = () => {
    return {
        Parameters: [
            {
                Name: 'ENVIRONMENT',
                Value: testConfig.environment
            },
            {
                Name: 'HTTP_RESPONSE',
                Value: testConfig.statusCode,
            }
        ]
    };
};