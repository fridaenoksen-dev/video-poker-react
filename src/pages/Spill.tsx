import { useGameStore } from "../store/gameStore";

function Spill() {
  const hand = useGameStore((state) => state.hand);
  const startNewRound = useGameStore((state) => state.startNewRound);

  return (
    <div>
      <button onClick={startNewRound}>Start ny runde</button>
      {hand.map((card, index) => (
        <p key={index}>
          {card.suit} - {card.value}
        </p>
      ))}
    </div>
  );
}

export default Spill;
