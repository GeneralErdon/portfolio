import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as LucideIcons from "lucide-react"

// Example of fake skills data (categorized skills object) for the Skills Section:
const skillsData = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Next.js",
    "Redux",
    "Axios",
    "HTML",
    "CSS",
    "Responsive Design",
    "Testing",
  ],
  Backend: [
    "Python",
    "Django",
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Serverless Functions",
    "Authentication & Authorization (JWT, OAuth)",
  ],
  DevOps: ["Docker", "CI/CD", "Git", "GitHub", "GitLab", "AWS", "Server Management", "Deployment Strategies"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "NoSQL"],
  "Other Skills": [
    "Problem Solving",
    "Algorithm Design",
    "Data Structures",
    "Communication",
    "Teamwork",
    "Agile Methodologies",
  ],
}

const iconMap: { [key: string]: keyof typeof LucideIcons } = {
  React: "Code",
  TypeScript: "FileJson",
  JavaScript: "FileJson",
  "Tailwind CSS": "Palette",
  "Next.js": "Code",
  Redux: "Database",
  Axios: "Send",
  HTML: "FileCode",
  CSS: "Paintbrush",
  Python: "FileCode",
  Django: "Server",
  "Node.js": "Server",
  "Express.js": "Server",
  "REST APIs": "Network",
  GraphQL: "Network",
  PostgreSQL: "Database",
  MySQL: "Database",
  MongoDB: "Database",
  Docker: "Box",
  "CI/CD": "GitBranch",
  Git: "GitBranchIcon",
  GitHub: "Github",
  Gitlab: "GitlabIcon",
  AWS: "Cloud",
  SQL: "Database",
  NoSQL: "Database",
}

const SkillCard: React.FC<{ skill: string }> = ({ skill }) => {
  const IconComponent = LucideIcons[iconMap[skill] || "Circle"] as React.ElementType

  return (
    <Card className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
      <IconComponent className="h-5 w-5 mr-2" />
      <span>{skill}</span>
    </Card>
  )
}

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <Tabs defaultValue={Object.keys(skillsData)[0]}>
          <TabsList className="flex justify-center flex-wrap mb-8">
            {Object.keys(skillsData).map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skillsData).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <Card>
                <CardHeader>
                  <CardTitle>{category} Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                      <SkillCard key={skill} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default SkillsSection

