import { getProductLines } from "~/server/controller/product";

export default eventHandler(async (event) => {
  try {
    const method = event._method;
    switch(method.toUpperCase()){
      case 'GET':
        const list = await getProductLines();
        return { body: list, message: '' }
      default:
        setResponseStatus(event, 405);
        return { error: 'Method Not Allowed' };
    }
  } catch (error) {
    throw new Error(`Error fetching data from table: ${error.message}`);
  }
});