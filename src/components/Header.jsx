import gymlogo from "../assets/gym-logo.jpg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-row items-center">
            <div
            className="text-3xl font-semibold m-4 p-4 rounded-full text-black"
            style={{ backgroundImage: `url(${gymlogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                My Gym
            </div>

            <div className="hidden md:flex space-x-4 ml-auto mr-4">
                <a href="#home" className="hover:text-white">Home</a>
                <a href="#trainers" className="hover:text-white">Trainers</a>
                <a href="#programs" className="hover:text-white">Programs</a>
                <a href="#schedule" className="hover:text-white">Schedule</a>
                <a href="#memberships" className="hover:text-white">Memberships</a>
                <a href="#contact" className="hover:text-white">Contact</a>
            </div>

            <div className="ml-auto mr-4 md:hidden">
                <IoMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
            </div>

            {isOpen && (
                <div className="absolute top-16 right-4 bg-gray-800 text-white flex flex-col space-y-4 p-4 rounded-md md:hidden">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#trainers" className="hover:text-gray-400">Trainers</a>
                    <a href="#programs" className="hover:text-gray-400">Programs</a>
                    <a href="#schedule" className="hover:text-gray-400">Schedule</a>
                    <a href="#memberships" className="hover:text-gray-400">Memberships</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
            )}
        </div>
    )
}

export default Header