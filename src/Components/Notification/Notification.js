import s from "./Notification.module.css";

function Notification({ message }) {
  return <h2 className={s.headline}>{message}</h2>;
}

export default Notification;
