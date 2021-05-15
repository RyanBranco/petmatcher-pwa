import {useRef, useState, useEffect} from "react"
import Play from "../Images/Svgs/Icons/Play"
import Pause from "../Images/Svgs/Icons/Pause"
import VolumeOn from "../Images/Svgs/Icons/VolumeOn"
import VolumeMute from "../Images/Svgs/Icons/VolumeMute"
import Replay from "../Images/Svgs/Icons/Replay"
import styles from "./PostMedia.module.css"

export default function PostMedia({ postData, visibility }) {
    const videoPlayer = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [mute, setMute] = useState(false)
    const [videoProgress, setVideoProgress] = useState(0)

    const handleLoad = () => {
        // This is needed because of autoplay, and 
        // autoPlay is needed to show the poster on
        // IOS (or else it's just a white screen)
        // This is a temp solution: see Jira ticket
        // #--- for the better solution
        videoPlayer.current.pause()
    }

    const handlePlay = () => {
        if (playing){
            setPlaying(false)
            videoPlayer.current.pause()
        } else {
            setPlaying(true)
            videoPlayer.current.play()
        }
    }

    const handleVolume = () => {
        if (mute) {
            setMute(false)
            videoPlayer.current.muted = false
        } else {
            setMute(true)
            videoPlayer.current.muted = true
        }
    }

    const handleTimeUpdate = () => {
        setVideoProgress((100 / videoPlayer.current.duration) * videoPlayer.current.currentTime) 
    }

    const handleRestart = () => {
        videoPlayer.current.currentTime = 0
    }

    return (
        <>
            {
            postData.srcType === "video" &&
            <>
            <div className={`${styles.postMediaContainer} ${visibility} display-flex-column align-end justify-end absolute width-100 height-100`}>
                <div onClick={handleRestart} className={`${styles.controls} padding-10`}>
                    <Replay height={40} />
                </div>
                <div onClick={handleVolume} className={`${!mute ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <VolumeOn height={40} />
                </div>
                <div onClick={handleVolume} className={`${mute ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <VolumeMute height={40} />
                </div>
                <div onClick={handlePlay} className={`${!playing ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <Play height={40} />
                </div>
                <div onClick={handlePlay} className={`${playing ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <Pause height={40} />
                </div>
                <div style={{width: `${videoProgress}%`}} className={`${styles.progressBar} gradient-success absolute`}></div>
            </div>
            <video onLoad={() => handleLoad()} onTimeUpdate={handleTimeUpdate} ref={videoPlayer} autoPlay loop playsInline preload="metadata" disablePictureInPicture className="border-radius-10 width-100" src={postData.src} alt={postData.description}></video>
            </>
            }
            {
            postData.srcType === "image" &&
            <img className="border-radius-10 width-100" src={postData.src} alt={postData.description}></img>
            }
        </>
    )
}