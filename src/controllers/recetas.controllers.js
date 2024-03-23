import Receta from "../database/models/receta.js"

export const listarRecetas = (req,res)=>{
    console.log('pido datos')
    res.send('aqui si funciona')
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