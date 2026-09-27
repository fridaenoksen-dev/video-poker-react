import PayoutTable from "../components/PayoutTable";
import { Link } from "react-router";
import "../App.css";

/**
 * Explains the rules and shows the payoutTable.
 */
function Regler() {
  return (
    <div>
      <h1>Regler</h1>
      <div className="nav">
        <Link to="/">Gå tilbake til valg av spiller</Link>
      </div>
      <p>
        Fra en vanlig kortstokk på 52 kort får du utdelt 5 kort hvor du kan
        velge å bytte ut så mange du ønsker. Kortene du kaster blir erstattet
        med nye kort fra kortstokken. Hånden avgjør gevinsten.
      </p>
      <p>
        Rangeringen av hendene følger valige pokerrangering. Fra svakeste hånd
        til den sterkeste.
      </p>
      <h2>Utbetalinger</h2>
      <PayoutTable />
    </div>
  );
}

export default Regler;
