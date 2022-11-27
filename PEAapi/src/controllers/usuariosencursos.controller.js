import { json } from "express"
import { pool } from "../db.js"

export const getusuarioscursos = async (req, res) => {
    const [rows] = await pool.query('Select * FROM usuariosencursos')
    res.json(rows)
}

export const getUsuarioCursos = async (req, res) =>{
    const [rows] = await pool.query('SELECT listacursos.idcurso, listacursos.nombre, listacursos.maestro, listacursos.des, listacursos.imagen FROM listacursos, usuariosencursos WHERE listacursos.idcurso = usuariosencursos.idcurso and usuariosencursos.idusuario = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    res.json(rows)
}

export const createUsuariocurso = async(req, res) => {
    const {idcurso, idusuario} = req.body
    const [rows] = await pool.query('INSERT INTO usuariosencursos (idcurso, idusuario) VALUES (?, ?)',[idcurso, idusuario])
    res.send({ rows })
}

export const deleteUsuariocurso = async (req, res) => {

    const [result] = await pool.query('DELETE FROM usuariosencursos where id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}