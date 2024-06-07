import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import ProfilePic from "@assets/images/ProfilePic.jpg";
import {  SOCIAL_MEDIA } from "@utils/constants";
import { SiGmail, SiProtonmail } from "react-icons/si";

const Home: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-dark-gray-800 h-full text-dark-gray-200">
      <div className="flex flex-col items-center">
        <img
          className="rounded-full border-4 border-gray-600 h-48 w-48 object-cover shadow-lg"
          src={ProfilePic}
          alt="Avatar de Daniel Fischer"
        />
        <div className="text-center mt-4">
          <h1 className="text-5xl font-bold">Leandro Fermín</h1>
          <h2 className="text-2xl text-gray-400 mt-2">Back-End Developer 💻</h2>
          <p className="text-lg mt-2">🇻🇪 Valencia, Venezuela 🇻🇪</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-6">
        <a
          href={SOCIAL_MEDIA.INTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 text-4xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href={SOCIAL_MEDIA.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-4xl hover:text-blue-600 transition duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={SOCIAL_MEDIA.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-4xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
      </div>
      <div className="flex flex-col items-center mt-6">
        <h3 className="text-xl font-semibold">Contact Me</h3>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <div className="flex items-center space-x-2">
            <SiGmail className="text-xl text-[#C4211E]" />
            <a
              href="mailto:leandrofermin@gmail.com"
              className="text-lg text-gray-300 hover:text-gray-400 transition duration-300"
            >
              leandrofermin@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <SiProtonmail className="text-xl text-[#6C4AFF]" />
            <a
              href="mailto:generalerdon@proton.me"
              className="text-lg text-gray-300 hover:text-gray-400 transition duration-300"
            >
              generalerdon@proton.me
            </a>
            
          </div>
          {/* <Link to={ROUTES.ABOUT} className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" >About me</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
