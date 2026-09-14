import { useGameStore } from "../store/gameStore";

function Spill() {
  const hand = useGameStore((state) => state.hand);

  return (
    <div>
      {hand.map((card, index) => (
        <p key={index}>
          {card.suit} - {card.value}
        </p>
      ))}
    </div>
  );
}

export default Spill;
