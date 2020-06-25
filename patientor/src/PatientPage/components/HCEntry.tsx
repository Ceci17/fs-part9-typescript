// id: "b4f4eca1-2aa7-4b13-9a18-4a5535c3c8da",
//         date: "2019-10-20",
//         specialist: "MD House",
//         type: "HealthCheck",
//         description: "Yearly control visit. Cholesterol levels back to normal.",
//         healthCheckRating: 0,

import React from "react";
import { Icon, Card } from "semantic-ui-react";
import { HealthCheckEntry } from "../../types";
import HealthRatingBar from "../../components/HealthRatingBar";
import Diagnose from "./Diagnose";

const HCEntry: React.FC<{
  entry: HealthCheckEntry;
}> = ({ entry }) => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>
            {entry.date} <Icon name="doctor" />
          </Card.Header>
          <Card.Meta>Specialist: {entry.specialist}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description>{entry.description}</Card.Description>
          <Diagnose diagnosisCodes={entry.diagnosisCodes} />
          <HealthRatingBar rating={entry?.healthCheckRating} showText />
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default HCEntry;
