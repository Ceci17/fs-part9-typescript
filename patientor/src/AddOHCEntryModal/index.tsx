import React from "react";
import { Modal, Segment } from "semantic-ui-react";
import AddOHCForm from "./AddOHCForm";
import { OHCEntryFormValues } from "../types";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: OHCEntryFormValues) => void;
  error?: string;
}

const AddOHCModal = ({ modalOpen, onClose, onSubmit, error }: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new hospital entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddOHCForm onSubmit={onSubmit} onCancel={onClose} />
    </Modal.Content>
  </Modal>
);

export default AddOHCModal;
