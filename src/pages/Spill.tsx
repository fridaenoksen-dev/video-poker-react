import { useGameStore } from "../store/gameStore";

function Spill() {
  const hand = useGameStore((state) => state.hand);
  const startNewRound = useGameStore((state) => state.startNewRound);
  const toggleDiscard = useGameStore((state) => state.toggleDiscard);
  const selectedForDiscard = useGameStore((state) => state.selectedForDiscard);
  const confirmDiscard = useGameStore((state) => state.confirmDiscard);

  return (
    <div>
      <button onClick={startNewRound}>Start ny runde</button>
      <button onClick={confirmDiscard}>Bekreft kasting av kort</button>
      <p>Kast: {selectedForDiscard.join(", ")}</p>
      {hand.map((card, index) => (
        <p key={index}>
          <button onClick={() => toggleDiscard(index)}>
            {card.suit} - {card.value}
          </button>
        </p>
      ))}
    </div>
  );
}

export default Spill;
