import styles from "./WeatherMainInfo.module.css";

export default function Examples(props) {
  return (
    <section id="examples">
      <h2>Today's Weather</h2>

      <div id="tab-content">
        <div className={styles.mainInfo}>
          <div className={styles.city}>{props.weather?.location.name}</div>
          <div className={styles.country}>
            {props.weather?.location.country}
          </div>
          <div className={styles.row}>
            <div>
              <img
                className={styles.weatherImg}
                src={props.weather?.current.condition.icon}
              />
            </div>
            <div className={styles.weatherConditions}>
              <div className={styles.condition}>
                {props.weather?.current.condition.text}
              </div>
              <div className={styles.current}>
                Temperature: {props.weather?.current.temp_c}°
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
