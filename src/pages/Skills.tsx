const PROGRAMMING_LANGUAGES = [
  "Python",
  "Javascript",
  "Typescript",
  "Java",
]



const Skills: React.FC = () => {
  return (
    <div className="bg-dark-gray-800 text-dark-gray-200 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">Skills</h1>
      
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
        <div className="mb-6 md:mb-0 md:flex-1">
          <h2 className="text-3xl font-semibold mb-4">Programming Languages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">JavaScript</li>
            <li className="text-lg">TypeScript</li>
            <li className="text-lg">Python</li>
            <li className="text-lg">Java</li>
            <li className="text-lg">C++</li>
          </ul>
        </div>
        
        <div className="mb-6 md:mb-0 md:flex-1">
          <h2 className="text-3xl font-semibold mb-4">Frameworks and Libraries</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">React</li>
            <li className="text-lg">Node.js</li>
            <li className="text-lg">Express.js</li>
            <li className="text-lg">Django</li>
            <li className="text-lg">Spring Boot</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
        <div className="mb-6 md:mb-0 md:flex-1">
          <h2 className="text-3xl font-semibold mb-4">Technologies and Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Linux</li>
            <li className="text-lg">SQL</li>
            <li className="text-lg">Docker</li>
            <li className="text-lg">Kubernetes</li>
            <li className="text-lg">Git</li>
          </ul>
        </div>
        
        <div className="md:flex-1">
          <h2 className="text-3xl font-semibold mb-4">Languages</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">Spanish (Native)</li>
            <li className="text-lg">English (Fluent)</li>
            <li className="text-lg">Italian (Basic)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;