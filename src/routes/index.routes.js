const { Router } = require('express');

const router = Router();


const {Renderindex,RenderAbout} = require('../controllers/index.controlers')

router.get('/',Renderindex)

router.get('/about',RenderAbout)


module.exports=router;