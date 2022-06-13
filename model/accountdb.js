const nedb = require('nedb-promise');
const database = new nedb({ filename: 'account.db', autoload: true });

async function createAccount(account) {
    const result = await database.insert(account)
    return result;
}

async function checkIfAccountsExists(credentials) {

    const result = await database.find({
        $or: [{ username: credentials.username },
        { email: credentials.email }]
    });

    return result;

}

async function compareCredentials(credentials) {
    const result = await database.find({
        $and: [{ username: credentials.username },
        { password: credentials.password }]
    });

    return result;
}

async function getOrder(accountName, order) {

    await database.update({ username: accountName },
        { $push: { orders: order } })
};

async function showOrderHistory(accountName) {
    const result = await database.find({ username: accountName })

    if(result.length > 0) {
        const orderHistory = setExpiredStatus(result[0].orders);

        let refinedOrderHistory = orderHistory.filter(order => order.expired === true );
        
        return refinedOrderHistory;
    }
}

async function showActiveOrder(accountName) {
    const result = await database.find({ username: accountName })

    if(result.length > 0) {
        const orderHistory = setExpiredStatus(result[0].orders);

        let activeOrder = orderHistory.filter(order => order.expired === false );
        return activeOrder;
    }
}


function setExpiredStatus(orderHistory) {
    const date = new Date();
    
    for(let order of orderHistory) {
        if(date > order.timeETA) {
            order.expired = true;
        } else {
            order.expired = false;
        }
    }
    return orderHistory;
}

module.exports = {
    createAccount, compareCredentials, checkIfAccountsExists,
    getOrder, showOrderHistory, showActiveOrder
};