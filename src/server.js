
const exphbs = require ('express-handlebars');
const express = require ('express');
const path = require ('node:path/win32');

const app= express();

//Configuraciones 
app.set('port',process.env.PORT || 4000); 
app.set('views',path.join(__dirname, 'views'));


app.engine('.hbs',exphbs.engine({
        defaultlayout:'main',
        layoutsDir: path.join(app.get('views'),'layouts'),
        partialsDir: path.join(app.get('views'),'partials'),
        extname:'.hbs'     
}));

app.set('view engine','.hbs')

// Middlewares 
app.use(express.urlencoded({extended:false}));



// Global variables 



//Routes 
app.use(require('./routes/index.routes'));


//Static Files 
app.use(express.static(path.join(__dirname,'public')))


module.exports= app;

