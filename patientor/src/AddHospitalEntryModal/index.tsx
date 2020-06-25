import React from "react";
import { Modal, Segment } from "semantic-ui-react";
import AddHospitalForm from "./AddHospitalForm";
import { HospitalEntryFormValues } from "../types";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: HospitalEntryFormValues) => void;
  error?: string;
}

const AddHospitalEntryModal = ({
  modalOpen,
  onClose,
  onSubmit,
  error,
}: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new hospital entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddHospitalForm onSubmit={onSubmit} onCancel={onClose} />
    </Modal.Content>
  </Modal>
);

export default AddHospitalEntryModal;
