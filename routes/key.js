const { Router } = require('express');

const router = Router();

const apiKeys = [
    '34534tg34g43g',
    '34534gdfgthtrh',
    'tyj023934mgh',
    'mdfgn71203123',
    '9595959595959'
];

router.get('/', (req, res) => {
    const index = Math.floor(Math.random() * apiKeys.length);
    const apiKey = apiKeys[index];

    const resObj = {
        key: apiKey
    }

    res.json(resObj);
});

module.exports = router