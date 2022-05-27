
const {Schema,model}=requiere ('mongoose')

const NombredelEsquema = new Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}, {   
    timestamps:true
   }

)

module.exports=model('NombreDelModelo',NombredelEsquema);
