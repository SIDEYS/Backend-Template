import { check } from "express-validator"
import { resultChecker } from "./resultChecker.js"

const adminLoginFields = [
    check('email', 'Email field is empty.')
        .exists(),
    check('email', 'Invalid Email')
        .isEmail(),
    check('password', 'Password should be minimum of 8 characters.')
        .isLength({ min: 8 })
]

export const adminLoginValidations = [adminLoginFields, resultChecker]