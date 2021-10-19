import s from "./Statistics.module.css";
function Statistics({ good, neutral, bad, total, percentsApproving }) {
  return (
    <>
      <p className={s.grades}>Good - {good}</p>
      <p className={s.grades}>Neutral - {neutral}</p>
      <p className={s.grades}>Bad - {bad}</p>
      <p className={s.grades}>Total - {total}</p>
      <p className={s.grades}>Positive - {percentsApproving}%</p>
    </>
  );
}

export default Statistics;
