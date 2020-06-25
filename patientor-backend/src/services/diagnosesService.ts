import diagnoses from "../data/diagnoses";

import { Diagnosis } from "../types";

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

const addDiagnose = (): null => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnose,
};
