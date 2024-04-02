import { adminLoginService } from "../services/adminAuthServices.js"

export const adminLoginController = async (req, res, next) => {
    try {
        let { email, password } = req.body

        let result = await adminLoginService(email.toLowerCase(), password)

        return res.status(200).json({ msg: 'Success', result })
    } catch (error) {
        next(error);
    }
}