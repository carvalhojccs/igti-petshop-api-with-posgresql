import express from "express";
import proprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", proprietarioController.createowner);
router.get("/", proprietarioController.getOwners);
router.get("/:id", proprietarioController.getOwner);
router.put("/", proprietarioController.updateOwner);
router.delete("/:id", proprietarioController.deleteOwner);

export default router;
