import express from "express";
import attraction from "../model/attraction.js";
import { createError } from "../ultis/error.js";
import {countAttractionByname, createAttraction, deleteAttraction, getAttraction, getallAttraction, updateAttraction } from "../controller/attraction.js";
const router = express.Router();

// Demo lệnh create
router.post("/", createAttraction);

// Demo lệnh update
router.put("/:id",updateAttraction);

// Demo lệnh delete
router.delete("/:id",deleteAttraction);

// Demo lệnh get
router.get("/find/:id",getAttraction);
router.get("/countAttractionByname",countAttractionByname);
router.get("/countByType",getAttraction);
//demo lệnh get all
router.get("/",getallAttraction);

export default router