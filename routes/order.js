const { getOrder } = require('../model/accountdb')
const { getMenu } = require('../model/menudb')
const { Router } = require('express');
const { createOrder } = require('../model/orderdb')

const router = Router();

router.get('/', async (req, res) => {
    const accountName = req.headers.username;
    const chosenItems = req.body.cart;
    const orderNmbr = randomOrderNmbr();
    const date = new Date();
    
    const orderDate = new Date(date);
    
    const ETA = randomETAnmbr();
    const ETAdateUnix = date.setMinutes( date.getMinutes() + ETA );
    const ETAdate = new Date(ETAdateUnix);
    
    const resObj = {
        success: false
    }
    
    console.log("chosenItems: ", chosenItems);
    
    if (chosenItems.length > 0) {

        const order = {
            orderItems: {
                items: chosenItems,
                amount: req.body.cart.amount
            },
            orderId: orderNmbr,
            orderIsFor: accountName,
            createdAt: orderDate,
            timeETA: ETAdate,
            expired: false, 
            totalAmount: 100,
        }

        const result = await createOrder(order)

        if (result[0].length <= 0) {
            resObj.message = 'No items in cart'
        } else {
            resObj.message = 'Order placed'
            await getOrder(accountName, order);
        }
        resObj.success = true;
        resObj.order = result;

    }
    else {
        resObj.message = 'error 420'
    }
    res.json(resObj)
});

function randomOrderNmbr() {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const thirdNum = Math.floor(Math.random() * 100);
    const randomNmbr = `${firstNum}${secondNum}${thirdNum}`;
    return randomNmbr;
};

function randomETAnmbr() {
    const randomMinute = Math.floor((Math.random() * 15)+1);
    return randomMinute;
}

module.exports = router;