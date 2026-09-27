import { useGameStore } from "../store/gameStore";

/**
 * Displays the curretn bet amount.
 * Fixed for now to 1.
 */

function CurrentBet() {
  const bet = 1;

  return <p>Innsats: {bet}</p>;
}

export default CurrentBet;
