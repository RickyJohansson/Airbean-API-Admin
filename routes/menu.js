const { getMenu, addProduct, deleteProduct } = require('../model/menudb')
const { Router } = require('express');

const { auth } = require('../middleware/auth');

const router = Router();

router.post('/addproduct', auth, async (req, res) => {
    const menuList = await addProduct(req.body);

    const resObj = {
        success: true,
        addedItems: menuList
    }

    res.json(resObj);
});

router.delete('/:id', auth, async (req, res) => {
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




module.exports = router;