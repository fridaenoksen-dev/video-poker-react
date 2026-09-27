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
    if (name.trim() === "") return;
    addPlayer(name.trim());
    setName("");
  }

  function handleSelectPlayer(id: string) {
    selectPlayer(id);
    navigate("/spill");
  }

  return (
    <div>
      <h1>Velg spiller</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <button onClick={() => handleSelectPlayer(player.id)}>
              {player.name} ({player.coins} mynter)
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Navn på ny spiller"
      />
      <button onClick={handleCreatePlayer}>Opprett ny spiller</button>
      <br />
      <div className="nav">
        <Link to="/regler">Se reglene</Link>
      </div>
    </div>
  );
}

export default VelgSpiller;
