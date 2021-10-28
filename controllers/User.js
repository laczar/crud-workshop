const Users = require('../models').Users
const middify = require('../helpers/middify')
const { responses } = require('../helpers/responses')

const create = async (event, context, callback) => { 
  const { email, name } = event.body
 
  let data

  try { 
    data = await Users.create({  name: name, email : email })
  } catch (e) {
    console.log('ERROR', e)
  }

  return callback(null, responses(data, 200) )
}

const update = async (event, context, callback) => { 
  const { email, name } = event.body
  const { id } = event.pathParameters;
 
  try { 
    data = await Users.update({  name: name, email : email },{
      where: {
        id: id
      }
    });
  } catch (e) {
    console.log('ERROR', e)
  }

  return callback(null, responses(data, 200) )
}

const del = async (event, context, callback) => {
  const { id } = event.pathParameters;
  let data = {}

  try { 
    data = await Users.destroy({
      where: {
        id: id
      }
    });
  } catch (e) {
    console.log('ERROR', e)
  }

  return callback(null, responses(data, 200) )
}

const get = async (event, context, callback) => { 
  const { id } = event.pathParameters;
  let data = {};
  try { 
    data = await Users.findOne({
      where : {
        id : id
      }
    })
  } catch (e) {
    console.log('ERROR', e)
  }
  return callback(null, responses(data, 200) )
}

const list = async (event, context, callback) => {  
  let data = {};
  try { 
    data = await Users.findAll()
  } catch (e) {
    console.log('ERROR', e)
  }
  return callback(null, responses(data, 200) )
}

module.exports.create = middify(create); 
module.exports.update = middify(update); 
module.exports.delete = middify(del); 
module.exports.get = middify(get); 
module.exports.list = middify(list); 