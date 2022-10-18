import { json } from "express"
import { pool } from "../db.js"

export const getClases = async (req, res) => {
    const [rows] = await pool.query('Select * FROM clases')
    res.json(rows)
}

/*

export const getClase = async (req, res) => {
    const [rows] = await pool.query('Select * FROM clases WHERE IdRegistro = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    res.json(rows[0])
}

export const createUsuario = async(req, res) => {
    const {IdClase, IdUser, Alta, NombreClase, DescClase} = req.body
    const [rows] = await pool.query('INSERT INTO clases () VALUES (?, ?, ?, ?, ?)',[, , , ,])
    res.send({ rows })
}

export const deleteUsuario = async (req, res) => {

    const [result] = await pool.query('DELETE FROM usuarios where IdUsuario = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}

export const updateUsuario = async (req, res) => {
    const{ id } = req.params
    const{ Nombre, Apellido, Correo, Password} = req.body
    
    const [result] = await pool.query(
        'UPDATE usuarios SET Nombre = IFNULL(?, Nombre), Apellido = IFNULL(?, Apellido), Correo = IFNULL(?, Correo), Password = IFNULL(?, Password) Where IdUsuario = ?',[Nombre, Apellido, Correo, Password, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE IdUsuario = ?', [id])

    res.json(rows[0])
}

*/