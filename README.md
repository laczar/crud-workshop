## Development requirements:
+ Serverless:
• Node JS
• NPM
• npm install -g serverless

## AWS authentication

+ Serverless will authenticate with AWS automatically using your environment-sourced AWS credentials.

+ Check for ~/.aws/config and ~/.aws/credentials files

+ If you use an AWS config file, make sure you set this environment variable to instruct the Node JS AWS SDK (used internally by Serverless) to load the config file:

            $ export AWS_SDK_LOAD_CONFIG=1

## Deployment requirements:
+ AWS account (full permissions are ideal)
+ AWS services we will use
• Lambda
• API Gateway
• RDS MySQL
To create yor own public RDS, watch this [video](https://www.youtube.com/watch?v=Ng_zi11N4_c) 

## Tech

- NodeJS 14.x
- MysqL 5.7 (RDS)
- Sequelize
- Serverless Framework 

## Installation

```sh
git clone https://github.com/thelaczar/crud-workshop
cd crud-workshop
npm i
cp .env.sample .env
(modify env with your RDS settings)
yarn start OR npm start
```

FEEL FREE TO MODIFY AND PLAY AROUND