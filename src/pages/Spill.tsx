import { useGameStore } from "../store/gameStore";
import Card from "../components/Card";
import { isStraight } from "../utils/isStraight";

function Spill() {
  const hand = useGameStore((state) => state.hand);
  const startNewRound = useGameStore((state) => state.startNewRound);
  const toggleDiscard = useGameStore((state) => state.toggleDiscard);
  const selectedForDiscard = useGameStore((state) => state.selectedForDiscard);
  const confirmDiscard = useGameStore((state) => state.confirmDiscard);

  console.log(isStraight(hand));
  return (
    <div className="game-controls">
      <div className="hand">
        {hand.map((card, index) => (
          <Card
            key={index}
            card={card}
            isSelected={selectedForDiscard.includes(index)}
            onClick={() => toggleDiscard(index)}
          />
        ))}
      </div>
      <button onClick={startNewRound}>Start ny runde</button>
      <button onClick={confirmDiscard}>Bekreft kasting av kort</button>
    </div>
  );
}

export default Spill;
