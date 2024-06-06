import { ReactElement } from "react";

const ExperienceSegment: React.FC<{
  company: string;
  years: string;
  matter: string;
  tasks?: string[];
  children: ReactElement<HTMLElement>;
}> = ({ company, years, matter, tasks, children }) => {
  return (
    <div className="flex flex-col ">
      <hr className=" text-dark-gray-200 w-[80%] self-center my-10" />
      <ul className="text-left mx-10 ">
        <li>
          <h2 className="text-3xl font-semibold">{company}</h2>
        </li>
        <li>
          <span className="text-md font-semibold">{years}</span>
        </li>
        <li className="mt-5 text-2xl font-semibold">{matter}</li>
        {(tasks) && (
          <li className="text-center">
            <span className="text-2xl font-semibold">Tasks</span>
            <ul className="text-left text-lg font-medium">
              {tasks.map((value, index) => {
                return (
                  <li className="my-2" key={index}>
                    <span className="mx-5 font-extrabold">*</span> {value}
                  </li>
                );
              })}
            </ul>
          </li>
        )}

        <li className=" p-5 text-center">
          <span className=" text-2xl font-semibold">Description</span>
          <div className=" text-md text-justify  px-28">{children}</div>
        </li>
      </ul>
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
    <div className="flex flex-col">
      <h1 className=" typing-text max-w-fit font-custom text-4xl my-10 ml-10 text-center self-center">
        Laboral Experience
      </h1>
      {/* La experiencia laboral */}

      <ExperienceSegment
        company="Centro Policlinico Valencia C.A"
        years="2022 - actual"
        matter="Software Developer"
        tasks={CPV_TASKS}
      >
        <div className="space-y-2 text-justify">
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
            components. At the end I'm the one who will deploy the app on the server for LAN
            use only, I'm comfortable working with Docker and the automation
            process of deployment, scripts and database backups.
          </p>
        </div>
      </ExperienceSegment>
      {/* Education */}
      <h1 className=" typing-text max-w-fit font-custom text-4xl my-10 ml-10 text-center self-center">
        Education
      </h1>

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
        <p>Graduated with the best scores and learned basics of the Italian laguage</p>
      </ExperienceSegment>
    </div>
  );
};

export default Education;
