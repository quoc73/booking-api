import express from "express";
import {login,register} from "../controller/auth.js";
const router = express.Router();

//router.get("/register",register)
router.post("/register",register)
router.post("/login",login)
export default router