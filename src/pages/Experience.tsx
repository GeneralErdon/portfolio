interface Experience {
  role: string;
  company: string;
  year: string;
  tasks: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <div className="bg-gradient-to-b from-orange-600 to-purple-600 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold text-dark-gray-100 mb-6 text-center">
        Experiencia Laboral
      </h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="mb-8 last:mb-0 bg-dark-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-dark-gray-200">
            {experience.role}
          </h3>
          <p className="text-dark-gray-300 mb-2">
            {experience.company} - {experience.year}
          </p>
          <ul className="list-disc list-inside text-dark-gray-200 mt-4 space-y-2">
            {experience.tasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Centro Policlínico Valencia C.A.",
    year: "2022",
    tasks: [
      "Lead the development of web applications",
      "Design database schemas and apps architecture",
      "Back-End development using Django Rest Framework for creating Rest API",
      "Front-End API integration and component creator",
      "Linux server configuration, administration, and security",
      "Responsible for automation scripts and backup processes",
      "Interviewed clients to gather app requirements",
      "Deployment of apps using Docker",
      "Supporting and maintaining the server and web applications",
    ],
  },
];
const ExperiencePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <WorkExperience experiences={experiences} />
    </div>
  );
};

export default ExperiencePage;
