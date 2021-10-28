const middy = require('middy')
const { jsonBodyParser, httpErrorHandler, cors } = require('middy/middlewares')   

const middify = (handler) => 
  {
    const middleware = middy(handler)
    middleware
      .use(jsonBodyParser())
      .use(cors({
        origin: '*', headers: 'Origin, X-Requested-With, Content-Type, Accept,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token', credentials: true , methods: true
      })) 
      .use(httpErrorHandler())  
 
    return middleware;
  } 
  
module.exports = middify 