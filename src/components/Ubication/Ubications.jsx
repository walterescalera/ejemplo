import Ubication from "./Ubication";
import "./Ubications.css";

const Ubications = ({ ubications }) => {
  return (
    <div className="grid">
      {ubications.map((ubication) => (
        <Ubication key={ubication.id} ubication={ubication} />
      ))}
    </div>
  );
};

export default Ubications;
