import { SOCIAL_MEDIA } from "@utils/constants";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import profilePic from "@assets/images/ProfilePic.jpg";

const About: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
      <h1 className="text-4xl typing-text max-w-fit font-bold mb-6 text-center">About Me</h1>

      </div>
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="rounded-full border-4 border-gray-600 h-40 w-40 md:h-56 md:w-56 mb-6 md:mb-0 md:mr-8"
          src={profilePic}
          alt="Avatar de Programador"
        />
        <div className="text-lg text-justify pl-5 pr-16">
          <p className="mb-4">
            Hello! I'm <span className="font-bold">Leandro Fermín</span>, a
            passionate and experienced back-end developer based in Valencia,
            Venezuela 🇻🇪. I specialize in creating robust and scalable
            server-side applications.
          </p>
          <p className="mb-4">
            I have a strong background in software engineering and two (2) years of
            experience working with a variety of technologies such as
            <span className="font-semibold"> Python, Javascript, Typescript, Django Rest Framework, ReactJS, tailwindCSS. </span>
            My focus is on delivering clean, efficient, and maintainable code
            using the best practices and design patterns.
          </p>
          <p className="mb-4">
            When I'm not coding, I enjoy exploring new technologies
            and continuously learning to improve my skills.
            I'm always excited about tackling new challenges
            and collaborating with like-minded professionals.
          </p>
          <p className="mb-4">
            Feel free to connect with me on social media
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a href={SOCIAL_MEDIA.INTAGRAM} target="_blank" className="text-pink-400 mx-2 text-2xl">
          <FaInstagram />
        </a>
        <a href={SOCIAL_MEDIA.GITHUB} target="_blank" className="text-blue-500 mx-2 text-2xl">
          <FaLinkedinIn />
        </a>
        <a
          href={SOCIAL_MEDIA.GITHUB}
          target="_blank"
          className="text-gray-300 mx-2 text-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default About;
