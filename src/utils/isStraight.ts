import type { PlayingCard } from "../types/PlayingCards";

/**
 * Checks if the value in a hand have five consecutive numbers when sorted.
 *
 * @param hand The cards to check
 * @returns True if the hands values are consecutive
 */

export function isStraight(hand: PlayingCard[]): boolean {
  const values = hand.map((card) => card.value);
  const sorted = [...values].sort((a, b) => a - b);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] + 1) {
      return false;
    }
  }
  return true;
}
