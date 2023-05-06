import express from "express";
import detailed from "../model/detailed.js";
import { createError } from "../ultis/error.js";
import { createdetailed, deletedetailed, getdetailed, getalldetailed, updatedetailed } from "../controller/detailed.js";

const router = express.Router();

// Demo lệnh create
router.post("/", createdetailed);

// Demo lệnh update
router.put("/:id",updatedetailed);

// Demo lệnh delete
router.delete("/:id",deletedetailed);

// Demo lệnh get
router.get("/:id",getdetailed);
//demo lệnh get all
router.get("/",getalldetailed);

export default router