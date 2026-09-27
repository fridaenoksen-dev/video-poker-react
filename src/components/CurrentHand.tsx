import { useGameStore } from "../store/gameStore";
import { evaluateHand } from "../utils/evaluateHand";
import { pokerHandLabels } from "../utils/pokerHandLabels";

/**
 * Displays the hand the player currently holds.
 */

function CurrentHand() {
  const hand = useGameStore((state) => state.hand);

  if (hand.length === 0) {
    return <p>Trekk kort for å starte runden</p>;
  }

  const result = evaluateHand(hand);

  return <p>Du sitter med: {pokerHandLabels[result]}</p>;
}

export default CurrentHand;
