const { getMenu, addProduct, deleteProduct } = require('../model/menudb')
const { Router } = require('express');

const router = Router();

const apiKeys = [
    '9234032895hf7347hf444',
    '7465845hyv23834bt85g',
    'ah4uh45j4jjjj4444',
    'lo43k454bfnb43gj4g',
    '8880888088888088880',
    '8j7h6g5f4d3s2a1',
    '0m9n8b7v6c5x4z32'
];

router.get('/', async (req, res) => {
    const menuList = await getMenu();

    const resObj = {
        success: false
    }
    if (menuList.length > 0) {
        resObj.success = true;
        resObj.order = menuList;

    }
    else {
        resObj.message = 'error 420'
    }
    res.json(resObj)
});


router.post('/addproduct', async (req, res) => {
    const menuList = await addProduct(req.body);

    const resObj = {
        success: true,
        addedItems: menuList
    }

    res.json(resObj);
});

router.delete('/:id', async (req, res) => {
    const productId = req.params.id;
    const menuList = await getMenu();
    console.log('menulist:', menuList);
    console.log(menuList[0].menu);

    const resObj = {
        success: false
    }

    for(let i=1; i < menuList[0].menu.length; i++) {

        if (productId == menuList[0].menu[i].id) {

            await deleteProduct(productId);

            resObj.success = true;
            resObj.removedItem = menuList[0].menu[i];

        }
    }

    res.json(resObj);

});




module.exports = router;