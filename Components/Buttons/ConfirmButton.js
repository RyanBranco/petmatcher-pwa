import { useState, useEffect } from "react"
import clickSound from "../../audio/buttonClick2.mp3"
import styles from "../../styles/components/buttons/ConfirmButton.module.css"

export default function ConfirmButton({ buttonText, onClick, disabled }) {

    // set sound on server to null
    const [sound, setSound] = useState(null)

    useEffect(() => {
        setSound(new Audio(clickSound))
    }, [])
    
    const handleClick = () => {
        // window.navigator.vibrate(50)
        setSound(new Audio(clickSound))
        sound.play()
        onClick
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`${styles.confirmButton} clickable-shadow border-radius-12 gradient-success padding-5 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}