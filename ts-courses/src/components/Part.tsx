import React from "react";
import { CoursePart } from "../types";

interface PartProp {
  part: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part: React.FC<PartProp> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Total exercise: {part.exerciseCount}</p>
          <em>{part.description}</em>
        </div>
      );
    case "Using props to pass data":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Total exercise: {part.exerciseCount}</p>
          <p>{part.groupProjectCount}</p>
        </div>
      );
    case "Deeper type usage":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Total exercise: {part.exerciseCount}</p>
          <em>{part.description}</em>
          <p>{part.exerciseSubmissionLink}</p>
        </div>
      );
    case "Typescript":
      return (
        <div>
          <h3>{part.name}</h3>
          <p>Total exercise: {part.exerciseCount}</p>
          <em>{part.description}</em>
        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
