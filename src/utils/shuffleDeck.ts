import type { PlayingCard } from "../types/PlayingCards";

export function shuffleDeck(deck: PlayingCard[]): PlayingCard[] {
  const deckCopy = [...deck];

  for (let i = deckCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
  }

  return deckCopy;
}
