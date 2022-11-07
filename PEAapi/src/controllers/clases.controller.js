import { json } from "express"
import { pool } from "../db.js"

export const getClases = async (req, res) => {
    const [rows] = await pool.query('Select * FROM clases')
    res.json(rows)
}

export const getClase = async (req, res) => {
    const [rows] = await pool.query('Select * FROM clases WHERE IdClases = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    res.json(rows[0])
}

export const createClase = async(req, res) => {
    const {IdClases, IdUser, Alta, NombreClase, DescClase} = req.body
    const [rows] = await pool.query('INSERT INTO clases (IdClases, IdUser, Alta, NombreClase, DescClase) VALUES (?, ?, ?, ?, ?)',[IdClases, IdUser, Alta, NombreClase, DescClase])
    res.send({ rows })
}

export const deleteClase = async (req, res) => {

    const [result] = await pool.query('DELETE FROM clases where IdClases = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}

export const updateClase = async (req, res) => {
    const{ id } = req.params
    const{ IdUser, Alta, NombreClase, DescClase} = req.body
    
    const [result] = await pool.query(
        'UPDATE clase SET IdUser = IFNULL(?, IdUser), Alta = IFNULL(?, Alta), NombreClase = IFNULL(?, NombreClase), DescClase = IFNULL(?, DescClase) Where IdClases = ?',[IdUser, Alta, NombreClase, DescClase, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM clases WHERE IdClases = ?', [id])

    res.json(rows[0])
}

