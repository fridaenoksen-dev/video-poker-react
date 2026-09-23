import type { Suit, Value, PlayingCard } from "../types/PlayingCards";

/**
 * Generates a complete and unshuffled deck with 52 playing card.
 * One card for every combination of suit and value.
 *
 * @returns An array of 52 PlayingCard objects.
 */

const suits: Suit[] = ["clubs", "diamonds", "hearts", "spades"];
const values: Value[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function generateDeck(): PlayingCard[] {
  const combinations = suits.flatMap((suit) =>
    values.map((value) => ({ suit, value })),
  );

  return combinations;
}
