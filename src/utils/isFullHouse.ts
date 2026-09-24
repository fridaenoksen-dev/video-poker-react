import type { PlayingCard } from "../types/PlayingCards";
import { getValueCounts } from "./getValueCounts";

/**
 * Checks if a hand contains one pair and three of a kind.
 *
 * @param hand the cards to check
 * @returns true if the hand contains one pair and three of a kind.
 */

export function isFullHouse(hand: PlayingCard[]): boolean {
  const occurrences = Array.from(getValueCounts(hand).values());

  return occurrences.includes(3) && occurrences.includes(2);
}
