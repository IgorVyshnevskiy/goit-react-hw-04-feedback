import css from './statisticsList.module.css'

const StatisticsList = ({title, children}) => {
  return(
     <section className={css.section}>
      <h2 className={css.sectionTitle}>{title}</h2>
      {children}
     </section>
  )
}

export default StatisticsList