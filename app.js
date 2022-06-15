const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json())


const accountRouter = require('./routes/account')
app.use('/api/account', accountRouter)
const menuRouter = require('./routes/menu')
app.use('/api/menu', menuRouter)
const orderRouter = require('./routes/order')
app.use('/api/order', orderRouter)
const keyRouter = require('./routes/key')
app.use('/api/key', keyRouter)

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});