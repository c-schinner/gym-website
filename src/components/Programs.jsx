import { usestate } from "react";
import yoga from "../assets/yoga.jpeg";
import hiit from "../assets/hiit.jpeg";
import cycling from "../assets/cycling.jpeg";
import cardio from "../assets/cardio.jpeg";
import boxing from "../assets/boxing.jpeg";


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

    return (
        <div>Programs</div>
    )
}

export default Programs