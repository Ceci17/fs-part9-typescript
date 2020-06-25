/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Entry,
  EntryType,
  NewPatientEntry,
  HealthCheckEntry,
  OccupationalHealthcareEntry,
  HospitalEntry,
  SickLeave,
  Discharge,
  Gender,
} from "./types";

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name: " + name);
  }

  return name;
};

const isNumber = (num: any): num is number => {
  return typeof num === "number" || num instanceof Number;
};

const isEntryType = (param: any): param is EntryType => {
  return Object.values(EntryType).includes(param);
};

function isArrayOfStrings(param: any): param is string[] {
  return (
    Array.isArray(param) && param.every((item) => typeof item === "string")
  );
}

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect or missing occupation: " + occupation);
  }

  return occupation;
};

const parseSSN = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect or missing ssn: " + ssn);
  }
  return ssn;
};

const parseSpecialist = (specialist: any): string => {
  if (!specialist || !isString(specialist)) {
    throw new Error("Incorrect or missing specialist: " + specialist);
  }
  return specialist;
};

const parseDescription = (description: any): string => {
  if (!description || !isString(description)) {
    throw new Error("Incorrect or missing description: " + description);
  }
  return description;
};

const parseEmployer = (employer: any): string => {
  if (!employer || !isString(employer)) {
    throw new Error("Incorrect or missing employer: " + employer);
  }
  return employer;
};

const parseHealthCheckRating = (hcrating: any): number => {
  if (!hcrating || !isNumber(hcrating) || hcrating > 4 || hcrating < 0) {
    throw new Error("Incorrect or missing health check rating: " + hcrating);
  }
  return hcrating;
};

const parseEntryType = (type: any): EntryType => {
  if (!type || !isEntryType(type)) {
    throw new Error("Incorrect or missing type: " + type);
  }
  return type;
};

const isHosptialEntryType = (type: any): EntryType.Hospital => {
  if (parseEntryType(type) !== EntryType.Hospital) {
    throw new Error("Is not hospital entry type: " + type);
  }
  return type as EntryType.Hospital;
};

const isHealthCheckEntryType = (type: any): EntryType.HealthCheck => {
  if (parseEntryType(type) !== EntryType.HealthCheck) {
    throw new Error("Is not health check entry type: " + type);
  }
  return type as EntryType.HealthCheck;
};

const isOccupationalHealthcareEntryType = (
  type: any
): EntryType.OccupationalHealthcare => {
  if (parseEntryType(type) !== EntryType.OccupationalHealthcare) {
    throw new Error("Is not health check entry type: " + type);
  }
  return type as EntryType.OccupationalHealthcare;
};

const parseDiagnosisCodes = (code: any) => {
  if (!isArrayOfStrings(code)) {
    throw new Error("Incorrect diagnosis codes: " + code);
  }
  return code;
};

const parseSickLeave = (sickLeave: any): SickLeave => {
  if (
    !sickLeave ||
    !isDate(sickLeave.startDate) ||
    !isDate(sickLeave.endDate)
  ) {
    throw new Error("Incorrect sick leave dates: " + sickLeave);
  }
  return sickLeave as SickLeave;
};

const parseDischarge = (discharge: any): Discharge => {
  if (!discharge || !isDate(discharge.date) || !isString(discharge.criteria)) {
    throw new Error("Incorrect discharge date or criteria): " + discharge);
  }
  return discharge as Discharge;
};

export const toNewPatientEntry = (
  patient: NewPatientEntry
): NewPatientEntry => {
  return {
    name: parseName(patient.name),
    dateOfBirth: parseDate(patient.dateOfBirth),
    gender: parseGender(patient.gender),
    occupation: parseOccupation(patient.occupation),
    ssn: parseSSN(patient.ssn),
  };
};

export const toNewEntry = (entry: Entry): Omit<Entry, "id"> => {
  if (entry.type === EntryType.HealthCheck) {
    const healthCheckEntry: Omit<HealthCheckEntry, "id"> = {
      description: parseDescription(entry.description),
      date: parseDate(entry.date),
      specialist: parseSpecialist(entry.specialist),
      diagnosisCodes: parseDiagnosisCodes(entry.diagnosisCodes),
      type: isHealthCheckEntryType(entry.type),
      healthCheckRating: parseHealthCheckRating(entry.healthCheckRating),
    };
    return healthCheckEntry;
  } else if (entry.type === EntryType.OccupationalHealthcare) {
    const occupationalHealthcareEntry: Omit<
      OccupationalHealthcareEntry,
      "id"
    > = {
      description: parseDescription(entry.description),
      date: parseDate(entry.date),
      specialist: parseSpecialist(entry.specialist),
      diagnosisCodes: parseDiagnosisCodes(entry.diagnosisCodes),
      type: isOccupationalHealthcareEntryType(entry.type),
      employerName: parseEmployer(entry.employerName),
      sickLeave: parseSickLeave(entry.sickLeave),
    };
    return occupationalHealthcareEntry;
  } else {
    const hospitalEntry: Omit<HospitalEntry, "id"> = {
      description: parseDescription(entry.description),
      date: parseDate(entry.date),
      specialist: parseSpecialist(entry.specialist),
      diagnosisCodes: parseDiagnosisCodes(entry.diagnosisCodes),
      type: isHosptialEntryType(entry.type),
      discharge: parseDischarge(entry.discharge),
    };
    return hospitalEntry;
  }
};
