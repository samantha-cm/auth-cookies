// routes/auth.js

const express           = require("express")
const router            = express.Router()

const authController    = require("./../controllers/authController")


// GET - Mostrar el formulario de creación del usuario
// http://localhost:3000/auth/signup
router.get("/signup", authController.createUser)


// POST - Enviar datos del formulario al servidor
// http://localhost:3000/auth/signup
router.post("/signup", authController.createUserForm)


// GET - Crear un formulario para iniciar sesión
// http://localhost:3000/auth/login
router.get("/login", authController.loginUser)


// POST - Enviar datos del formulario de iniciar sesión al servidor
// http://localhost:3000/auth/login
router.post("/login", authController.loginUserForm)


module.exports = router

