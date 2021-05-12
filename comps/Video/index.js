import React from 'react'
import styled from 'styled-components'

const VideoCont = styled.div `
    max-width: 1920px;
    max-height: 1080px;
    // min-width: 960px;
    // mix-height: 540px;
`

const Video =({
    // VideoSrc={video},
    autoPlay='autoplay'
})=>
{
    return<VideoCont>
        <video width='960px' controls muted preload='auto' scr='test.mp4' type='video/mp4'>
        </video>
    </VideoCont>
}

export default Video