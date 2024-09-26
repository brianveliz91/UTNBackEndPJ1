import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { randomUUID } from "node:crypto"
import { handleError } from "./utils/handleError.js"

const PATH_FILE_USER = process.env.PATH_FILE_USER;
const PATH_FILE_ERROR = process.env.PATH_FILE_ERROR;

const getUsers = (urlfile) => {
    try {
        if (!urlfile) {
            throw new Error("Access denied")
        }
        const exists = existsSync(PATH_FILE_USER);
        if (!exists) {
            writeFileSync(PATH_FILE_USER, JSON.stringify([]));
            return [];
        }
        const users = JSON.parse(readFileSync(PATH_FILE_USER));
        return users;
    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};


const getUserById = (id) => {
    try {

    } catch (error) {

    }
}



const addUser = (user) => {
    try {
    } catch (error) { }
}



/*const updateUser(userData) => {
    try{
    } catch (error) {}
}*/

const deleteUser = (id) => {
    try {
    } catch (error) { }
}

//export { getUsers, getUserById, addUser, updateUser, deleteUser };
export { getUsers, getUserById, addUser, deleteUser }

