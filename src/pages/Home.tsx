import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import ProfilePic from "@assets/images/ProfilePic.jpg";
import { SOCIAL_MEDIA } from "@utils/constants";

const Home: React.FC<Props> = () => {
  return (
    <>
      <div className="flex justify-center">
        <img
          className="rounded-full border-2 border-gray-600 h-[25%] w-[25%]"
          src={ProfilePic}
          alt="Avatar de Daniel Fischer"
        />
      </div>
      <div className="text-center mt-4 ">
        <p className="text-5xl font-semibold">Leandro Fermín</p>
        <p className="text-xl ">Back-End Developer 💻</p>
        <p className="text-md mt-2">🇻🇪 Valencia, Venezuela 🇻🇪</p>
      </div>
      <div className="flex justify-center mt-4">
        <a
          href={SOCIAL_MEDIA.INTAGRAM}
          target="_blank"
          className="text-pink-400 text-3xl mx-2"
        >
          <FaInstagram />
        </a>
        <a
          href={SOCIAL_MEDIA.LINKEDIN}
          target="_blank"
          className="text-blue-500 text-3xl mx-2"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={SOCIAL_MEDIA.GITHUB}
          target="_blank"
          className="text-gray-300 text-3xl mx-2"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default Home;
