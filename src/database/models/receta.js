import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        unique: true
    },
    cantidad:{
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    imagen:{
        type: String,
        required: true,
        validate:{
            validator: (dato)=>{
                const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/
                return pattern.test(dato)
            }
        }
    },
    categoria:{
        type: String,
        required: true,
        enum: ['Desayuno', 'Almuerzo', 'Cena', 'Postre']
    },
    descripcion_breve:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 50
    },
    descripcion_amplia:{
        type: String,
        required: true,
        minLength: 15,
        maxLength: 250
    }
})

const Receta = mongoose.model('receta', recetaSchema)
export default Receta