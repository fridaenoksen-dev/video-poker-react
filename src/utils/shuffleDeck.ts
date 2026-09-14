import type { PlayingCard } from "../types/PlayingCards";

/**
 * Returns a shuffled copy of the deck using the Fisher-Yates shuffle algorithm. While keeping the original deck unchanged.
 *
 * @param deck - The deck of cards to shuffle.
 * @returns A new array with the same cards in randomized order
 */

export function shuffleDeck(deck: PlayingCard[]): PlayingCard[] {
  const deckCopy = [...deck];

  for (let i = deckCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
  }

  return deckCopy;
}
