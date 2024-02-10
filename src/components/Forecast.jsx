//import "./CoreConcept.css";
import { CORE_CONCEPTS } from "../data";

import ForecastInfo from "./ForecastInfo.jsx";

export default function CoreConcepts(props) {
  props.weather?.forecast.forecastday.shift();
  const forecastInfo = props.weather?.forecast.forecastday;

  function getDay(dayDate) {
    const date = new Date(dayDate);
    const day = date.getUTCDay();
    switch (day) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;

      default:
        return null;
        break;
    }
  }

  return (
    <section id="core-concepts">
      <h2> Weather Forecast </h2>
      <ul>
        {forecastInfo?.map((item) => (
          <ForecastInfo
            key={item.date_epoch}
            day={getDay(item.date)}
            image={item.day.condition.icon}
            temp={item.day.avgtemp_c}
          />
        ))}
      </ul>
    </section>
  );
}
