import css from './FeedbackButton.module.css'

const FeedbackButton = ({ options, onleaveFeedback }) => {
  return (
    <div className={css.containerBtn}>
      {options.map(name => (
        <button className={css.btn}
        type="button"
        key={name}
        name={name}
        onClick={onleaveFeedback}>{name}</button>
      ))}
    </div>
  )
  
 
};

export default FeedbackButton;
