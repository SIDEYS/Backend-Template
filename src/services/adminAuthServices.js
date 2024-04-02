import APIError, { HttpStatusCode } from "../exception/errorHandler.js"
import { compareData } from "../helpers/encryption/encryption.js"
import Admin from "../models/adminModel.js"
import { generateTokenService } from "./tokenServices.js"

//#region Admin Login Service
export const adminLoginService = async (email, password) => {
    try {

        //#region User Pipeline
        let userPipeline = [
            {
                $project: {
                    email: { $toLower: '$email' },
                    password: '$password',
                    name: '$name',
                    userRole:'$userRole'
                }
            },
            {
                $match: {
                    email: email
                }
            }
        ]
        //#endregion

        let result = await Admin.aggregate(userPipeline)
        if (result.length == 0) {
            throw new APIError("UNAUTHORIZED_REQUEST", HttpStatusCode.UNAUTHORIZED_REQUEST, true, 'This User Does Not Exist.');
        }

        let userDetails = result[0]

        let hashedPassword = userDetails.password

        let isPasswordMatched = await compareData(password, hashedPassword)

        if (isPasswordMatched) {

            // getting Token of User
            let tokenObj = await generateTokenService(userDetails._id, userDetails.userRole)

            return {
                token: tokenObj.token,
                expiresAt: tokenObj.expiresAt,
                userName: userDetails.name,
                userRole:userDetails.userRole
            }
        }
        else {
            throw new APIError("UNAUTHORIZED_REQUEST", HttpStatusCode.UNAUTHORIZED_REQUEST, true, 'Password Does not match.');
        }

    } catch (error) {
        throw new APIError(error.name, error.httpCode, error.isOperational, error.message);
    }
}
//#endregion