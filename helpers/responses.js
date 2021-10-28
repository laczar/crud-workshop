 function responses(data, statusCode){ 

    try {
  
      const response =  { 
        statusCode: statusCode, 
        body: JSON.stringify({
          status: "success", 
          data: data
        })
    
      }
     
      return  response
  
    } catch (error) { 
      throw error;
    }
    
  }
  

module.exports.responses  = responses
  