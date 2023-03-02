// import React from 'react'
// import "./TopCategory.css"
// import ArrowIcon from "../../icons/arrow-right.svg"

// export default function TopCategory() {
//     const [slideLeft, setSlideLeft] = React.useState(false)
//     const [slideRight, setSlideRight] = React.useState(false)

//     const handleClickLeft = () => {
//         setSlideLeft(!slideLeft)
//     }

//     const handleClickRight = () => {
//         setSlideRight(!slideRight)
//     }

//     const mouseOver = () => {
//         onmouseover = (event) => {setSlideLeft(!slideLeft)}; 
//     }
//     console.log(slideLeft)


//   return (
//     <div>
//         <div className='top_category_main'>
//             <h1>Top Category</h1>
//             <div className='buttons'>
//                 <button onClick={handleClickLeft} className='arrow_left'> <img src={ArrowIcon} alt=""/></button>
//                 <button onClick={handleClickRight}> <img src={ArrowIcon} alt=""/></button>
//             </div>
//         </div>
//         <div className='top_category_line'>
//             <span className='blue_line'></span>
//             <span className='normal_line'></span>
//         </div>
//         <div className='swiper_container'>
//             <div className={slideLeft || mouseOver  ? "swiper" : null} id={slideRight ? "swipers" : null} >
//                 <img  src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
//             </div>
//             <div className={slideLeft ? "swiper" : null} id={slideRight ? "swipers" : null} >
//                 <img  src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
//             </div>
//             {/* <div>
//                 <img className={slideLeft ? "swiper" : null} id={slideRight ? "swipers" : null} src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
//             </div>
//             <div>
//                 <img className={slideLeft ? "swiper" : null} id={slideRight ? "swipers" : null} src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
//             </div>
//             <div>
//                 <img className={slideLeft  ? "swiper" : null} id={slideRight ? "swipers" : null} src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
//             </div> */}
//         </div>
//     </div>
//   )
// }

import React from 'react'
import "./TopCategory.css"
import ArrowIcon from "../../icons/arrow-right.svg"
import { Link } from 'react-router-dom';

export default function TopCategory() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = React.useState(0);

  const slides = [
    {
      imageSrc: "https://cdn.shopify.com/s/files/1/0257/0492/3199/files/1_a63053e2-a45a-47be-920e-7bef41e9fe71.png?v=1646455798",
      altText: "Laptop image",
      title: "Electronics",
      Link1:"Desktop & Tv",
      Link2: "Computer", 
      Link3: "Audio System", 
      Link4: "Headphone", 
    },
    {
      imageSrc: "https://cdn.shopify.com/s/files/1/0257/0492/3199/files/2_7f8c5f1a-dafe-472e-82f8-0c794b731b19.png?v=1646455823",
      altText: "Laptop image",
      title: "Fashion",
      Link1:"Make-up",
      Link2: "Lipstick", 
      Link3: "Handbag", 
      Link4: "Sunglasses", 
    },
    {
      imageSrc: "https://cdn.shopify.com/s/files/1/0257/0492/3199/files/3.png?v=1646455834",
      altText: "Laptop image",
      title: "Furniture",
      Link1:"Chair",
      Link2: "Dining Set", 
      Link3: "Office Tables", 
      Link4: "Wall Decor", 

    },
    {
        imageSrc: "https://cdn.shopify.com/s/files/1/0257/0492/3199/files/6_b7f80ae5-423c-42b2-82ca-7f1638c06489.png?v=1646455847",
        altText: "Laptop image",
        title: "Garden Kits",
        Link1:"Indoor Plants",
        Link2: "Orchid", 
        Link3: "Vegetables", 
        Link4: "Outdoor Plants", 
      },
      {
        imageSrc: "https://cdn.shopify.com/s/files/1/0257/0492/3199/files/8_35b9648b-2ada-4cdf-befe-61dd29f49b67.png?v=1646455863",
        altText: "Laptop image",
        title: "Accesories",
        Link1:"Cosmetics",
        Link2: "Clothes", 
        Link3: "Home Decorations", 
        Link4: "Outdoor Decorations", 
      },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const numSlides = slides.length;
    const maxIndex = numSlides - numVisibleSlides;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideStyles = {
    transform: `translateX(-${currentIndex * (100 / numVisibleSlides)}%)`,
    transition: 'transform 0.5s ease',
    display: 'flex',
  };

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setNumVisibleSlides(2);
      } else if (width >= 768) {
        setNumVisibleSlides(1);
      } else if (width >= 600) {
        setNumVisibleSlides(1);
      } else {
        setNumVisibleSlides(1);
      }
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='top_category_main'>
        <h1>Top Category</h1>
        <div className='buttons'>
          <button onClick={handlePrev} className='arrow_left'>
            <img src={ArrowIcon} alt="" />
          </button>
          <button onClick={handleNext}>
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      </div>
      <div className='top_category_line'>
        <span className='blue_line'></span>
        <span className='normal_line'></span>
      </div>
      <div className='swiper_container'>
        {slides.map((slide, index) => (
        <div className='swiper' key={index} style={slideStyles}>
            <img src={slide.imageSrc} alt={`Slide ${index}`} />
                    <div>
                    <h3>{slide.title}</h3>
                    <div style={{display: "flex", flexDirection:"column"}}>
                        <Link>{slide.Link1}</Link>
                        <Link>{slide.Link2}</Link>
                        <Link>{slide.Link3}</Link>
                        <Link>{slide.Link4}</Link>
                    </div>
                    </div>
        </div>
        ))}
      </div>
    </div>
  );
}



