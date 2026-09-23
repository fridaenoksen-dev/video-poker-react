import type { PlayingCard } from "../types/PlayingCards";

/**
 * Counts how many times each value appears in the hand of cards.
 *
 * @param hand - The cards to count values for
 * @returns A map from each value to how many times it appears.
 */

export function getValueCounts(hand: PlayingCard[]): Map<number, number> {
  const counts = new Map<number, number>();

  for (const card of hand) {
    if (counts.has(card.value)) {
      counts.set(card.value, counts.get(card.value)! + 1);
    } else {
      counts.set(card.value, 1);
    }
  }
  return counts;
}
