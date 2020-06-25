import React from "react";

import { Entry } from "../../types";
import SingleEntry from "./SingleEntry";

interface EntryProps {
  entries: Entry[] | null;
}

const Entries: React.FC<EntryProps> = ({ entries }) => {
  if (!entries?.length) {
    return null;
  }
  return (
    <div>
      <h3>entries</h3>
      {entries?.map((entry) => (
        <SingleEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default Entries;
