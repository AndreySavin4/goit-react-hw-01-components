import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  if (title) {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.stat_list}>
          {stats.map(({ label, percentage, id }) => {
            return (
              <li key={id} className={css.item}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return;
  }
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.any.isRequired,
};
