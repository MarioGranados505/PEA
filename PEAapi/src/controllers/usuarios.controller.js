import { pool } from "../db.js"

export const getUsuarios = async (req, res) => {
    const [rows] = await pool.query('Select * FROM usuarios')
    res.json(rows)
}

export const createUsuario = async(req, res) => {
    const {IdUsuario, Nombre, Apellido, Correo, Password} = req.body
    const [rows] = await pool.query('INSERT INTO usuarios (IdUsuario, Nombre, Apellido, Correo, Password) VALUES (?, ?, ?, ?, ?)',[IdUsuario, Nombre, Apellido, Correo, Password])
    res.send({ rows })
}

export const updateUsuario = (req, res) => res.send('actualizando usuario')

export const deleteUsuarios = (req, res) => res.send('eliminando  usuario')