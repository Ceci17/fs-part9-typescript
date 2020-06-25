import patients from "../data/patients";
import { v4 as uuid } from "uuid";

import {
  PatientEntry,
  NewPatientEntry,
  PublicPatient,
  Patient,
  Entry,
} from "../types";

import { toNewEntry } from "../utils";

const getPatients = (): PatientEntry[] => {
  return patients;
};

const getNonProtectedEntries = (): PublicPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatient = {
    ...entry,
    id: uuid(),
    entries: [],
  };

  patients.push(newPatient);
  return newPatient;
};

const addEntry = (id: string, entry: Entry): Entry | null => {
  const patient = patients.find((patient) => patient.id === id);
  if (patient && entry) {
    const newEntry: Omit<Entry, "id"> = toNewEntry(entry);
    const addedEntry = {
      ...newEntry,
      id: uuid(),
    };
    patient.entries.push(addedEntry as Entry);
    return addedEntry as Entry;
  } else {
    return null;
  }
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find((patient) => patient.id === id);

  return patient;
};

export default {
  getPatients,
  addPatient,
  addEntry,
  getNonProtectedEntries,
  findById,
};
