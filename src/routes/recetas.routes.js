import { Router } from "express";
import {
  borrarReceta,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerReceta,
} from "../controllers/recetas.controllers.js";
import validacionRecetas from "../../helpers/validacionRecetas.js";


const router = Router();
router
  .route("/recetas")
  .get(listarRecetas)
  .post([validacionRecetas],crearReceta);
router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put([validacionRecetas],editarReceta)
  .delete(borrarReceta);

export default router;
