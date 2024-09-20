import { useState } from "react";
import yoga from "../assets/yoga.jpeg";
import hiit from "../assets/hiit.jpeg";
import cycling from "../assets/cycling.jpeg";
import cardio from "../assets/cardio.jpeg";
import boxing from "../assets/boxing.jpeg";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


const Programs = () => {

    const programs = [
        {
            id: 'Program 1',
            name: 'Yoga',
            image: yoga,
            description: 'Enjoy life with this meditative program, focusing on mind, body and spirit.',
        },
        {
            id: 'Program 2',
            name: 'HIIT',
            image: hiit,
            description: 'Build endurance and improve your cardiovascular health with this high-intensity interval training (HIIT) program.',
        },
        {
            id: 'Program 3',
            name: 'Cycling',
            image: cycling,
            description: 'Stay active and healthy by joining a cycling class, which includes both indoor and outdoor options.',
        },
        {
            id: 'Program 4',
            name: 'Cardio',
            image: cardio,
            description: 'Get in shape and burn calories by joining a cardio class, which includes both indoor and outdoor options.',
        },
        {
            id: 'Program 5',
            name: 'Boxing',
            image: boxing,
            description: 'Train for strength, agility, and mental endurance by joining a boxing class.',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevProgram = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? programs.length - 1 : prevIndex - 1
        );
    };

    const nextProgram = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === programs.length - 1 ? 0 : prevIndex + 1
        );
    };


    return (
        <div className=" relative w-full h-96 overflow-hidden flex items-center justify-center bg-black">
            {programs.map((program, index) => {
                const isActive = index === currentIndex;
                const offset = (index - currentIndex) * 20;

                return (
                    <div
                        key={program.id}
                        className={`absolute transition-transform duration-1500 ease-in-out transform ${
                            isActive ? 'z-10 opacity-100 scale-100' : 'z-0 opacity-10 scale-75'
                    }`}
                    style={{
                        left: `${50 + offset}%`,
                        transform: `translateX(-${50 + offset}%)`,
                        transition: 'opactiy 0.5s, transform 0.5s',
                    }}>
                        <div className="relative w-70 h-96 rounded-lg shadow-lg overflow-hidden">
                            <img 
                                src={program.image}
                                alt={program.name}
                                className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
                                <h3 className="text-lg font-semibold">{program.name}</h3>
                                <p className="text-sm">{program.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <button
                onClick={prevProgram}
                className="absolute left-4 p-2 bg-black text-white rounded-full hover:bg-gray-700">
                    <BsArrowLeftSquareFill size={30} />
            </button>
            <button
                onClick={nextProgram}
                className="absolute right-4 p-2 bg-black text-white rounded-full hover:bg-gray-700">
                    <BsArrowRightSquareFill size={30} />
            </button>
        </div>
    )
}

export default Programs