import "./CoreConcept.css";

export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.temp} />
      <h3>{props.day}</h3>
      <p>{props.temp} °</p>
    </li>
  );
}
