import React from "react";
import { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content: React.FC<ContentProps> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((part: CoursePart) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  );
};

export default Content;
