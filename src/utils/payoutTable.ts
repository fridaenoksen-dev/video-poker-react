import type { PokerHand } from "../types/PokerHand";

export type PayoutRow = {
  hand: PokerHand;
  payout: number;
};

export const payoutTable: PayoutRow[] = [
  { hand: "royalFlush", payout: 250 },
  { hand: "straightFlush", payout: 50 },
  { hand: "fourOfAKind", payout: 25 },
  { hand: "fullHouse", payout: 9 },
  { hand: "flush", payout: 6 },
  { hand: "straight", payout: 4 },
  { hand: "threeOfAKind", payout: 3 },
  { hand: "twoPair", payout: 2 },
  { hand: "pair", payout: 1 },
  { hand: "highCard", payout: 0 },
];
