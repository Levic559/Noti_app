import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'

const VideoCont = styled.div `
    max-width: 1920px;
    max-height: 1080px;
    margin: 30px;
    // min-width: 960px;
    // mix-height: 540px;
`

const VideoUI =({
    // VideoSrc={video},
    autoPlay='autoplay'
})=>
{
    return<VideoCont>
        <ReactPlayer 
        url='promote.mp4'
        width='70%'
        height='70%' 
        controls 
        // playing
        loop
        muted/>
    </VideoCont>
}

export default VideoUI