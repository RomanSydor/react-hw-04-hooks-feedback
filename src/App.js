import { useState } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

const types = { GOOD: "good", NEUTRAL: "neutral", BAD: "bad" };
const options = ["good", "neutral", "bad"];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const data = e.target.dataset.feedback;
    switch (data) {
      case types.GOOD:
        setGood((prevState) => prevState + 1);
        break;

      case types.NEUTRAL:
        setNeutral((prevState) => prevState + 1);
        break;

      case types.BAD:
        setBad((prevState) => prevState + 1);
        break;

      default:
        throw new Error();
    }
  };

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, total) => {
    const result = total !== 0 ? (good * 100) / total : 0;
    return Math.round(result * 100) / 100;
  };

  const totalFeedbackCount = countTotalFeedback(good, neutral, bad);

  const positiveFeedbackPercentageCount = countPositiveFeedbackPercentage(
    good,
    totalFeedbackCount
  );

  return (
    <div className="App">
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {totalFeedbackCount !== 0 ? (
          <Statistics
            goodCount={good}
            neutralCount={neutral}
            badCount={bad}
            total={totalFeedbackCount}
            positivePercentage={positiveFeedbackPercentageCount}
          />
        ) : (
          <Notification message={"There is no feedback"}></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
