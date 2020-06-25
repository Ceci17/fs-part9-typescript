// interface DailyWorkout {
//   dailyExcercise: Array<number>;
//   dailyTarget: number;
// }

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Rating {
  rating: number;
  ratingDescription: string;
}

// const parseWorkouts = (args: Array<string>): DailyWorkout => {
//   if (args.length < 4) throw new Error("Add workouts");

//   const dailyExcercise = args
//     .filter((arg, i) => i > 2 && !isNaN(Number(arg)))
//     .map((arg) => Number(arg));

//   const dailyTarget = Number(args[2]);

//   if (dailyExcercise.length !== args.length - 4 && !isNaN(dailyTarget)) {
//     return {
//       dailyExcercise,
//       dailyTarget,
//     };
//   } else {
//     throw new Error("Provided values were not number");
//   }
// };

// const calculateWorkout = (workouts: DailyWorkout): Result => {
//   const totalTrainingHours: number = workouts.dailyExcercise.reduce(
//     (hours, dailyHours) => hours + dailyHours
//   );
//   const periodLength: number = workouts.dailyExcercise.length;
//   const average: number = totalTrainingHours / workouts.dailyExcercise.length;
//   const success: boolean = average < workouts.dailyTarget ? false : true;
//   const trainingDays: number = workouts.dailyExcercise.filter(
//     (exercise) => exercise > 0
//   ).length;
//   const target: number = workouts.dailyTarget;
//   const calculateRating = (average: number): Rating => {
//     if (average < 0.5) {
//       return { rating: 1, ratingDescription: "Move your lazy ass" };
//     }
//     if (average < 1) {
//       return {
//         rating: 2,
//         ratingDescription: "Not great, not terrible",
//       };
//     }
//     if (average < 1.5) {
//       return {
//         rating: 3,
//         ratingDescription: "Now we're talking",
//       };
//     }
//     if (average < 2) {
//       return {
//         rating: 4,
//         ratingDescription: "I'm not here to talk",
//       };
//     }
//     return {
//       rating: 5,
//       ratingDescription: "Beast mode activated",
//     };
//   };
//   return {
//     periodLength,
//     trainingDays,
//     success,
//     rating: calculateRating(average).rating,
//     ratingDescription: calculateRating(average).ratingDescription,
//     target,
//     average,
//   };
// };

const calculateWorkout = (
  dailyExcercise: Array<number>,
  dailyTarget: number
): Result => {
  const totalTrainingHours: number = dailyExcercise.reduce(
    (hours, dailyHours) => hours + dailyHours
  );
  const periodLength: number = dailyExcercise.length;
  const average: number = totalTrainingHours / dailyExcercise.length;
  const success: boolean = average < dailyTarget ? false : true;
  const trainingDays: number = dailyExcercise.filter((exercise) => exercise > 0)
    .length;
  const target: number = dailyTarget;
  const calculateRating = (average: number): Rating => {
    if (average < 0.5) {
      return { rating: 1, ratingDescription: "Move your lazy ass" };
    }
    if (average < 1) {
      return {
        rating: 2,
        ratingDescription: "Not great, not terrible",
      };
    }
    if (average < 1.5) {
      return {
        rating: 3,
        ratingDescription: "Now we're talking",
      };
    }
    if (average < 2) {
      return {
        rating: 4,
        ratingDescription: "I'm not here to talk",
      };
    }
    return {
      rating: 5,
      ratingDescription: "Beast mode activated",
    };
  };
  return {
    periodLength,
    trainingDays,
    success,
    rating: calculateRating(average).rating,
    ratingDescription: calculateRating(average).ratingDescription,
    target,
    average,
  };
};

// const calculatedExercise = calculateWorkout(parseWorkouts(process.argv));
// console.log("calculatedExercise", calculatedExercise);

export default calculateWorkout;
