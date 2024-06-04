import {  FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa6";
import guts_bigote from '@assets/images/guts_bigote.jpg'
import { SOCIAL_MEDIA } from "@utils/constants";

const Home: React.FC<Props> = () => {
  return (
    <div className="bg-dark-gray-800 h-full w-full text-dark-gray-200 p-4 rounded-lg overflow-hidden shadow-lg">
      <div className="flex justify-center">
        <img 
        className="rounded-full border-2 border-gray-600 h-[10rem] w-[10rem]" 
        src={guts_bigote} alt="Avatar de Daniel Fischer"
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-xl font-semibold">Leandro Fermín</p>
        <p className="text-sm">Full Stack Developer</p>
        <p className="text-xs mt-2">Ticino, Suiza</p>
      </div>
      <div className="flex justify-center mt-4">
        <a href="#" target="_blank" className="text-pink-400 mx-1"><FaInstagram /></a>
        <a href="#" target="_blank" className="text-blue-500 mx-1"><FaLinkedinIn /></a>
        <a href={SOCIAL_MEDIA.GITHUB} target="_blank" className="text-gray-300 mx-1"><FaGithub /></a>
      </div> 
    </div> 
  );
};

export default Home;
