import { createInventoryTransactionDetail } from '~/server/controller/inventorytransactions';

export default eventHandler(async (event) => {
  try {
    const method = event._method;
    const { ...filterParams } = getQuery(event);

    switch(method.toUpperCase()){
      case 'GET':
        // const list = await getInventoryTransactionDetails(id, filterParams);
        // return { body: list, message: '' }
        break
      case 'POST':
        const data = await readBody(event);
        const newDetail = await createInventoryTransactionDetail(data)
        return { body: newDetail, message: '' }
      default:
        setResponseStatus(event, 405);
        return { error: 'Method Not Allowed' };
    }
  } catch (error) {
    throw new Error(`Error fetching data from table: ${error.message}`);
  }
});