import { create } from "zustand";
import type { PlayingCard } from "../types/PlayingCards";
import type { Player } from "../types/Player";

type GameStore = {
  deck: PlayingCard[];
  hand: PlayingCard[];
  selectedForDiscard: number[];
  discardedCards: PlayingCard[];
  currentPlayer: Player | null;
};

/**
 * The games central state: deck in play,
 * the player's current hand, cards that are marked for discard,
 * cards already discarded this round and the active player.
 *
 * selectedForDiscard holds indexes into hand, not the cards themselves.
 * Marking which cards the player has chosen to swap out
 * before confirming the discard.
 */

export const useGameStore = create<GameStore>(() => ({
  deck: [],
  hand: [],
  selectedForDiscard: [],
  discardedCards: [],
  currentPlayer: null,
}));
