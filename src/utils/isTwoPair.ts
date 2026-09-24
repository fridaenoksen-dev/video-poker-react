import type { PlayingCard } from "../types/PlayingCards";
import { getValueCounts } from "./getValueCounts";

/**
 * Checks if a hand contains two pairs,
 * two different values that appears twice.
 *
 * @param hand the cards to check
 * @returns true if the hand contains two pairs
 */

export function isTwoPair(hand: PlayingCard[]): boolean {
  const occurrences = Array.from(getValueCounts(hand).values());
  const pairs = occurrences.filter((count) => count === 2);

  return pairs.length === 2;
}
