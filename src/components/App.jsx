import { useState } from 'react';
import FeedbackOptions from './FeedbackButton/FeedbackButton';
import StatisticsList from './StatisticsList/StatisticsList';
import StatisticsItem from './StatisticsItem/StatiscticsItem';
import Notification from './Notification/Notification';

const options = ['Good', 'Neutral', 'Bad'];

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const leaveFeedback = e => {
    let name = e.target.name.toLowerCase();
    
    switch (name) {
      case 'good':
        setGood(good => good + 1)
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1)
        break;
      case 'bad':
        setBad(bad => bad + 1)
        break;
    
      default:
        return;
    }
  }

  const totalFeedback = good + neutral + bad    
    
  const countPositiveFeedback = Math.round((good / totalFeedback) * 100)

  return (
    <StatisticsList title={'Please leave feedback'}>
    <FeedbackOptions
      options={options}
      onleaveFeedback={leaveFeedback}
    />
    {totalFeedback ? <StatisticsItem
      title={'Statistics'}
      good={good}
      nautral={neutral}
      bad={bad}
      total={totalFeedback}
      goodPercentage={countPositiveFeedback}
    /> : <Notification message={'There is no feedback'}/>}
    
  </StatisticsList>
  )
}


export default App;
