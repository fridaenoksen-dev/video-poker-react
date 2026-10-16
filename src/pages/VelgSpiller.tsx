import { useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "../store/gameStore";
import { Link } from "react-router";

/**
 * Lets the user pick an existing player or create a new one.
 * When selecting a player, you get navigated to the game screen.
 *
 */

function VelgSpiller() {
  const players = useGameStore((state) => state.players);
  const addPlayer = useGameStore((state) => state.addPlayer);
  const selectPlayer = useGameStore((state) => state.selectPlayer);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleCreatePlayer() {
    event?.preventDefault();
    if (name.trim() === "") return;
    addPlayer(name.trim());
    setName("");
  }

  function handleSelectPlayer(id: string) {
    selectPlayer(id);
    navigate("/spill");
  }

  return (
    <div className="page">
      <h1>Velg spiller</h1>
      <div className="nav">
        <Link to="/regler">Se reglene</Link>
      </div>
      <ul className="player-list">
        {players.map((player) => (
          <li key={player.id}>
            <button onClick={() => handleSelectPlayer(player.id)}>
              {player.name} ({player.coins} mynter)
            </button>
          </li>
        ))}
      </ul>
      <form className="new-player-form" onSubmit={handleCreatePlayer}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Navn på ny spiller"
          aria-label="Navn på ny spiller"
        />
        <button type="submit">Opprett ny spiller</button>
      </form>
    </div>
  );
}

export default VelgSpiller;
