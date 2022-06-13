const res = require('express/lib/response');
const nedb = require('nedb-promise');
const database = new nedb({ filename: 'orders.db', autoload: true });

async function createOrder(order) {
    const id = order.orderId
    const result = await database.find({ "order.orderId": id })
    if (result.length > 0) {
        await database.insert({ order })
        return result
    } else {
        const result = await database.insert({ order })
        return [result]
    }
}

module.exports = { createOrder }