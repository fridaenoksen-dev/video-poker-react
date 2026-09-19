import { create } from "zustand";
import type { PlayingCard } from "../types/PlayingCards";
import type { Player } from "../types/Player";
import { shuffleDeck } from "../utils/shuffleDeck";
import { generateDeck } from "../utils/generateDeck";

type GameStore = {
  deck: PlayingCard[];
  hand: PlayingCard[];
  selectedForDiscard: number[];
  discardedCards: PlayingCard[];
  currentPlayer: Player | null;
  startNewRound: () => void;
  toggleDiscard: (index: number) => void;
  confirmDiscard(): void;
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

export const useGameStore = create<GameStore>()((set) => ({
  deck: [],
  hand: [],
  selectedForDiscard: [],
  discardedCards: [],
  currentPlayer: null,

  /**
   * Starts a new round: Generates and shuffles a full deck,
   * dels 5 cards to the players hand and stores the rest as the remaining deck.
   */

  startNewRound: () => {
    const newDeck = shuffleDeck(generateDeck());
    const newHand = newDeck.slice(0, 5);
    const remainingDeck = newDeck.slice(5);

    set({ deck: remainingDeck, hand: newHand });
  },

  /**
   *
   * Toggles whether a card at the given index is marked for discarding.
   * If its already marked, its unmarked, and vice versa.
   *
   * @param index: The index of the card in `hand`to toggle.
   */

  toggleDiscard: (index) => {
    set((state) => {
      if (state.selectedForDiscard.includes(index)) {
        return {
          selectedForDiscard: state.selectedForDiscard.filter(
            (i) => i !== index,
          ),
        };
      } else {
        return { selectedForDiscard: [...state.selectedForDiscard, index] };
      }
    });
  },

  /**
   * Confirms the discard: Moves the cards marked in `selectedForDiscard` from `hand`to `DiscardedCards`
   * and replaces them with new cards drawn from the top of `deck`.
   * Clears `selectedForDiscard`afterwards.
   */
  confirmDiscard: () => {
    set((state) => {
      const kept = state.hand.filter(
        (card, index) => !state.selectedForDiscard.includes(index),
      );

      const removed = state.hand.filter((card, index) =>
        state.selectedForDiscard.includes(index),
      );

      const newCards = state.deck.slice(0, removed.length);
      const remainingDeck = state.deck.slice(removed.length);

      return {
        hand: [...kept, ...newCards],
        deck: remainingDeck,
        discardedCards: [...state.discardedCards, ...removed],
        selectedForDiscard: [],
      };
    });
  },
}));
