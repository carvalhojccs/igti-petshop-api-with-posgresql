import express from "express";
import animalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", animalController.createAnimal);
router.get("/", animalController.getAnimals);
router.get("/:id", animalController.getAnimal);
router.put("/", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimal);

export default router;
