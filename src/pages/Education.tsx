import { ReactElement } from "react";

interface ExperienceSegmentProps {
  company: string;
  years: string;
  matter: string;
  tasks?: string[];
  children: ReactElement<HTMLElement>;
}

const ExperienceSegment: React.FC<ExperienceSegmentProps> = ({
  company,
  years,
  matter,
  tasks,
  children,
}) => {
  return (
    <div className="flex flex-col bg-dark-gray-700 rounded-lg p-6 mb-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-blue-500">{company}</h2>
        <span className="text-lg font-semibold text-gray-400">{years}</span>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">{matter}</h3>
      </div>
      {tasks && (
        <div className="mb-4">
          <h4 className="text-xl font-semibold">Tasks</h4>
          <ul className="list-disc list-inside ml-4 text-lg">
            {tasks.map((value, index) => (
              <li key={index} className="mb-2">
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-4">
        <h4 className="text-xl font-semibold">Description</h4>
        <div className="text-md text-justify">{children}</div>
      </div>
    </div>
  );
};

const CPV_TASKS = [
  "Lead the development of web applications",
  "Design database schemas and apps architecture",
  "Back-End development using Django Rest Framework for create Rest API",
  "Front-End API integration and component creator",
  "Linux server configuration, administration and security",
  "Responsible of automation scripts and backups processes",
  "Interviewed clients for recolect the requirements of the apps",
  "Deployment of apps using Docker",
  "Supporting and maintaining the server and web applications",
];

const Education: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <h1 className="text-4xl typing-text max-w-fit font-bold text-center my-10">
          Laboral Experience
        </h1>
      </div>
      <ExperienceSegment
        company="Centro Policlinico Valencia C.A"
        years="2022 - actual"
        matter="Software Developer"
        tasks={CPV_TASKS}
      >
        <div className="space-y-2">
          <p>
            My principal task is lead the development of the applications and
            interview the clients for elaborate the database schema that will be
            used to store the data and design the architecture that will be
            implemented.
          </p>
          <p>
            After that process, I create the database and the Back-End using
            Django Rest Framework and create the Rest API and its documentation
            using Swagger.
          </p>
          <p>
            I help the Front-End integrating the API with React and to make some
            components. At the end I'm the one who will deploy the app on the
            server for LAN use only, I'm comfortable working with Docker and the
            automation process of deployment, scripts and database backups.
          </p>
        </div>
      </ExperienceSegment>

      <h1 className="text-4xl font-bold text-center my-10">Education</h1>
      <ExperienceSegment
        company="Instituto Universitario Juan Pablo Perez Alfonso (IUTEPAL)"
        years="2023"
        matter="Informatic Engineer"
      >
        <p>Graduated with academic distinction and the best performance.</p>
      </ExperienceSegment>
      <ExperienceSegment
        company="Centro Culturale Scalabrini"
        years="2019"
        matter="Basic Italian Course"
      >
        <p>
          Graduated with the best scores and learned basics of the Italian
          language
        </p>
      </ExperienceSegment>
    </div>
  );
};

export default Education;
