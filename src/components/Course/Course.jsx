import React from "react";

const videos = [
  {
    src: "https://www.youtube.com/embed/vz1RlUyrc3w",
    title: "Video Title 1",
  },
  {
    src: "https://youtu.be/yNbnA5pryMg?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
    title: "Video Title 2",
  },
  {
    src: "https://www.youtube.com/embed/vz1RlUyrc3w",
    title: "Video Title 8",
  },
  {
    src: "https://www.youtube.com/embed/vz1RlUyrc3w",
    title: "Video Title 8",
  },
  {
    src: "https://www.youtube.com/embed/vz1RlUyrc3w",
    title: "Video Title 8",
  },
  {
    src: "https://www.youtube.com/embed/vz1RlUyrc3w",
    title: "Video Title 8",
  },
  {
    src: "https://youtu.be/-ETQ97mXXF0?si=mq3KM7w285y2Dln8",
    title: "Video Title 8",
  },
];

function Course() {
  const videosPerRow = 4;

  // Split videos into arrays with max videosPerRow items
  const videoRows = videos.reduce((acc, video, index) => {
    const rowIndex = Math.floor(index / videosPerRow);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(video);
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Videos</h1>
        {videoRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex my-6 gap-4">
            {row.map((video, index) => (
              <div key={index} className="sm:min-w-60 lg:w-[19rem] flex-shrink-0 relative bg-white rounded-lg shadow-lg">
                <div style={{ paddingTop: "57%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={video.src}
                    title={video.title}
                  ></iframe>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
