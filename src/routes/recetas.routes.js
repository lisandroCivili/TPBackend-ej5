import { Router } from "express";
import { listarRecetas } from "../controllers/recetas.controllers.js";

const router = Router()
router.route('/nuevo/receta').get(listarRecetas)

export default router