const indexCtrl = {};

indexCtrl.Renderindex = (req,res) => {
    res.render('index');
};


indexCtrl.RenderAbout= (req,res) => {
    res.render('about');
};


module.exports=indexCtrl;