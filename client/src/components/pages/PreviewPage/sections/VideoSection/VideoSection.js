import React, { useState } from "react";
import "./VideoSection.scss";
import YoutubeVideo from "../../../../YoutubeVideo";


const VideoSection = () => {
    const [view, setView] = useState(false)

    console.log(view)

    return (
        <section className="section video-section">
            <div className="ddd" onClick={() => setView(false)}></div>
            <img
                style={view ? {visibility: "hidden"} : {visibility: "visible"}}
                src="/images/play.png"
                alt="play"
                className="video-section__img"
                onClick={() => setView(true)}
            />
            <div>
                {view ? <YoutubeVideo /> : ""}
            </div>

        </section>

    );
};

export default VideoSection;
