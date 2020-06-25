interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface Description extends CoursePartBase {
  description: string;
}

interface CoursePartOne extends Description {
  name: "Fundamentals";
  description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends Description {
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}

interface CoursePartFour {
  name: "Typescript";
  exerciseCount: number;
  description: string;
}

export type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour;
