import { check } from "express-validator";
import resultadoValidaciones from "./resultadoValidaciones.js";

const validacionRecetas = 
[
  check("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({
        min:3, 
        max:30
    })
    .withMessage('El nombre debe tener entre 3 y 30 caracteres'),
  check('cantidad')
    .notEmpty()
    .withMessage('La cantidad es obligatoria')
    .isNumeric()
    .withMessage('La cantidad debe ser un numero')
    .custom((value)=>{
        if (value>= 1 && value <=100) {
            return true
        }else{
            throw new Error ('La cantidad debe ser entre 1 y 100')
        }
    }),
  check('imagen')
    .notEmpty()
    .withMessage('La imagen es obligatoria')
    .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/),
  check('categoria')
    .notEmpty()
    .withMessage('La categoria es obligatoria'),
  check('descripcion_breve')
    .notEmpty()
    .withMessage('La descripcion breve es obligatoria')
    .isLength({
        min: 15,
        max: 50
    })
    .withMessage('La descripcion breve debe tener entre 15 y 50 caracteres'),
  check('descripcion_amplia')
    .notEmpty()
    .withMessage('La descripcion amplia es obligatoria')
    .isLength({
        min: 15,
        max: 250
    })
    .withMessage('La descripcion breve debe tener entre 15 y 250 caracteres'), 

(req,res,next)=>resultadoValidaciones(req,res,next)
]
export default validacionRecetas