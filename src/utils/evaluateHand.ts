import type { PlayingCard } from "../types/PlayingCards";
import type { PokerHand } from "../types/PokerHand";
import { isFlush } from "./isFlush";
import { isFourOfAKind } from "./isFourOfAKind";
import { isFullHouse } from "./isFullHouse";
import { isPair } from "./isPair";
import { isStraight } from "./isStraight";
import { isThreeOfAKind } from "./isThreeOfAKind";
import { isTwoPair } from "./isTwoPair";

/**
 * Evaluates a hand of cards and checks
 * strongest category down to the weakest.
 * Returning as soon as one matches.
 *
 * @param hand the cards to evaluate
 * @returns the resulting PokerHand
 */

export function evaluateHand(hand: PlayingCard[]): PokerHand {
  if (isFlush(hand) && isStraight(hand)) {
    const values = hand.map((card) => card.value);
    const sorted = [...values].sort((a, b) => a - b);

    if (sorted[0] === 10) {
      return "royalFlush";
    }

    return "straightFlush";
  }

  if (isFourOfAKind(hand)) {
    return "fourOfAKind";
  }

  if (isFullHouse(hand)) {
    return "fullHouse";
  }

  if (isFlush(hand)) {
    return "flush";
  }

  if (isStraight(hand)) {
    return "straight";
  }

  if (isThreeOfAKind(hand)) {
    return "threeOfAKind";
  }

  if (isTwoPair(hand)) {
    return "twoPair";
  }

  if (isPair(hand)) {
    return "pair";
  }

  return "highCard";
}
