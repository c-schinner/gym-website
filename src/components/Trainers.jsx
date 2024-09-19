import { useState } from "react";
import trainer1 from "../assets/trainer1.jpeg";
import trainer2 from "../assets/trainer2.jpeg";
import trainer3 from "../assets/trainer3.jpeg";
import trainer4 from "../assets/trainer4.jpeg";

const Trainers = () => {

    const trainers = [
        {
            id: "Trainer 1",
            name: "Greg",
            image: trainer1,
            bio: "Greg is very skilled in personal training and have over 10 years of experience in the fitness industry. Their specialties include weight training, cardio exercises, and nutrition guidance."
        },
        {
            id: "Trainer 2",
            name: "Mary",
            image: trainer2,
            bio: "Mary has a background in sports science and have been helping people achieve their fitness goals for the past 5 years. They are known for their motivational training sessions and personalized workout plans."
        },
        {
            id: "Trainer 3",
            name: "John",
            image: trainer3,
            bio: "John has a focus on functional training and rehabilitation, John has been a valuable part of the gym for over 8 years. They have a deep understanding of human physiology and offer tailored advice to each client."
        },
        {
            id: "Trainer 4",
            name: "Alan",
            image: trainer4,
            bio: "Alan is a former athlete turned personal trainer, Alan is passionate about helping others unlock their potential through fitness. They specialize in endurance training and flexibility improvement."
        }
    ]

    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {trainers.map((trainer) => (
                <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
        </div>
    )
}

const TrainerCard = ({ trainer }) => {

    const [showBio, setShowBio] = useState(false);

    const toggleBio = () => {
        setShowBio(!showBio);
    }

    return (
        <div className="bg-slate-400 p-4 rounded-md shadow-md flex flex-col items-center">
            <img 
                src={trainer.image}
                alt={`${trainer.name}`}
                className="w-46 h-46 rounded-xl object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{trainer.name}</h2>
            <p className="text-black text-sm mb-2">
                {showBio ? trainer.bio : `${trainer.bio.substring(0, 50)}...`}
            </p>
            <button
                onClick={toggleBio}
                className="text-blue-300 hover:text-blue-700">
                {showBio ? "Show less" : "Read more"}
            </button>
        </div>
    )
}

export default Trainers