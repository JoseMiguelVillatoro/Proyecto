const {Schema,model}=require('mongoose');

const bcrypt = require('bcryptjs');
const { basicURLParse } = require('whatwg-url');

const UserSchema = new Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true}
    },
    {timestamps:true}
    )

module.exports = model ('UserModelo',UserSchema)


UserSchema.methods.encryptPassWord = async password  => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};

UserSchema.methods.matchpassword =  function  (password)  {
    return await bcrypt.compare(password,this.password)
};




