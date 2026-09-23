import type { PlayingCard } from "../types/PlayingCards";
import { getValueCounts } from "./getValueCounts";

/**
 * Checks if a hand contains four cards of the same value.
 *
 * @param hand the cards to check
 * @returns True if any value appears exactly four times
 */

export function isThreeOfAKind(hand: PlayingCard[]): boolean {
  const occurrences = Array.from(getValueCounts(hand).values());
  return occurrences.includes(4);
}
