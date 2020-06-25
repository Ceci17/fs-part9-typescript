import React from "react";
import HCEntry from "./HCEntry";
import HEntry from "./HEntry";
import OHCEntry from "./OHCEntry";
import { Entry } from "../../types";

interface EntryProps {
  entry: Entry;
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const SingleEntry: React.FC<EntryProps> = ({ entry }) => {
  switch (entry.type) {
    case "Hospital":
      return <HEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OHCEntry entry={entry} />;
    case "HealthCheck":
      return <HCEntry entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default SingleEntry;
