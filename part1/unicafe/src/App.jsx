import { useState } from "react";

const StatisticLine = ({ value, text }) => {
  return (
    <p>
      {text} {text === "positive" ? `${value} %` : value}
    </p>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + bad + neutral} />
      <StatisticLine
        text="average"
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
        text="positive"
        value={(good / (good + neutral + bad)) * 100}
      />
    </>
  );
};

const Button = ({ handleFeedback, text }) => {
  return <button onClick={handleFeedback}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleFeedback={handleGood} text={"good"} />
      <Button handleFeedback={handleNeutral} text={"neutral"} />
      <Button handleFeedback={handleBad} text={"bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
