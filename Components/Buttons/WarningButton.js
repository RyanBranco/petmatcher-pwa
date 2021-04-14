import styles from "../../styles/components/buttons/WarningButton.module.css"

export default function WarningButton({ buttonText, onClick, disabled }) {

    const handleClick = () => {
        () => onClick()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`${styles.warningButton} clickable-shadow border-radius-10 gradient-warning padding-5 padding-left-right-10 weight-500 color-white cursor-pointer margin-1`}>
            {buttonText}
        </button>
    )
}