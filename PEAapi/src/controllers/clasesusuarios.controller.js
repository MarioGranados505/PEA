import { json } from "express"
import { pool } from "../db.js"

export const getClasesusuarios = async (req, res) => {
    const [rows] = await pool.query('Select * FROM clasesusuarios')
    res.json(rows)
}

export const getClasesusuario = async (req, res) => {
    const [rows] = await pool.query('Select * FROM clasesusuarios WHERE IdRegistro = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    res.json(rows[0])
}

export const createClasesusario = async(req, res) => {
    const {IdRegistro, IdClase, IdUsuario} = req.body
    const [rows] = await pool.query('INSERT INTO clasesusuarios (IdRegistro, IdClase, IdUsuario) VALUES (?, ?, ?)',[IdRegistro, IdClase, IdUsuario])
    res.send({ rows })
}

export const deleteClaseusuario = async (req, res) => {

    const [result] = await pool.query('DELETE FROM clasesusuarios where IdRegistro = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}

export const updateClaseusuario = async (req, res) => {
    const{ id } = req.params
    const{ IdClase, IdUsuario} = req.body
    
    const [result] = await pool.query(
        'UPDATE clasesusuarios SET IdClase = IFNULL(?, IdClase), IdUsuario = IFNULL(?, IdUsuario) Where IdRegistro = ?',[IdClase ,IdUsuario, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM clasesusuarios WHERE IdRegistro = ?', [id])

    res.json(rows[0])
}

