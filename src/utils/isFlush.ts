import type { PlayingCard } from "../types/PlayingCards";

/**
 * Checks if all cards in the hand share the same suit
 *
 * @param hand - The cards to check
 * @returns True if all cards have the same suit
 */

export function isFlush(hand: PlayingCard[]): boolean {
  return hand.every((card) => card.suit === hand[0].suit);
}
