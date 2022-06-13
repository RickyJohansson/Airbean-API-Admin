const nedb = require('nedb-promise');
const database = new nedb({ filename: 'menu.db', autoload: true });

async function getMenu() {
    const result = await database.find({})
    if (result.length > 0) {
        return result;
    }
    else {
        const menuList = require('../menu.json')
        const menuItem = await database.insert(menuList)
        return [menuItem];
    }
}

async function addProduct(newProduct) {
    const result = await database.update({}, { $push: { menu: newProduct } });
    return result;
}

async function deleteProduct(productId) {
    const menuList = await database.update({}, { $pull: { menu: { id: Number(productId) } } });
    return menuList;
}

module.exports = { getMenu, addProduct, deleteProduct }