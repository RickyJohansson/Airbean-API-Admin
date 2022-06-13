const { getMenu, addProduct, deleteProduct } = require('../model/menudb')
const { Router } = require('express');

const router = Router();

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
        menu: menuList
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
        // issue: productID !== i while remove
        if (productId == menuList[0].menu[i].id) {

            await deleteProduct(productId);

            resObj.success = true;
            resObj.removedItem = menuList[0].menu[i];

            // We want to reset the ids in the menu accordingly
            menuList[0].menu.map((res, index) => {
                res.id = index;
            });

        } else {

            resObj.message = 'error'
        }
    }

    res.json(resObj);

});




module.exports = router;