import React from "react";
import StreamData from "./GamesData/StreamData";

const StreamContainer = () => {
  return (
    <>
      <h2 className="gameplay-heading">Top Stream Videos</h2>
      <section className="v">
        {StreamData.map((elem) => {
          const { vid, id } = elem;
          return (
            <div key={id}>
              <div className="video-container">
                <div className="video-flex">
                  {/* <img src={vid} alt="" /> */}
                  <video src={vid} autoPlay  controls className="stream"></video>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default StreamContainer;
