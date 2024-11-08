import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let editContent = isEditing ? <input type="text" required value={playerName} onChange={handleChange} /> : (
    <span className="player-name">
      {playerName}
    </span>
  );

  function handleEdit() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editContent}
        <span className="player-symbol" >
          {symbol}
        </span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}