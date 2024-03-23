import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers.js";
import { check } from "express-validator";

const router = Router();
router
  .route("/recetas")
  .get(listarRecetas)
  .post(
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
        })
    ],
    crearReceta
  );
router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(borrarReceta);

export default router;
