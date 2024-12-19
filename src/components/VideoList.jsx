import React, { useState } from 'react';

const VideoList = () => {
  // Sample video data - in practice, this could come from an API or config file
  const videos = [
    {
      id: 1,
      title: 'Sample Video 1',
      src: '/videos/verticalmockup.mp4',
      thumbnail: '/videos/thumbnails/verticalmockup.mp4'
    },
    {
      id: 2,
      title: 'Sample Video 2',
      src: '/videos/sample2.mp4',
      thumbnail: '/videos/thumbnails/horizontalMockUp.mp4'
    }
  ];

  const copyToClipboard = (videoSrc) => {
    const fullUrl = `${window.location.origin}${videoSrc}`;
    navigator.clipboard.writeText(fullUrl)
      .then(() => {
        alert('Video link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy link:', err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">HSE Video Storage</h1>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <video
                  controls
                  className="w-full rounded"
                  poster={video.thumbnail}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <button
                onClick={() => copyToClipboard(video.src)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Copy Video Link
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VideoList;