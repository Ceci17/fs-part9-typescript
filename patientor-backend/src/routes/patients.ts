import express from "express";
const router = express.Router();
import patientsService from "../services/patientsService";
import { toNewPatientEntry, toNewEntry } from "../utils";
import { Entry } from "../types";

router.get("/", (_req, res) => {
  res.send(patientsService.getPatients());
});

router.get("/:id", (req, res) => {
  const patient = patientsService.findById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedPatient = patientsService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send(err.message);
    }
  }
});

router.get("/:id/entries", (req, res) => {
  const patient = patientsService.findById(req.params.id);

  if (patient?.entries) {
    res.send(patient.entries);
  } else {
    res.sendStatus(404);
  }
});

router.post("/:id/entries", (req, res) => {
  try {
    const id = req.params.id;
    const newEntry = toNewEntry(req.body) as Entry;

    const addedEntry = patientsService.addEntry(id, newEntry);
    res.json(addedEntry);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error", err.message);
      res.status(400).send(err.message);
    }
  }
});

export default router;
