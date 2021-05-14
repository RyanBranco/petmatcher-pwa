import Image from "next/image"
import styles from "../../styles/components/animalTag/animalTag.module.css"
import { randomNum } from "../../lib/functions"

export default function AnimalTag({ onClick, avatar, name, type, alias, gender }) {
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        onClick()
    }

    return (
        <div onClick={handleClick} className="display-flex-row align-center cursor-pointer">
            <div className={`${styles.animalAvatarContainer} margin-right-small`}>
                <Image 
                    src={`${avatar}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                />
            </div>
            <div className="display-flex-column">
                <small className={`bottom-margin-none gradient-text ${gender === "female" ? "gradient-female" : "gradient-male"} weight-700 text-shadow-white`}>@{alias}</small>
                <div className="display-flex-row align-center">
                    <p className={`weight-700 display-inline gradient-text gradient-${randomNum(1, 7)} text-shadow-white margin-0`}>{name} the {type}</p>
                </div>
            </div>
        </div>
    )

}