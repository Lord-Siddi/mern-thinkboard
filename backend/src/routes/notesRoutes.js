import express from "express";
import { createNotes, deleteNotes, getAllNotes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router=express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", updateNotes);    
router.delete("/:id",deleteNotes);
export default router;

//tH35zTkAgZZx51dD
//mongodb+srv://sidjindal008_db_user:tH35zTkAgZZx51dD@cluster0.ol0like.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0