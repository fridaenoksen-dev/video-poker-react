import { useGameStore } from "../store/gameStore";
import Card from "./Card";
import CurrentHand from "./CurrentHand";
import PayoutTable from "./PayoutTable";
import TotalCoins from "./TotalCoins";
import CurrentBet from "./CurrentBet";
import "./Game.css";
import { Link } from "react-router";
import "../App.css";

/**
 * The main gamoe board that shows the payout table,
 * current hand, coins, bet and the players cards.
 * Controls to start a round, mark cards for discard and confirm the swap.
 */
function Game() {
  const hand = useGameStore((state) => state.hand);
  const startNewRound = useGameStore((state) => state.startNewRound);
  const toggleDiscard = useGameStore((state) => state.toggleDiscard);
  const selectedForDiscard = useGameStore((state) => state.selectedForDiscard);
  const confirmDiscard = useGameStore((state) => state.confirmDiscard);

  return (
    <div className="game-board">
      <div className="nav">
        <Link to="/">Bytt spiller</Link>
        <Link to="/regler">Regler</Link>
      </div>
      <PayoutTable />
      <div className="game-info">
        <TotalCoins />
        <CurrentBet />
      </div>
      <CurrentHand />

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
        <button onClick={confirmDiscard}>Bekreft kasting av kort</button>
        <button onClick={startNewRound}>Start ny runde</button>
      </div>
    </div>
  );
}

export default Game;
