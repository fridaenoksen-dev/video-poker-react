import { useGameStore } from "../store/gameStore";
import Card from "./Card";
import CurrentHand from "./CurrentHand";
import PayoutTable from "./PayoutTable";
import TotalCoins from "./TotalCoins";
import CurrentBet from "./CurrentBet";
import "./Game.css";
import { Link } from "react-router";

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
  const roundActive = useGameStore((state) => state.roundActive);
  const setBet = useGameStore((state) => state.setBet);
  const currentBet = useGameStore((state) => state.currentBet);

  return (
    <div className="page game-board">
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
        <div className="betting-buttons">
          {[1, 2, 3, 4, 5].map((amount) => (
            <button
              key={amount}
              onClick={() => setBet(amount)}
              disabled={roundActive}
              className={amount === currentBet ? "betting-selected" : ""}
            >
              {amount}
            </button>
          ))}
        </div>
        <button onClick={confirmDiscard} disabled={!roundActive}>
          Bekreft kasting av kort
        </button>
        <button onClick={startNewRound} disabled={roundActive}>
          Start ny runde
        </button>
      </div>
    </div>
  );
}

export default Game;
