import { useGameStore } from "../store/gameStore";

/**
 * Displays the current players coin balance.
 */
function TotalCoins() {
  const currentPlayer = useGameStore((state) => state.currentPlayer);

  if (!currentPlayer) {
    return null;
  }

  return <p>Mynter: {currentPlayer.coins}</p>;
}

export default TotalCoins;
