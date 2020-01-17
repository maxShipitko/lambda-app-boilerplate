# lambda-app-boilerplate
Start your next lambda project in seconds

## Code Structure

    ├── lambda-app
    │   ├── application
    │   │   └── .gitkeep
    │   ├── infrastructure
    │   │   └── .gitkeep
    │   ├── index.js
    │   ├── package-lock.json
    │   └── package.json
    │
    ├── tests
    │   ├── resources
    │   │   ├── config.json
    │   │   └── get-parameters.js
    │   └── unit
    │       └── lambda-app-test.js
    │
    ├── .gitignore
    ├── Jenkinsfile.example
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── template.yaml.example

Description
- `lambda-app`                - **folder of one specific lambda function**
- `lambda-app/application`    - folder with modules of app
- `lambda-app/infrastructure` - folder with custom infrastructure modules
- `test`                      - **folder with tests for all lambda functions**
- `test/resources`            - folder with resources used in tests
- `test/unit`                 - folder with unnit tests

> To set local env parameters for tests, see:
> /tests/resources/config.json
> /tests/resources/get-parameters.js
