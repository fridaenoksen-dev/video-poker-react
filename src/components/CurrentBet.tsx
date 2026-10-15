import { useGameStore } from "../store/gameStore";

/**
 * Displays the curretn bet amount from the store.
 */

function CurrentBet() {
  const currentBet = useGameStore((state) => state.currentBet);

  return <p>Innsats: {currentBet}</p>;
}

export default CurrentBet;
