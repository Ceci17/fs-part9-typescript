import React from "react";
import { useParams } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import axios from "axios";

import {
  HealthCheckEntryFormValues,
  HospitalEntryFormValues,
  OHCEntryFormValues,
  HealthCheckEntry,
  OccupationalHealthcareEntry,
  HospitalEntry,
  Patient,
  Entry,
} from "../types";
import AddHospitalEntryModal from "../AddHospitalEntryModal";
import AddHealthCheckEntryModal from "../AddHealthCheckEntryModal";
import AddOHCEntryModal from "../AddOHCEntryModal";
import { useStateValue, addEntry } from "../state";
import { apiBaseUrl } from "../constants";
import Entries from "./components";

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [, dispatch] = useStateValue();
  const [patient, setPatient] = React.useState<Patient | null>(null);
  const [entries, setEntries] = React.useState<Entry[] | null>(null);
  const [error, setError] = React.useState<string | undefined>();
  const [modalHEOpen, setModalHEOpen] = React.useState<boolean>(false);
  const [modalHCOpen, setModalHCOpen] = React.useState<boolean>(false);
  const [modalOHCOpen, setModalOHCOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getPatientById = async (id: string) => {
      try {
        const patient = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        setPatient(patient.data);
        setEntries(patient.data.entries);
      } catch (err) {
        console.error(err.response.data);
        setError(err.response.data.error);
      }
    };
    getPatientById(id);
  }, [id]);

  const openHEModal = (): void => setModalHEOpen(true);
  const closeHEModal = (): void => {
    setModalHEOpen(false);
    setError(undefined);
  };

  const openHCModal = (): void => setModalHCOpen(true);
  const closeHCModal = (): void => {
    setModalHCOpen(false);
    setError(undefined);
  };

  const openOHCModal = (): void => setModalOHCOpen(true);
  const closeOHCModal = (): void => {
    setModalOHCOpen(false);
    setError(undefined);
  };

  const submitHCEntry = async (values: HealthCheckEntryFormValues) => {
    try {
      const { data: newEntry } = await axios.post<HealthCheckEntry>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      setEntries([...entries, newEntry]);
      dispatch(addEntry(newEntry));
      closeHCModal();
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.error);
    }
  };

  const submitOHCEntry = async (values: OHCEntryFormValues) => {
    try {
      const { data: newEntry } = await axios.post<OccupationalHealthcareEntry>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      setEntries([...entries, newEntry]);
      dispatch(addEntry(newEntry));
      closeOHCModal();
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.error);
    }
  };

  const submitHEntry = async (values: HospitalEntryFormValues) => {
    try {
      const { data: newEntry } = await axios.post<HospitalEntry>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      setEntries([...entries, newEntry]);
      dispatch(addEntry(newEntry));
      closeHEModal();
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>
        {patient?.name}{" "}
        <Icon name={patient?.gender === "male" ? "mars" : "venus"} />
      </h2>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <Button onClick={() => openHEModal()}>New Hospital Entry</Button>
      <Button onClick={() => openHCModal()}>New Health Check Entry</Button>
      <Button onClick={() => openOHCModal()}>
        New Occupational Healthcare Entry
      </Button>
      <Entries entries={entries} />
      <AddHospitalEntryModal
        onClose={closeHEModal}
        onSubmit={submitHEntry}
        modalOpen={modalHEOpen}
        error={error}
      />
      <AddHealthCheckEntryModal
        onClose={closeHCModal}
        onSubmit={submitHCEntry}
        modalOpen={modalHCOpen}
        error={error}
      />
      <AddOHCEntryModal
        onClose={closeOHCModal}
        onSubmit={submitOHCEntry}
        modalOpen={modalOHCOpen}
        error={error}
      />
    </div>
  );
};

export default PatientPage;
