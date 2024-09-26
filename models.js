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
        if (!id) {
            throw new Error("ID is missing");
        }
        const users = getUsers(PATH_FILE_USER);
        const user = users.find(user => user.id === id);

        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};



const addUser = (user) => {
    try {
        const { name, lastName, email, password } = user;

        if (!name || !lastName || !email || !password) {
            throw new Error("Missing data");
        }

        const hashedPassword = createHash("sha256").update(password).digest("hex");

        const newUser = {
            id: randomUUID(),
            name,
            lastName,
            email,
            password: hashedPassword,
            isLoggedIn: false,
        };

        const users = getUsers(PATH_FILE_USER);

        if (users.find(u => u.email === email)) {
            throw new Error("User with this email already exists");
        };
        users.push(newUser);
        writeFileSync(PATH_FILE_USER, JSON.stringify(users));
        return newUser;

    } catch (error) {
        const objError = handleError(error, PATH_FILE_ERROR);
        return objError;
    }
};



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

