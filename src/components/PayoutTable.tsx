import type { PokerHand } from "../types/PokerHand";
import { pokerHandLabels } from "../utils/pokerHandLabels";

type PayoutRow = {
  hand: PokerHand;
  payout: number;
};

const payoutTable: PayoutRow[] = [
  { hand: "royalFlush", payout: 250 },
  { hand: "straightFlush", payout: 50 },
  { hand: "fourOfAKind", payout: 25 },
  { hand: "fullHouse", payout: 9 },
  { hand: "flush", payout: 6 },
  { hand: "straight", payout: 4 },
  { hand: "threeOfAKind", payout: 3 },
  { hand: "twoPair", payout: 2 },
  { hand: "pair", payout: 1 },
  { hand: "highCard", payout: 0 },
];

function PayoutTable() {
  return (
    <table>
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
