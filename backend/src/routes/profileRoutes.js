import express from "express";
import {
    listProfile,
    createProfile,
    updateProfile,
    deleteProfile,
} from "../controllers/profileController.js"

const router = express.Router();

router.get("/", listProfile);
router.post("/", createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;