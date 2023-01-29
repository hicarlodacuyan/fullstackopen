type Result =
  | 'Underweight'
  | 'Normal'
  | 'Overweight'
  | 'Obese I'
  | 'Obese II'
  | 'Morbidly Obese III'
  | 'Invalid'

const calculateBmi = (height: number, weight: number): Result => {
  const bmi = (weight / height / height) * 10000

  switch (true) {
    case bmi < 18.5:
      return 'Underweight'
    case bmi > 18.5 && bmi < 24.9:
      return 'Normal'
    case bmi > 25 && bmi < 29.9:
      return 'Overweight'
    case bmi > 30 && bmi < 34.9:
      return 'Obese I'
    case bmi > 35 && bmi < 39.9:
      return 'Obese II'
    case bmi >= 40:
      return 'Morbidly Obese III'
    default:
      return 'Invalid'
  }
}

export default calculateBmi
