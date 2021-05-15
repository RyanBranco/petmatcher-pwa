import { useState } from "react"
import PostHeader from "./PostHeader"
import PostActions from "./PostActions"
import PostMedia from "./PostMedia"
import styles from "./post.module.css"

export default function Post({ postData, handleOptionRender }) {
    const [actionsVisibility, setActionsVisibility] = useState("display-none opacity-0")
    const [overlayVisibility, setOverlayVisibility] = useState("display-flex-column opacity-100")

    const handlePostClick = (clickType) => {
        if (clickType === "overlay") {
            setTimeout(() => {
                setActionsVisibility("display-flex-column opacity-100")
                setOverlayVisibility("display-none opacity-0")
            }, 75)
            setActionsVisibility("display-flex-column opacity-0")
            setOverlayVisibility("display-flex-column opacity-0")
        } else {
            setTimeout(() => {
                setActionsVisibility("display-none opacity-0")
                setOverlayVisibility("display-flex-column opacity-100")
            }, 75)
            setActionsVisibility("display-flex-column opacity-0")
            setOverlayVisibility("display-flex-column opacity-0")
        }
    }

    return (
        <div className={`${styles.postContainer} border-radius-10 display-flex-column normal-shadow`}>
            <PostMedia postData={{src: postData.src, srcType: postData.srcType, description: postData.description}} />
            <div onClick={() => handlePostClick("overlay")} className={`${styles.postUiOverlay} ${overlayVisibility} justify-between height-100 width-100 padding-5 padding-top-bottom-10`}>
                <PostHeader animal={postData.animal} />
                <p className={`${styles.postDescription} color-white weight-700 text-shadow-black margin-0 padding-left-right-10`}>{postData.description}</p>
            </div>
            <div onClick={() => handlePostClick("actions")} className={`${styles.postActionsContainer} ${actionsVisibility} height-100 width-100 border-radius-10`}>
                <PostActions handleOptionRender={handleOptionRender} postData={postData} />
            </div>
        </div>
    )
}