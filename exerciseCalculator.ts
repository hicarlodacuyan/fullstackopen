interface Results {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

interface Rating {
  rating: number
  ratingDescription: string
}

const calculateExercises = (
  dailyExercises: Array<number>,
  target: number
): Results => {
  const periodLength = dailyExercises.length
  const trainingDays = dailyExercises.filter((hour) => hour > 0).length
  const totalExerciseTime = dailyExercises.reduce(
    (total, hour) => total + hour,
    0
  )
  const average = totalExerciseTime / periodLength
  const success = average >= target

  const findRating = (average: number): Rating => {
    const rating = { rating: 0, ratingDescription: '' }

    if (average >= 3) {
      rating.rating = 1
      rating.ratingDescription = 'you rock!'
    } else if (average >= 2) {
      rating.rating = 2
      rating.ratingDescription = 'not too bad but could be better'
    } else if (average >= 1) {
      rating.rating = 3
      rating.ratingDescription = 'try better next time'
    }

    return rating
  }

  return {
    periodLength,
    trainingDays,
    success,
    ...findRating(average),
    target,
    average
  }
}

export default calculateExercises
