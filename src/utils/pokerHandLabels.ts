import type { PokerHand } from "../types/PokerHand";

export const pokerHandLabels: Record<PokerHand, string> = {
  highCard: "Høyt kort",
  pair: "Par",
  twoPair: "To par",
  threeOfAKind: "Tre like",
  straight: "Straight",
  flush: "Flush",
  fullHouse: "Fullt hus",
  fourOfAKind: "Fire like",
  straightFlush: "Straight flush",
  royalFlush: "Royal flush",
};
