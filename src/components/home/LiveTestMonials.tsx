// import React, { useState, useEffect, useRef } from 'react';
// import './LiveTestMonials.css';

// interface Video {
//   url: string;
//   clientName: string;
//   linkedinUrl: string;
//   linkedinHandle: string;
//   company: string;
// }

// interface VideoPopupProps {
//   videoUrl: string;
//   onClose: () => void;
// }

// const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-4 relative w-3/4 max-w-4xl">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//         <video className="w-full h-96 rounded-lg" controls autoPlay>
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// const VideoCarousel: React.FC = () => {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState<'left' | 'right' | null>(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const videos: Video[] = [
//     {
//       url: 'https://sample-videos.com/',
//       clientName: 'John Doe',
//       linkedinUrl: 'https://www.linkedin.com/in/johndoe',
//       linkedinHandle: '@johndoe',
//       company: 'Acme Corp',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Jane Smith',
//       linkedinUrl: 'https://www.linkedin.com/in/janesmith',
//       linkedinHandle: '@janesmith',
//       company: 'Beta Inc',
//     },
//     {
//       url: 'https://sample-videos.com/video321',
//       clientName: 'Alex Brown',
//       linkedinUrl: 'https://www.linkedin.com/in/alexbrown',
//       linkedinHandle: '@alexbrown',
//       company: 'Gamma LLC',
//     },
//     {
//       url: 'https://sample-videos.com/',
//       clientName: 'Emily Davis',
//       linkedinUrl: 'https://www.linkedin.com/in/emilydavis',
//       linkedinHandle: '@emilydavis',
//       company: 'Delta Solutions',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Michael Lee',
//       linkedinUrl: 'https://www.linkedin.com/in/michaellee',
//       linkedinHandle: '@michaellee',
//       company: 'Epsilon Group',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Michael Lee',
//       linkedinUrl: 'https://www.linkedin.com/in/michaellee',
//       linkedinHandle: '@michaellee',
//       company: 'Epsilon Group',
//     },
//   ];

//   // Show only one video at a time for smooth one-by-one animation
//   const videosPerPage = 2;
//   const totalPages = Math.ceil(videos.length / videosPerPage);

//   const handleNext = () => {
//     if (videos.length <= videosPerPage || isAnimating) return;
//     setDirection('right');
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + videosPerPage >= videos.length ? 0 : prevIndex + videosPerPage
//       );
//       setIsAnimating(false);
//     }, 500); // match transition duration
//   };

