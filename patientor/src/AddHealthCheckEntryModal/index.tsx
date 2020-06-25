import React from "react";
import { Modal, Segment } from "semantic-ui-react";
import AddHealthcareForm from "./AddHealthCheckForm";
import { HealthCheckEntryFormValues } from "../types";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: HealthCheckEntryFormValues) => void;
  error?: string;
}

const AddHealthCheckModal = ({
  modalOpen,
  onClose,
  onSubmit,
  error,
}: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new hospital entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddHealthcareForm onSubmit={onSubmit} onCancel={onClose} />
    </Modal.Content>
  </Modal>
);

export default AddHealthCheckModal;
