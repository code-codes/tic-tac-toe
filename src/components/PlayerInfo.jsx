import { useState } from "react"
import { useEffect } from "react";
import '../App.css';

export default function PlayerInfo({ name, logo }) {
    const [playerName, setPlayerName] = useState(name)
    const [ isEditing, setIsEditing ] = useState(false)

    function handleEditClick () {
        setIsEditing((editing)=>!editing)
    }
    function handleSaveClick(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="playerName">{playerName}</span>
    if(isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleSaveClick}/>
    }
    return (
        <span className="player">
            {editablePlayerName}
            <span className="playerLogo">{logo}</span>
            <button className="edit" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </span>
    )
}

