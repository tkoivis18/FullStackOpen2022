import { useState } from "react";

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <h4>No feedback was given</h4>
      </div>
    );
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine
        text="all"
        value={props.good + props.neutral + props.bad}
      />
      <StatisticLine
        text="average"
        value={
          (props.good + props.neutral * 0 + props.bad * -1) /
          (props.good + props.neutral + props.bad)
        }
      />
      <StatisticLine
        text="positive"
        value={
          (props.good / (props.good + props.neutral + props.bad)) * 100 + "%"
        }
      />
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <h4>
      {text} {value}
    </h4>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleGoodClick = () => {
    setAll(allClicks.concat("G"));
    setGood(good + 1);
  };

  const handleNeutalClick = () => {
    setAll(allClicks.concat("G"));
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll(allClicks.concat("G"));
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutalClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h1>statistics</h1>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
      />
    </div>
  );
};

export default App;
