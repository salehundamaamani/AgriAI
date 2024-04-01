import React from 'react';

const Learn = () => {
  // URL of the YouTube video you want to embed
  const videoUrl = 'https://www.youtube.com/embed/ZM2X-XBRKHM'; // Replace VIDEO_ID with your actual video ID

  return (
    <div className="mt-8 mx-10">
    <br/>

      <h1 className="text-3xl text-orange-900 font-bold ">COURSE 1</h1>
      <br/>
      <iframe
        width="966"
        height="548"
        src={videoUrl}
        title="Plant Disease"
        frameborder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br/>
    </div>
  );
};

export default Learn;
