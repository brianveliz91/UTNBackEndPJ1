import {existsSync, readFileSync, writeFileSync} from "node:fs"
import { randomUUID } from "node:crypto"
//averiguar que importar de NODE para realizar el hash del pass
//averiguar como "activar" la lectura de las variables de entorno del archivo .env (dotenv)
import {handleError} from "./utils/handleError.js"

//1- recuperar variables de entorno
//2- declarar los metodos

const userPath = path.join("./data/user.json")

const getUsers =() => {
    try {
        } catch (error) {}
}

//addUser recibe un objeto con toda la data para el nuevo usuario
//valida que esten los datos minimos para añadir un nuevo usuario
//valida que el nombre sea un string
//valida que el apellido sea un string
//valida que el email sea un string y que no 

const addUser = (user) => {
    try { 
    } catch (error) {}
}

//todos los datos del usuario seleccionado se podrian modificar menos el ID
//si se modifica la pass deberia ser nuevamente hasheada
//si se modifica el email, validad que este no exista

const updateUser (userData) => {
    try{
    } catch (error) {}
}

const deleteUser = (id) => {
    try { 
    } catch (error) {}
}

export { getUsers, getUserById, addUser, updateUser, deleteUser };


