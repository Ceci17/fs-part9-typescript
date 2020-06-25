import React from "react";
import { Icon, Card } from "semantic-ui-react";
import { OccupationalHealthcareEntry } from "../../types";
import Diagnose from "./Diagnose";

const OHCEntry: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {entry.date} <Icon name="stethoscope" /> {entry.employerName}
        </Card.Header>
        <Card.Meta>Specialist: {entry.specialist}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Card.Description>{entry.description}</Card.Description>
        <Diagnose diagnosisCodes={entry.diagnosisCodes} />
      </Card.Content>
      {entry?.sickLeave && (
        <Card.Content extra>
          <p>Sick Leave</p>
          <p>start date: {entry.sickLeave?.startDate}</p>
          <p>end date: {entry.sickLeave?.endDate}</p>
        </Card.Content>
      )}
    </Card>
  );
};

export default OHCEntry;
