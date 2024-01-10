import { useState } from "react"
import '../App.css';

export default function PlayerInfo({ name, logo, isActive }) {
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
        <span className={isActive ? "active" : undefined}>
            {editablePlayerName}
            <span className="playerLogo">{logo}</span>
            <button className="edit" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </span>
    )
}

