import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlayingCard } from "../types/PlayingCards";
import type { Player } from "../types/Player";
import { shuffleDeck } from "../utils/shuffleDeck";
import { generateDeck } from "../utils/generateDeck";
import { evaluateHand } from "../utils/evaluateHand";
import { payoutTable } from "../utils/payoutTable";

type GameStore = {
  players: Player[];
  deck: PlayingCard[];
  hand: PlayingCard[];
  selectedForDiscard: number[];
  discardedCards: PlayingCard[];
  currentPlayer: Player | null;
  startNewRound: () => void;
  toggleDiscard: (index: number) => void;
  confirmDiscard(): void;
  addPlayer: (name: string) => void;
  selectPlayer: (id: string) => void;
  currentBet: number;
  setBet: (amount: number) => void;
  roundActive: boolean;
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
export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      players: [],
      currentBet: 1,
      deck: [],
      hand: [],
      selectedForDiscard: [],
      discardedCards: [],
      currentPlayer: null,
      roundActive: false,

      /**
       * Starts a new round: Generates and shuffles a full deck,
       * dels 5 cards to the players hand and stores the rest as the remaining deck.
       */

      startNewRound: () => {
        const newDeck = shuffleDeck(generateDeck());
        const newHand = newDeck.slice(0, 5);
        const remainingDeck = newDeck.slice(5);

        set((state) => {
          if (!state.currentPlayer) return {};
          if (state.roundActive) return {};
          if (state.currentPlayer.coins < state.currentBet) return {};

          const updatedCurrentPlayer = {
            ...state.currentPlayer,
            coins: state.currentPlayer.coins - state.currentBet,
          };

          const updatedPlayers = state.players.map((player) =>
            player.id === state.currentPlayer?.id
              ? { ...player, coins: player.coins - state.currentBet }
              : player,
          );

          return {
            deck: remainingDeck,
            hand: newHand,
            roundActive: true,
            currentPlayer: updatedCurrentPlayer,
            players: updatedPlayers,
          };
        });
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
          if (!state.roundActive) return {};
          const kept = state.hand.filter(
            (_card, index) => !state.selectedForDiscard.includes(index),
          );

          const removed = state.hand.filter((_card, index) =>
            state.selectedForDiscard.includes(index),
          );

          const newCards = state.deck.slice(0, removed.length);
          const remainingDeck = state.deck.slice(removed.length);
          const newHand = [...kept, ...newCards];

          const result = evaluateHand(newHand);
          const payoutRow = payoutTable.find((row) => row.hand === result);
          const winnings = (payoutRow?.payout ?? 0) * state.currentBet;

          const updatedCurrentPlayer = state.currentPlayer
            ? {
                ...state.currentPlayer,
                coins: state.currentPlayer.coins + winnings,
              }
            : null;

          const updatedPlayers = state.players.map((player) =>
            player.id === state.currentPlayer?.id
              ? { ...player, coins: player.coins + winnings }
              : player,
          );

          return {
            hand: newHand,
            deck: remainingDeck,
            discardedCards: [...state.discardedCards, ...removed],
            selectedForDiscard: [],
            currentPlayer: updatedCurrentPlayer,
            players: updatedPlayers,
            roundActive: false,
          };
        });
      },

      /**
       * Creates a new player with the given name.
       * And adds the player to the list of players.
       *
       * @param name The name of the new player
       */

      addPlayer: (name) => {
        set((state) => {
          const newPlayer: Player = {
            id: crypto.randomUUID(),
            name,
            coins: 100,
          };

          return { players: [...state.players, newPlayer] };
        });
      },

      /**
       * Sets the player with the given id as the current player.
       * If thers no player with that id, the current player is set to null.
       *
       * @param id The id of the player to select.
       *
       */

      selectPlayer: (id) => {
        set((state) => {
          const player = state.players.find((p) => p.id === id);
          return { currentPlayer: player ?? null };
        });
      },
      /**
       * Sets the amount for betting the next round
       *
       * @param amount the number of coins to bet.
       */

      setBet: (amount) => {
        set({ currentBet: amount });
      },
    }),
    {
      name: "video-poker-storage",
    },
  ),
);
