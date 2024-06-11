

// // Componente para elementos de Educación
// const EducationItem: React.FC<{
//   institution: string;
//   years: string;
//   degree: string;
//   description: string;
// }> = ({ institution, years, degree, description }) => {
//   return (
//     <div className="bg-dark-gray-700 rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105">
//       <h3 className="text-2xl font-bold text-orange-500">{institution}</h3>
//       <p className="text-lg font-semibold text-dark-gray-300">{years}</p>
//       <p className="text-xl font-semibold text-dark-gray-100 mt-2">{degree}</p>
//       <p className="text-md text-gray-300 mt-4">{description}</p>
//     </div>
//   );
// };

// // Componente para elementos de Experiencia
// const ExperienceItem: React.FC<{
//   company: string;
//   years: string;
//   position: string;
//   description: string;
//   tasks?: string[];
// }> = ({ company, years, position, description, tasks }) => {
//   return (
//     <div className="bg-dark-gray-700 rounded-lg shadow-lg p-6 mb-6 transition-transform transform hover:scale-105">
//       <h3 className="text-2xl font-bold text-orange-500">{company}</h3>
//       <p className="text-lg font-semibold text-gray-400">{years}</p>
//       <p className="text-xl font-semibold text-white mt-2">{position}</p>
//       <p className="text-md text-gray-300 mt-4">{description}</p>
//       {tasks && (
//         <div className="mt-4">
//           <h4 className="text-xl font-semibold text-white">Tasks</h4>
//           <ul className="list-disc list-inside ml-4 text-gray-300">
//             {tasks.map((task, index) => (
//               <li key={index} className="mt-2">
//                 {task}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// // Componente principal que integra Educación y Experiencia
// const EducationAndExperience: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center px-4 py-8 min-h-screen">
//       <h1 className="text-4xl font-bold mb-10 text-center text-dark-gray-100 max-w-fit typing-text">
//         Education & Experience
//       </h1>

//       <section className="w-full max-w-4xl mt-10">
//         <h2 className="text-3xl font-bold text-dark-gray-100 mb-6 text-center">
//           Experience
//         </h2>
//         <ExperienceItem
//           company="Centro Policlinico Valencia C.A"
//           years="2022 - Present"
//           position="Software Developer"
//           description="Lead the development of web applications, design database schemas and apps architecture, back-end development using Django Rest Framework, front-end API integration, Linux server configuration, and deployment of apps using Docker."
//           tasks={[
//             "Lead the development of web applications",
//             "Design database schemas and apps architecture",
//             "Back-End development using Django Rest Framework for creating Rest API",
//             "Front-End API integration and component creator",
//             "Linux server configuration, administration, and security",
//             "Responsible for automation scripts and backup processes",
//             "Interviewed clients to gather app requirements",
//             "Deployment of apps using Docker",
//             "Supporting and maintaining the server and web applications",
//           ]}
//         />
//       </section>
//       <section className="w-full max-w-4xl">
//         <h2 className="text-3xl font-bold text-dark-gray-100 mb-6 text-center">
//           Education
//         </h2>
//         <EducationItem
//           institution="Instituto Universitario Juan Pablo Perez Alfonso (IUTEPAL)"
//           years="2023"
//           degree="Informatic Engineer"
//           description="Focused on software development and data structures. Participated in various coding competitions and hackathons. Graduated with academic distinction and the best performance."
//         />
//         <EducationItem
//           institution="Centro Culturale Scalabrini"
//           years="2019"
//           degree="Basic Italian Course"
//           description="Graduated with the best scores and learned basics of the Italian language."
//         />
//       </section>
//     </div>
//   );
// };

// export default EducationAndExperience;

interface Education {
  institution: string;
  description: string;
  year: string;
  degree: string;
}

interface EducationProps {
  educationList: Education[];
}

const Education: React.FC<EducationProps> = ({ educationList }) => {
  return (
    <div className="bg-gradient-to-b from-orange-600 to-purple-600 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Education</h2>
      {educationList.map((education, index) => (
        <div
          key={index}
          className="mb-8 last:mb-0 bg-dark-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-dark-gray-100">{education.institution}</h3>
          <p className="text-dark-gray-200 mb-2">{education.degree} - {education.year}</p>
          <p className="text-dark-gray-200 mt-4">{education.description}</p>
        </div>
      ))}
    </div>
  );
};


const educationList = [
  {
    institution: "Instituto Universitario Juan Pablo Perez Alfonso (IUTEPAL)",
    description: "Focused on software development and data structures. Participated in various coding competitions and hackathons. Graduated with academic distinction and the best performance.",
    year: "2020",
    degree: "Informatic Engineer"
  },
  {
    institution: "Centro Culturale Scalabrini",
    description: "Course where I graduated with the best scores and learned basic gramatic and conversational skills of the Italian language.",
    year: "2021",
    degree: "Basic Italian"
  }
];
const EducationPage: React.FC = () => {

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Education educationList={educationList} />
    </div>
  );
};

export default EducationPage;