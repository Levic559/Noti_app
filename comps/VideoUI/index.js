import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'

const VideoCont = styled.div `
    max-width: 1080px;
    margin: 50px;
`

const VideoUI =({
    
})=>
{
    return<VideoCont>
        <ReactPlayer 
        url='promotional_video.mp4'
        width='100%'
        height='100%' 
        controls
        playing={true} 
        loop={true} 
        muted={true}
        />
    </VideoCont>
}

export default VideoUI