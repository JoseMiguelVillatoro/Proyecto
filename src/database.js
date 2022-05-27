const moongose = require('mongoose');


const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGODB_DATABASE,NOTES_APP_MONGODB_IP} =  process.env
const MONGODB_URI='mongodb://${NOTES_APP_MONGODB_IP}/${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}';
const MONGODB_URI2='mongodb://127.0.0.1:27017/SpareParts'


moongose.connect(MONGODB_URI2,{
    keepAlive:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
    
})
    .then(db => console.log('La base de datos se ha conectado AL FIN!!!!'))
    .catch(err => console.log('La base de datos ha fallado por una vez mas \n\n\n',err));


