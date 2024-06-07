
// interface ExperienceSegmentProps {
//   company: string;
//   years: string;
//   matter: string;
//   tasks?: string[];
//   children: ReactElement<HTMLElement>;
// }

// const ExperienceSegment: React.FC<ExperienceSegmentProps> = ({
//   company,
//   years,
//   matter,
//   tasks,
//   children,
// }) => {
//   return (
//     <div className="flex flex-col bg-dark-gray-700 rounded-lg p-6 mb-6 shadow-md">
//       <div className="mb-4">
//         <h2 className="text-3xl font-bold text-blue-500">{company}</h2>
//         <span className="text-lg font-semibold text-gray-400">{years}</span>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-2xl font-semibold">{matter}</h3>
//       </div>
//       {tasks && (
//         <div className="mb-4">
//           <h4 className="text-xl font-semibold">Tasks</h4>
//           <ul className="list-disc list-inside ml-4 text-lg">
//             {tasks.map((value, index) => (
//               <li key={index} className="mb-2">
//                 {value}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="mb-4">
//         <h4 className="text-xl font-semibold">Description</h4>
//         <div className="text-md text-justify">{children}</div>
//       </div>
//     </div>
//   );
// };

// const CPV_TASKS = [
//   "Lead the development of web applications",
//   "Design database schemas and apps architecture",
//   "Back-End development using Django Rest Framework for create Rest API",
//   "Front-End API integration and component creator",
//   "Linux server configuration, administration and security",
//   "Responsible of automation scripts and backups processes",
//   "Interviewed clients for recolect the requirements of the apps",
//   "Deployment of apps using Docker",
//   "Supporting and maintaining the server and web applications",
// ];

// const Education: React.FC = () => {
//   return (
//     <div className="p-4">
//       <div className="flex justify-center">
//         <h1 className="text-4xl typing-text max-w-fit font-bold text-center my-10">
//           Laboral Experience
//         </h1>
//       </div>
//       <ExperienceSegment
//         company="Centro Policlinico Valencia C.A"
//         years="2022 - actual"
//         matter="Software Developer"
//         tasks={CPV_TASKS}
//       >
//         <div className="space-y-2">
//           <p>
//             My principal task is lead the development of the applications and
//             interview the clients for elaborate the database schema that will be
//             used to store the data and design the architecture that will be
//             implemented.
//           </p>
//           <p>
//             After that process, I create the database and the Back-End using
//             Django Rest Framework and create the Rest API and its documentation
//             using Swagger.
//           </p>
//           <p>
//             I help the Front-End integrating the API with React and to make some
//             components. At the end I'm the one who will deploy the app on the
//             server for LAN use only, I'm comfortable working with Docker and the
//             automation process of deployment, scripts and database backups.
//           </p>
//         </div>
//       </ExperienceSegment>

//       <h1 className="text-4xl font-bold text-center my-10">Education</h1>
//       <ExperienceSegment
//         company="Instituto Universitario Juan Pablo Perez Alfonso (IUTEPAL)"
//         years="2023"
//         matter="Informatic Engineer"
//       >
//         <p>Graduated with academic distinction and the best performance.</p>
//       </ExperienceSegment>
//       <ExperienceSegment
//         company="Centro Culturale Scalabrini"
//         years="2019"
//         matter="Basic Italian Course"
//       >
//         <p>
//           Graduated with the best scores and learned basics of the Italian
//           language
//         </p>
//       </ExperienceSegment>
//     </div>
//   );
// };

// export default Education;

// Componente para elementos de Educación
const EducationItem: React.FC<{
  institution: string;
  years: string;
  degree: string;
  description: string;
}> = ({ institution, years, degree, description }) => {
  return (
    <div className="bg-dark-gray-700 rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-orange-500">{institution}</h3>
      <p className="text-lg font-semibold text-dark-gray-300">{years}</p>
      <p className="text-xl font-semibold text-dark-gray-100 mt-2">{degree}</p>
      <p className="text-md text-gray-300 mt-4">{description}</p>
    </div>
  );
};

// Componente para elementos de Experiencia
const ExperienceItem: React.FC<{
  company: string;
  years: string;
  position: string;
  description: string;
  tasks?: string[];
}> = ({ company, years, position, description, tasks }) => {
  return (
    <div className="bg-dark-gray-700 rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-orange-500">{company}</h3>
      <p className="text-lg font-semibold text-gray-400">{years}</p>
      <p className="text-xl font-semibold text-white mt-2">{position}</p>
      <p className="text-md text-gray-300 mt-4">{description}</p>
      {tasks && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-white">Tasks</h4>
          <ul className="list-disc list-inside ml-4 text-gray-300">
            {tasks.map((task, index) => (
              <li key={index} className="mt-2">
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Componente principal que integra Educación y Experiencia
const EducationAndExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-dark-gray-100 max-w-fit typing-text">
        Education & Experience
      </h1>

      <section className="w-full max-w-4xl mt-10">
        <h2 className="text-3xl font-bold text-dark-gray-100 mb-6 text-center">
          Experience
        </h2>
        <ExperienceItem
          company="Centro Policlinico Valencia C.A"
          years="2022 - Present"
          position="Software Developer"
          description="Lead the development of web applications, design database schemas and apps architecture, back-end development using Django Rest Framework, front-end API integration, Linux server configuration, and deployment of apps using Docker."
          tasks={[
            "Lead the development of web applications",
            "Design database schemas and apps architecture",
            "Back-End development using Django Rest Framework for creating Rest API",
            "Front-End API integration and component creator",
            "Linux server configuration, administration, and security",
            "Responsible for automation scripts and backup processes",
            "Interviewed clients to gather app requirements",
            "Deployment of apps using Docker",
            "Supporting and maintaining the server and web applications",
          ]}
        />
      </section>
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-dark-gray-100 mb-6 text-center">
          Education
        </h2>
        <EducationItem
          institution="Instituto Universitario Juan Pablo Perez Alfonso (IUTEPAL)"
          years="2023"
          degree="Informatic Engineer"
          description="Focused on software development and data structures. Participated in various coding competitions and hackathons. Graduated with academic distinction and the best performance."
        />
        <EducationItem
          institution="Centro Culturale Scalabrini"
          years="2019"
          degree="Basic Italian Course"
          description="Graduated with the best scores and learned basics of the Italian language."
        />
      </section>
    </div>
  );
};

export default EducationAndExperience;
