import { Component } from 'react';
import FeedbackOptions from './FeedbackButton/FeedbackButton';
import StatisticsList from './StatisticsList/StatisticsList';
import StatisticsItem from './StatisticsItem/StatiscticsItem';
import Notification from './Notification/Notification';

const options = ['Good', 'Neutral', 'Bad'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    let name = e.target.name.toLowerCase();

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const totalValues = Object.values(this.state)
    return totalValues.reduce((acc, total) => acc + total, 0)
  }

  countPositivePercentage() {
    const good = this.state.good
    const total = this.countTotalFeedback()
    if (!good) {
      return 0
    }
    return Math.round((good / total) * 100)
  }

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositivePercentage();

    return (
      <StatisticsList title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onleaveFeedback={this.leaveFeedback}
        />
        {total ? <StatisticsItem
          title={'Statistics'}
          good={good}
          nautral={neutral}
          bad={bad}
          total={total}
          goodPercentage={positive}
        /> : <Notification message={'There is no feedback'}/>}
        
      </StatisticsList>
    );
  }
}

export default App;
