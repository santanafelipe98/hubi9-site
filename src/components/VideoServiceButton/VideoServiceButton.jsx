import React from 'react'
import './VideoServiceButton.css'
import picture from './video_service.webp'

const VideoServiceButton = props => (
    <button {...props}  className="VideoServiceButton">
        <div className="videoServiceThumb">
            <img src={picture} alt="Videoatendimento" className="videoServicePicture" />
        </div>
        Videoatendimento
    </button>
)

export default VideoServiceButton