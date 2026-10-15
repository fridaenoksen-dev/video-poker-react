import { pokerHandLabels } from "../utils/pokerHandLabels";
import "./PayoutTable.css";
import { payoutTable } from "../utils/payoutTable";

/**
 *
 * @returns Displays the payout table for each of the poker hands.
 * In highest to lowest.
 */

function PayoutTable() {
  return (
    <table className="payout-table">
      <tbody>
        {payoutTable.map((row) => (
          <tr key={row.hand}>
            <td>{pokerHandLabels[row.hand]}</td>
            <td>{row.payout}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PayoutTable;
