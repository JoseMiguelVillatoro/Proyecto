require('dotenv').config();

const app = require('./server');

const initDb = require('./database');



app.listen(app.get('port'),() => {
    console.log('Servidor esta en Marcha en el puerto: ',app.get('port'))
})
