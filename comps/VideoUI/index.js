import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'

const VideoCont = styled.div `
    max-width: 1080px;
    margin: 50px;
`

const VideoUI =({
    // VideoSrc={video},
    autoPlay='autoplay'
})=>
{
    return<VideoCont>
        <ReactPlayer 
        url='promotional_video.mp4'
        width='100%'
        height='100%' 
        controls 
        playing
        // loop
        muted/>
    </VideoCont>
}

export default VideoUI