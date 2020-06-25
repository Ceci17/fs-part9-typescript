import express from "express";
const router = express.Router();
import diagnosesService from "../services/diagnosesService";

router.get("/", (_req, res) => {
  res.send(diagnosesService.getDiagnoses());
});

router.post("/", (_req, res) => {
  res.send("Saving a diagnose!");
});

export default router;
