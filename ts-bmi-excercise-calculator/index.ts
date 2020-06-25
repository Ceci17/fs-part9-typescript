import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateWorkout from "./exerciseCalculator";

const app = express();

app.use(express.json());

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    return res.json({
      error: "malformatted parameters",
    });
  }
  const bmi = calculateBmi(Number(height), Number(weight));
  return res.json({
    weight,
    height,
    bmi,
  });
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  // TODO: Fix eslint errors
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const filteredExercises: Array<number> = daily_exercises.filter(
    (workout: number): boolean => !isNaN(workout)
  );

  if (!daily_exercises || !target) {
    return res.json({
      error: "parameters missing",
    });
  }

  if (
    !Array.isArray(daily_exercises) ||
    isNaN(target) ||
    filteredExercises.length !== daily_exercises.length
  ) {
    return res.json({
      error: "malformatted parameters",
    });
  }

  const exercises = calculateWorkout(daily_exercises, target);

  return res.json(exercises);
});

const PORT = 3002;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
