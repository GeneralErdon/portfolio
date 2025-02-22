import Image from "next/image"
import { Server, Database, Code, Globe } from "lucide-react"
import { FC } from "react"
import { profileDummydata } from "@/dummyData/profile"

interface TechnologyProps {
  icon: React.ReactNode
  name: string
}

const Technology: FC<TechnologyProps> = ({ icon, name }) => (
  <li className="flex items-center">
    {icon}
    {name}
  </li>
)




const technologies:TechnologyProps[] = [
  { icon: <Server className="mr-2" />, name: "Django" },
  { icon: <Database className="mr-2" />, name: "PostgreSQL" },
  { icon: <Code className="mr-2" />, name: "Python" },
  { icon: <Code className="mr-2" />, name: "Typescript/Javascript" },
  { icon: <Globe className="mr-2" />, name: "React" },
]





export default function AboutMeSection() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <Image src="/placeholder.svg" alt="John Doe" width={300} height={300} className="rounded-full" />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4">
            {profileDummydata.about_me.description}
          </p>
          <h3 className="text-xl font-semibold mb-2">Technologies I&apos;m proficient in:</h3>
          <ul className="grid grid-cols-2 gap-2">
            {technologies.map((tech, index) => (
              <Technology key={index} {...tech} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

