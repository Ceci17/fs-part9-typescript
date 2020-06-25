import React from "react";
import { Icon, Card } from "semantic-ui-react";
import { HospitalEntry } from "../../types";
import Diagnose from "./Diagnose";

const HEntry: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {entry.date} <Icon name="hospital" />
        </Card.Header>
        <Card.Meta>Specialist: {entry.specialist}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Card.Description>{entry.description}</Card.Description>
        <Diagnose diagnosisCodes={entry.diagnosisCodes} />
      </Card.Content>
      {entry?.discharge && (
        <Card.Content extra>
          <p>Discharge</p>
          <p>date: {entry.discharge?.date}</p>
          <p>criteria: {entry.discharge?.criteria}</p>
        </Card.Content>
      )}
    </Card>
  );
};

export default HEntry;
