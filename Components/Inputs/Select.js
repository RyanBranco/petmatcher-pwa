import DownArrow from "../Images/Svgs/Icons/DownArrow"
import styles from "../../styles/components/inputs/Select.module.css"

export default function Select({ value, id, onChange }) {

    const handleFocus = () => {
        window.navigator.vibrate(50)
    }

    const handleChange = (e) => {
        onChange
    }

    return (
        <div className="display-inline-flex align-end">
            <div className="display-inline-flex-column">
                <label className="bottom-margin-extra-small" htmlFor={id}><small>{id}</small></label>
                <div className="display-inline-flex gradient-2 padding-2 border-radius-12 clickable-shadow">
                    <select value={value} onChange={handleChange} onFocus={handleFocus} id={id} className={`${styles.select} width-100 background-white border-radius-10 padding-5 padding-left-right-10`}>
                        <optgroup label="common pets">
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </optgroup>
                        <optgroup label="else">
                            <option value="lizard">lizard</option>
                            <option value="horse">horse</option>
                            <option value="hamster">Hamster</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <span className={`${styles.downArrowContainer} display-flex-row align-center`}>
                <DownArrow height={20} />
            </span>
        </div>
    )
}