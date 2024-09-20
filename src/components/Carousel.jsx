import { useState } from "react";
import gympicture1 from "../assets/gympicture1.jpeg"
import gympicture2 from "../assets/gympicture2.jpeg"
import gympicture3 from "../assets/gympicture3.jpeg"
import gympicture4 from "../assets/gympicture4.jpeg"
import gympicture5 from "../assets/gympicture5.jpeg"
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


const Carousel = () => {

    const images = [gympicture1, gympicture2, gympicture3, gympicture4, gympicture5];

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
        <div className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gray-200">
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