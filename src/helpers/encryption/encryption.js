// Importing module
import bcrypt from 'bcryptjs'

export const encryptData = async (data) => {
    try {
        var salt = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(data, salt);
        return hash
    } catch (error) {
        console.log(error)
    }
}

export const compareData = async (plainData, hashedData) => {
    try {
        const result = bcrypt.compare(plainData, hashedData)
        return result
    } catch (error) {
        console.log(error)
    }
}

