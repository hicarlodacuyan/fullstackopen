import express from 'express'
import calculateBmi from './bmiCalculator'
import calculateExercises from './exerciseCalculator'

const app = express()

app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  if (!req.query.height || !req.query.weight) {
    res
      .status(400)
      .json({ error: 'Missing required parameters: height and weight' })
    return
  }

  let height: number
  let weight: number

  try {
    height = Number(req.query.height)
    weight = Number(req.query.weight)
  } catch (err) {
    res.status(400).json({ error: 'Malformatted parameters' })
    return
  }

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'Malformatted parameters' })
    return
  }

  res.json({
    height: `${height}`,
    weight: `${weight}`,
    bmi: `${calculateBmi(height, weight)}`
  })
})

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!req.body.daily_exercises || !req.body.target) {
    res.status(400).json({ error: 'parameters missing' })
    return
  }

  let daily_exercises: Array<number> = []
  let target: number

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    daily_exercises = req.body.daily_exercises
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    target = req.body.target
  } catch (err) {
    res.status(400).json({ error: 'Malformatted parameters' })
    return
  }

  if (!Array.isArray(daily_exercises) || isNaN(target)) {
    res.status(400).json({ error: 'Malformatted parameters' })
    return
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const outcome = calculateExercises(daily_exercises, Number(target))
  res.send(outcome)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`)
})
