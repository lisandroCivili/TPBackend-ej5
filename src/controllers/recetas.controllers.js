import Receta from "../database/models/receta.js"



export const listarRecetas = async(req,res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar las recetas'
        })
    }
}

export const crearReceta = async(req, res)=>{
    try {

        const recetaNueva = new Receta(req.body)
        await recetaNueva.save()
        res.status(201).json({
            mensaje: 'Receta creada con exito'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al crear el receta'
        })
    }
}
export const obtenerReceta = async(req,res)=>{
    try {
        console.log(req.params.id);
        const recetaBuscada = await Receta.findById(req.params.id)
        if (!recetaBuscada) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningúna receta'
            })
        }
        res.status(200).json(recetaBuscada)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: 'Error al buscar las recetas'
        })
    }
}

export const editarReceta = async(req,res)=> {
    try {
        const recetaBuscada = await Receta.findById(req.params.id)
        if (!recetaBuscada) {
            return res.status(404).json({
                mensaje: 'El ID enviado no corresponde a ningún receta'
            })
        }
        await Receta.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'La receta fue editado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: 'Error al editar la receta'
        })
    }}

    export const borrarReceta = async(req,res)=> {
        try {
            const recetaBuscada = await Receta.findById(req.params.id)
            if (!recetaBuscada) {
                return res.status(404).json({
                    mensaje: 'El ID enviado no corresponde a ningún receta'
                })
            }
            await Receta.findByIdAndDelete(req.params.id)
            res.status(200).json({mensaje: 'La receta fue eliminada correctamente'})
        } catch (error) {
            console.error(error)
            res.status(500).json({
                mensaje: 'Error al eliminar el receta'
            })
        }}