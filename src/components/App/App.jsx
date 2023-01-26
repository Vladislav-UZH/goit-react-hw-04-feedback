import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { useEffect, useState } from 'react';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(2000);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const values = Object.values({ good, neutral, bad });
    return values.reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = 100;
    const formula = (good / total) * percentage;

    return Number(formula.toFixed(0));
  };
  const addNewStatistics = option => {
    switch (option) {
      case 'good':
        setGood(setGood => setGood + 1);
        break;
      case 'neutral':
        setNeutral(setNeutral => setNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        throw new Error('wrong feedback option');
    }
  };
  useEffect(() => {});

  return (
    <div
      style={{
        padding: 100,
        color: '#DBD7D7',
        backgroundColor: '#22232B',
      }}
    >
      <div
        style={{
          padding: 20,
          backgroundColor: ' #32343b',
          borderRadius: 10,
        }}
      >
        <Section title="Please leave feedback!">
          <FeedbackOptions
            updateStats={addNewStatistics}
            options={['Good', 'Neutral', 'Bad']}
          />
        </Section>
        <Section title="Statistics:">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback!" />
          )}
        </Section>
      </div>
    </div>
  );
};