//   const handlePrev = () => {
//     if (videos.length <= videosPerPage || isAnimating) return;
//     setDirection('left');
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex - videosPerPage < 0 ? (totalPages - 1) * videosPerPage : prevIndex - videosPerPage
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handlePlayClick = (videoUrl: string) => {
//     setSelectedVideo(videoUrl);
//   };

//   const handleClosePopup = () => {
//     setSelectedVideo(null);
//   };

//   // Animation classes for single card
//   const getAnimationClass = () => {
//     if (!direction || !isAnimating) return '';
//     return direction === 'right' ? 'slide-group-left' : 'slide-group-right';
//   };

//   const displayedVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

//   return (
//     <div className="flex flex-col items-center py-8 bg-white">
      
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Clients' Experience</h1>
//       <div className="flex items-center space-x-8">
//         <button 
//           onClick={handlePrev}
//           className={`bg-white rounded-full p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''}`}
//           disabled={isAnimating}
//           title="Previous testimonial"
//         >
//           <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//         </button>
//         <div className="overflow-hidden w-[52rem]">
//           <div
//             className={`flex space-x-6 transition-transform duration-500 ease-in-out ${getAnimationClass()}`}
//             onTransitionEnd={() => setDirection(null)}
//           >
//             {displayedVideos.map((video, index) => (
//               <div key={`${currentIndex}-${index}`} className="bg-purple-50/80 rounded-lg shadow-lg p-6 flex-shrink-0">
//                 <div className="relative w-96 h-56 bg-gray-300 rounded-lg flex items-center justify-center">
//                   <button
//                     onClick={() => handlePlayClick(video.url)}
//                     className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200"
//                     title="Play video"
//                   >
//                     <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M8 5v14l11-7z"></path>
//                     </svg>
//                   </button>
//                 </div>
//                 {/* Info below video */}
//                 <div className="mt-5 text-sm text-gray-700 flex flex-col items-start">
//                   <a
//                     href={video.linkedinUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-purple-600 hover:underline flex items-center gap-6 mb-2"
//                     title={`View ${video.clientName}'s LinkedIn profile`}
//                   >
//                     <svg className="w-12 h-12 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.866-3.06-1.868 0-2.154 1.459-2.154 2.966v5.698h-3v-11h2.878v1.496h.041c.401-.761 1.386-1.557 2.848-1.557 3.044 0 3.603 2.002 3.603 4.604v6.457z"/>
//                     </svg>
//                     <span className="flex flex-col items-start">
//                       <span className="font-bold text-base text-gray-900 leading-tight">{video.clientName}</span>
//                       <span className="text-gray-500 text-sm leading-tight">{video.company}</span>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button 
//           onClick={handleNext}
//           className={`bg-white rounded-full p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''}`}
//           disabled={isAnimating}
//           title="Next testimonial"
//         >
//           <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//       {selectedVideo && (
//         <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// };

// export default VideoCarousel;










// import React, { useState } from 'react';
// import './LiveTestMonials.css';

// interface Video {
//   url: string;
//   clientName: string;
//   linkedinUrl: string;
//   linkedinHandle: string;
//   company: string;
// }

// interface VideoPopupProps {
//   videoUrl: string;
//   onClose: () => void;
// }

// const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-4 relative w-11/12 max-w-4xl">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <video className="w-full h-64 sm:h-96 rounded-lg" controls autoPlay>
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// const VideoCarousel: React.FC = () => {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState<'left' | 'right' | null>(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const videos: Video[] = [
//     {
//       url: 'https://sample-videos.com/',
//       clientName: 'John Doe',
//       linkedinUrl: 'https://www.linkedin.com/in/johndoe',
//       linkedinHandle: '@johndoe',
//       company: 'Acme Corp',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Jane Smith',
//       linkedinUrl: 'https://www.linkedin.com/in/janisth',
//       linkedinHandle: 'Jane Smith',
//       company: 'Beta Inc',
//     },
//     {
//       url: 'https://sample-videos.com/video321',
//       clientName: 'Alex Brown',
//       linkedinUrl: 'https://www.linkedin.com/in/alexbrown',
//       linkedinHandle: '@alexbrown',
//       company: 'Gamma LLC',
//     },
//     {
//       url: 'https://sample-videos.com/',
//       clientName: 'Emily Davis',
//       linkedinUrl: 'https://www.linkedin.com/in/emilydavis',
//       linkedinHandle: '@emilydavis',
//       company: 'Delta Solutions',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Michael Lee',
//       linkedinUrl: 'https://www.linkedin.com/in/michaellee',
//       linkedinHandle: '@michaellee',
//       company: 'Epsilon Group',
//     },
//   ];

//   const videosPerPage = 2;
//   const totalPages = Math.ceil(videos.length / videosPerPage);

//   const handleNext = () => {
//     if (videos.length <= videosPerPage || isAnimating) return;
//     setDirection('right');
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + videosPerPage >= videos.length ? 0 : prevIndex + videosPerPage
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handlePrev = () => {
//     if (videos.length <= videosPerPage || isAnimating) return;
//     setDirection('left');
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex - videosPerPage < 0 ? (totalPages - 1) * videosPerPage : prevIndex - videosPerPage
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handlePlayClick = (videoUrl: string) => {
//     setSelectedVideo(videoUrl);
//   };

//   const handleClosePopup = () => {
//     setSelectedVideo(null);
//   };

//   const getAnimationClass = () => {
//     if (!direction || !isAnimating) return '';
//     return direction === 'right' ? 'slide-group-left' : 'slide-group-right';
//   };

//   const displayedVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

//   return (
//     <div className="flex flex-col items-center py-8 bg-white">
//       <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Clients' Experience</h1>
//       <div className="flex items-center space-x-4 sm:space-x-8 w-full max-w-4xl carousel-container">
//         <button
//           onClick={handlePrev}
//           className={`bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''} nav-button`}
//           disabled={isAnimating}
//           title="Previous testimonial"
//         >
//           <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <div className="overflow-hidden w-full">
//           <div
//             className={`flex space-x-4 sm:space-x-6 transition-transform duration-500 ease-in-out ${getAnimationClass()}`}
//             onTransitionEnd={() => setDirection(null)}
//           >
//             {displayedVideos.map((video, index) => (
//               <div key={`${currentIndex}-${index}`} className="bg-purple-50/80 rounded-lg shadow-lg p-4 sm:p-6 flex-shrink-0 video-card w-full sm:w-96">
//                 <div className="relative w-full h-48 sm:h-56 bg-gray-300 rounded-lg flex items-center justify-center video-player">
//                   <button
//                     onClick={() => handlePlayClick(video.url)}
//                     className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200"
//                     title="Play video"
//                   >
//                     <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="mt-4 text-sm text-gray-700 flex flex-col items-start">
//                   <a
//                     href={video.linkedinUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-purple-600 hover:underline flex items-center gap-4 mb-2"
//                     title={`View ${video.clientName}'s LinkedIn profile`}
//                   >
//                     <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.866-3.06-1.868 0-2.154 1.459-2.154 2.966v5.698h-3v-11h2.878v1.496h.041c.401-.761 1.386-1.557 2.848-1.557 3.044 0 3.603 2.002 3.603 4.604v6.457z" />
//                     </svg>
//                     <span className="flex flex-col items-start">
//                       <span className="font-bold text-base text-gray-900 leading-tight client-name">{video.clientName}</span>
//                       <span className="text-gray-500 text-sm leading-tight">{video.company}</span>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           onClick={handleNext}
//           className={`bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''} nav-button`}
//           disabled={isAnimating}
//           title="Next testimonial"
//         >
//           <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//       {selectedVideo && (
//         <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// };

// export default VideoCarousel;












// import React, { useState } from 'react';
// import './LiveTestMonials.css';

// interface Video {
//   url: string;
//   clientName: string;
//   linkedinUrl: string;
//   linkedinHandle: string;
//   company: string;
// }

// interface VideoPopupProps {
//   videoUrl: string;
//   onClose: () => void;
// }

// const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-4 relative w-11/12 max-w-4xl">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <video className="w-full h-64 sm:h-96 rounded-lg" controls autoPlay>
//           <source src={videoUrl} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// const VideoCarousel: React.FC = () => {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState<'left' | 'right' | null>(null);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const videos: Video[] = [
//     {
//       url: 'https://sample-videos.com/',
//       clientName: 'John Doe',
//       linkedinUrl: 'https://www.linkedin.com/in/johndoe',
//       linkedinHandle: '@johndoe',
//       company: 'Acme Corp',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Jane Smith',
//       linkedinUrl: 'https://www.linkedin.com/in/janisth',
//       linkedinHandle: 'Jane Smith',
//       company: 'Beta Inc',
//     },
//     {
//       url: 'https://sample-videos.com/video321',
//       clientName: 'Alex Brown',
//       linkedinUrl: 'https://www.linkedin.com/in/alexbrown',
//       linkedinHandle: '@alexbrown',
//       company: 'Gamma LLC',
//     },
//     {
//       url: 'https://sample-videos.com/',
//       clientName: 'Emily Davis',
//       linkedinUrl: 'https://www.linkedin.com/in/emilydavis',
//       linkedinHandle: '@emilydavis',
//       company: 'Delta Solutions',
//     },
//     {
//       url: 'https://sample-videos.com/video321/',
//       clientName: 'Michael Lee',
//       linkedinUrl: 'https://www.linkedin.com/in/michaellee',
//       linkedinHandle: '@michaellee',
//       company: 'Epsilon Group',
//     },
//   ];

//   const videosPerPage = 2;
//   const totalPages = Math.ceil(videos.length / videosPerPage);

//   const handleNext = () => {
//     if (videos.length <= videosPerPage || isAnimating) return;
//     setDirection('right');
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + videosPerPage >= videos.length ? 0 : prevIndex + videosPerPage
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handlePrev = () => {
//     if (videos.length <= videosPerPage || isAnimating) return;
//     setDirection('left');
//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex - videosPerPage < 0 ? (totalPages - 1) * videosPerPage : prevIndex - videosPerPage
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handlePlayClick = (videoUrl: string) => {
//     setSelectedVideo(videoUrl);
//   };

//   const handleClosePopup = () => {
//     setSelectedVideo(null);
//   };

//   const getAnimationClass = () => {
//     if (!direction || !isAnimating) return '';
//     return direction === 'right' ? 'slide-group-left' : 'slide-group-right';
//   };

//   const displayedVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

//   return (
//     <div className="flex flex-col items-center py-8 bg-white">
//       <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Clients' Experience</h1>
//       <div className="w-full max-w-4xl carousel-container">
//         <div className="relative overflow-hidden">
//           <div
//             className={`flex space-x-4 sm:space-x-6 transition-transform duration-500 ease-in-out ${getAnimationClass()}`}
//             onTransitionEnd={() => setDirection(null)}
//           >
//             {displayedVideos.map((video, index) => (
//               <div key={`${currentIndex}-${index}`} className="bg-purple-50/80 rounded-lg shadow-lg p-4 sm:p-6 flex-shrink-0 video-card w-full sm:w-96">
//                 <div className="relative w-full h-48 sm:h-56 bg-gray-300 rounded-lg flex items-center justify-center video-player">
//                   <button
//                     onClick={() => handlePlayClick(video.url)}
//                     className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200"
//                     title="Play video"
//                   >
//                     <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="mt-4 text-sm text-gray-700 flex flex-col items-start">
//                   <a
//                     href={video.linkedinUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-purple-600 hover:underline flex items-center gap-4 mb-2"
//                     title={`View ${video.clientName}'s LinkedIn profile`}
//                   >
//                     <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.866-3.06-1.868 0-2.154 1.459-2.154 2.966v5.698h-3v-11h2.878v1.496h.041c.401-.761 1.386-1.557 2.848-1.557 3.044 0 3.603 2.002 3.603 4.604v6.457z" />
//                     </svg>
//                     <span className="flex flex-col items-start">
//                       <span className="font-bold text-base text-gray-900 leading-tight client-name">{video.clientName}</span>
//                       <span className="text-gray-500 text-sm leading-tight">{video.company}</span>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="absolute inset-y-0 left-0 flex items-center">
//             <button
//               onClick={handlePrev}
//               className={`bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''} nav-button`}
//               disabled={isAnimating}
//               title="Previous testimonial"
//             >
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <button
//               onClick={handleNext}
//               className={`bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''} nav-button`}
//               disabled={isAnimating}
//               title="Next testimonial"
//             >
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {selectedVideo && (
//         <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// };

// export default VideoCarousel;










import React, { useState } from 'react';
import './LiveTestMonials.css';

interface Video {
  url: string;
  clientName: string;
  linkedinUrl: string;
  linkedinHandle: string;
  company: string;
}

interface VideoPopupProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 relative w-11/12 max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <video className="w-full h-64 sm:h-96 rounded-lg" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const VideoCarousel: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const videos: Video[] = [
    {
      url: 'https://sample-videos.com/',
      clientName: 'John Doe',
      linkedinUrl: 'https://www.linkedin.com/in/johndoe',
      linkedinHandle: '@johndoe',
      company: 'Acme Corp',
    },
    {
      url: 'https://sample-videos.com/video321/',
      clientName: 'Jane Smith',
      linkedinUrl: 'https://www.linkedin.com/in/janisth',
      linkedinHandle: 'Jane Smith',
      company: 'Beta Inc',
    },
    {
      url: 'https://sample-videos.com/video321',
      clientName: 'Alex Brown',
      linkedinUrl: 'https://www.linkedin.com/in/alexbrown',
      linkedinHandle: '@alexbrown',
      company: 'Gamma LLC',
    },
    {
      url: 'https://sample-videos.com/',
      clientName: 'Emily Davis',
      linkedinUrl: 'https://www.linkedin.com/in/emilydavis',
      linkedinHandle: '@emilydavis',
      company: 'Delta Solutions',
    },
    {
      url: 'https://sample-videos.com/video321/',
      clientName: 'Michael Lee',
      linkedinUrl: 'https://www.linkedin.com/in/michaellee',
      linkedinHandle: '@michaellee',
      company: 'Epsilon Group',
    },
  ];

  const videosPerPage = 2;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handleNext = () => {
    if (videos.length <= videosPerPage || isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + videosPerPage >= videos.length ? 0 : prevIndex + videosPerPage
      );
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (videos.length <= videosPerPage || isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - videosPerPage < 0 ? (totalPages - 1) * videosPerPage : prevIndex - videosPerPage
      );
      setIsAnimating(false);
    }, 500);
  };

  const handlePlayClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };

  const getAnimationClass = () => {
    if (!direction || !isAnimating) return '';
    return direction === 'right' ? 'slide-group-left' : 'slide-group-right';
  };

  const displayedVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

  return (
    <div className="flex flex-col items-center py-8 bg-white">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Clients' Experience</h1>
      <div className="w-full max-w-4xl carousel-container">
        <div className="relative overflow-hidden">
          <div
            className={`flex space-x-4 sm:space-x-6 transition-transform duration-500 ease-in-out ${getAnimationClass()}`}
            onTransitionEnd={() => setDirection(null)}
          >
            {displayedVideos.map((video, index) => (
              <div key={`${currentIndex}-${index}`} className="bg-purple-50/80 rounded-lg shadow-lg p-4 sm:p-6 flex-shrink-0 video-card w-full sm:w-96">
                <div className="relative w-full h-48 sm:h-56 bg-gray-300 rounded-lg flex items-center justify-center video-player">
                  <button
                    onClick={() => handlePlayClick(video.url)}
                    className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                    title="Play video"
                  >
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-700 flex flex-col items-start">
                  <a
                    href={video.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline flex items-center gap-4 mb-2"
                    title={`View ${video.clientName}'s LinkedIn profile`}
                  >
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.028-3.06-1.866-3.06-1.868 0-2.154 1.459-2.154 2.966v5.698h-3v-11h2.878v1.496h.041c.401-.761 1.386-1.557 2.848-1.557 3.044 0 3.603 2.002 3.603 4.604v6.457z" />
                    </svg>
                    <span className="flex flex-col items-start">
                      <span className="font-bold text-base text-gray-900 leading-tight client-name">{video.clientName}</span>
                      <span className="text-gray-500 text-sm leading-tight">{video.company}</span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10 nav-button-container">
            <button
              onClick={handlePrev}
              className={`bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''} nav-button`}
              disabled={isAnimating}
              title="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10 nav-button-container">
            <button
              onClick={handleNext}
              className={`bg-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-200 ${isAnimating ? 'opacity-50 pointer-events-none' : ''} nav-button`}
              disabled={isAnimating}
              title="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {selectedVideo && (
        <VideoPopup videoUrl={selectedVideo} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default VideoCarousel;