import { getProductionUsers } from '~/server/controller/jobs';

export default eventHandler(async (event) => {
  try {
    const method = event._method;
    
    switch(method.toUpperCase()){
      case 'GET':
        const users = await getProductionUsers()
        return { body: users, message: '' }
      default:
        setResponseStatus(event, 405);
        return { error: 'Method Not Allowed' };
    }
  } catch (error) {
    throw new Error(`Error fetching data from table: ${error.message}`);
  }
});