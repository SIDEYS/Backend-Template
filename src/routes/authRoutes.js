import express from 'express'
import { adminLoginController } from '../controllers/adminAuthController.js'
import { adminLoginValidations } from '../middlewares/validators/adminLoginValidations.js'

const router = express.Router()

router.post('/adminlogin',[adminLoginValidations], adminLoginController)

export default router