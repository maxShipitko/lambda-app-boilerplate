// const appModule = require('./application/app-module');
exports.deps = {};

exports.deps.getParameters = async () => {
    const AWS = require('aws-sdk');
    const ssm = new AWS.SSM();
    const params = {
        Path: 'ssm-parameters-store-url',
        WithDecryption: true
    };

    return ssm.getParametersByPath(params)
        .promise()
        .then((result) => {
            return result;
        }, (error) => {
            return error;
        });
};

exports.deps.getHttps = async () => {
    return require('https');
};


function getResponse(config, data, error) {
    let consoleLevel = !!error ? 'error' : 'info';

    console[consoleLevel](consoleLevel, data);

    let statusCode = parseInt(config.HTTP_RESPONSE);

    if (error) {
        statusCode = 500;
    }

    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        statusDescription: '200 OK',
        isBase64Encoded: false
    };
}

function onFulfilled(config, result) {
    return getResponse(config, result);
}

function onRejected(config, error) {
    return getResponse(config, error, true);
}


exports.handler = async (event, context) => {
    let config = {};

    return (new Promise(async (resolve, reject) => {
        let parameters = await exports.deps.getParameters();
        if (!!parameters.error) {
            reject(parameters);
        }
        if (!parameters.Parameters) {
            return reject('Empty ssm parameters');
        }
        for (let i = 0; i < parameters.Parameters.length; i++) {
            const key = parameters.Parameters[i].Name.split('/').pop();
            config[key] = parameters.Parameters[i].Value;
        }

        let https, dependencies;
        try {
            https = await exports.deps.getHttps();
            dependencies = {https};
        } catch (e) {
            return reject(e);
        }

        let response = '';
        try {
        	// call applications modules
        } catch (e) {
            return reject(e);
        }

        resolve(response);
    })).then(onFulfilled.bind(null, config), onRejected.bind(null, config));
};