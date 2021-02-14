import React from 'react';
import "./YoutubeVideo.scss";
import YouTube from 'react-youtube';

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}


const YoutubeVideo = () => {
    const opts = {
        height: '400',
        width: '650',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };

    return (
        <YouTube
            className="youtube-video"
            videoId="ZDN4oTHKyaw"
            opts={opts}
            onReady={onReady}
        />
    );
};


export default YoutubeVideo;
