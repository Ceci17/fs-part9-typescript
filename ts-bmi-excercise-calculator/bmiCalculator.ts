// interface BodySize {
//   height: number;
//   weight: number;
// }

// const parseNumbers = (args: Array<string>): BodySize => {
//   if (args.length < 4) throw new Error("Not enough arguments");
//   if (args.length > 4) throw new Error("Too many arguments");

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3]),
//     };
//   } else {
//     throw new Error("Provided values were not numbers!");
//   }
// };

const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;
  console.log("bmi", bmi);
  switch (true) {
    case bmi >= 18.5 && bmi <= 25:
      return "Normal (healthy weight)";
    case bmi > 25:
      return "Overweight";
    case bmi < 18.5:
      return "Underweight";
    default:
      return "Error";
  }
};

// const numbers = parseNumbers(process.argv);
// console.log(calculateBmi(numbers.height, numbers.weight));

export default calculateBmi;
