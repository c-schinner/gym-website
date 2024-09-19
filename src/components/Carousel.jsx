import { useState } from "react";
import gympic1 from "../assets/gympic1.jpeg"
import gympic2 from "../assets/gympic2.jpeg"
import gympic3 from "../assets/gympic3.jpeg"
import gympic4 from "../assets/gympic4.jpeg"
import gympic5 from "../assets/gympic5.jpeg"
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


const Carousel = () => {

    const images = [gympic1, gympic2, gympic3, gympic4, gympic5];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-64 flex items-center justify-center bg-gray-200">
            <button
                onClick={prevImage}
                className="absolute left-4 p-2 bg-black text-white rounded-full hover:bg-gray-700">
                <BsArrowLeftSquareFill size={30} />
            </button>
            <img 
                src={images[currentIndex]}
                alt="Gym"
                className="w-full h-full object-cover rounded-lg" 
            />
            <button
                onClick={nextImage}
                className="absolute right-4 p-2 bg-black text-white rounded-full hover:bg-gray-700">
                <BsArrowRightSquareFill size={30} />
            </button>
        </div>
    )
}

export default Carousel