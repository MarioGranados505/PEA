export interface listacurso{
    idcurso?:number,
    nombre?:string,
    maestro?:string,
    des?:string,
    imagen?:string
}

export interface unirsecurso{
    id?:number,
    idcurso?:number,
    idusuario?:number,
}