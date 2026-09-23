import type { PlayingCard } from "../types/PlayingCards";
import { getValueCounts } from "./getValueCounts";

/**
 * Checks if a hand contains one pair,
 * one value that appears twice, and that no other value appears twise
 * (which would make it into two pair instead)
 *
 * @param hand the cards to check
 * @returns true if the hand contains one pair
 */

export function isPair(hand: PlayingCard[]): boolean {
  const occurrences = Array.from(getValueCounts(hand).values());
  const pairs = occurrences.filter((count) => count === 2);

  return pairs.length === 1;
}
