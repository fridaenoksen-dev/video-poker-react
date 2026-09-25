import { useGameStore } from "../store/gameStore";
import { evaluateHand } from "../utils/evaluateHand";
import type { PokerHand } from "../types/PokerHand";

const pokerHandLabels: Record<PokerHand, string> = {
  highCard: "Høyt kort",
  pair: "Par",
  twoPair: "To par",
  threeOfAKind: "Tre like",
  straight: "Straight",
  flush: "Flush",
  fullHouse: "Fullt hus",
  fourOfAKind: "Fire like",
  straightFlush: "Straight flush",
  royalFlush: "Royal flush",
};

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
