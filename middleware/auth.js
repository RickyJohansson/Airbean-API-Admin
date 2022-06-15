const apiKeys = [
    '34534tg34g43g',
    '34534gdfgthtrh',
    'tyj023934mgh',
    'mdfgn71203123',
    '9595959595959'
];

function auth(req, res, next) {
    const apiKey = req.headers['api-key'];

    if (apiKey && apiKeys.includes(apiKey)) {
        next();
    } else {
        const resObj = {
            error: 'You need an API-key'
        }
        res.json(resObj);
    }
}

module.exports = { auth }