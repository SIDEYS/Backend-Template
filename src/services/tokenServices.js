import jwt from "jsonwebtoken"
import APIError from "../exception/errorHandler.js";

//#region Generate JWT Token
export const generateTokenService = async (userId, userRole) => {
    try {

        //generate new token
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        let generatedTime = new Date().getTime()
        let tokenExpiryTime = generatedTime + 24 * 60 * 60 * 1000   // Token Expires In 1 Day

        let data = {
            userId: userId,
            userRole:userRole,
            tokenExpiryTime: tokenExpiryTime
        }

        const token = jwt.sign(data, jwtSecretKey);

        return {
            token: token,
            expiresAt: tokenExpiryTime
        }

    } catch (error) {
        throw new APIError(error.name, error.httpCode, error.isOperational, error.message);
    }
}
//#endregion