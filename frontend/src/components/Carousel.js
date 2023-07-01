// import { useState, useRef, useEffect } from 'react';
// // Data
// import datas from '../fake_data/data.json';

// const Carousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     }
//     }  ;

//   const moveNext = () => {
//     if (
//       carousel.current !== null &&
//       carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//     ) {
//       setCurrentIndex((prevState) => prevState + 1);
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === 'prev') {
//       return currentIndex <= 0;
//     }

//     if (direction === 'next' && carousel.current !== null) {
//       return (
//         carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//       );
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (carousel !== null && carousel.current !== null) {
//       carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, []);

//   return (
//     <div classNameName="carousel my-12 mx-auto">
       
//       <div classNameName="relative overflow-hidden">
//         <div classNameName="flex justify-between absolute top left w-full h-full">
//           <button
//             onClick={movePrev}
//             classNameName="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('prev')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               classNameName="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span classNameName="sr-only">Prev</span>
//           </button>
//           <button
//             onClick={moveNext}
//             classNameName="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('next')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               classNameName="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <span classNameName="sr-only">Next</span>
//           </button>
//         </div>
//         <div
//           ref={carousel}
//           classNameName="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//         >
//           {datas.resources.map((resource, index) => {
//             return (
//               <div
//                 key={index}
//                 classNameName="carousel-item text-center relative w-64 h-64 snap-start"
//               >
//                 <a
//                   href={resource.link}
//                   classNameName="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                 >
//                   <img
//                     src={resource.imageUrl || ''}
//                     alt={resource.title}
//                     classNameName="w-full aspect-square hidden"
//                   />
//                 </a>
//                 <a
//                   href={resource.link}
//                   classNameName="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 classNameName="text-white py-6 px-3 mx-auto text-xl">
//                     {resource.title}
//                   </h3>
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   )
// };
// export default Carousel;
import datas from "../fake_data/datas.json";
import Card from "./Card";
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel" style={{height: "50vh"}}>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner w-full overflow-hidden">
    <div class="carousel-item active float-left" style={{height: "50vh", width: "50vw"}}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left" style={{height: "50vh", width: "50vw"}}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left" style={{height: "50vh", width: "50vw"}}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Carousel; 
