import css from './statItem.module.css'

const StatisticsItem = ({
  good,
  nautral,
  bad,
  total,
  goodPercentage,
  title,
}) => {
  return (
    <div className={css.statBox}>
      <h2 className={css.title}>{title}</h2>
      <div>
        <p className={css.stat}>
          Good: <span>{good}</span>
        </p>
        <p className={css.stat}>
          Neutral: <span>{nautral}</span>
        </p>
        <p className={css.stat}>
          Bad: <span>{bad}</span>
        </p>
        <p className={css.stat}>
          Total: <span>{total}</span>
        </p>
        <p className={css.stat}>
          Positive feedback: <span>{goodPercentage}%</span>
        </p>
      </div>
    </div>
  );
};

export default StatisticsItem
