"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Example of fake project data (array of project objects) to be used in the component:
const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Developed a scalable e-commerce solution with a focus on backend performance and frontend usability.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    imageUrls: [
      "/placeholder.svg?text=E-commerce+1",
      "/placeholder.svg?text=E-commerce+2",
      "/placeholder.svg?text=E-commerce+3",
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Real-time Chat Application",
    description: "Built a real-time chat application with WebSocket integration and responsive UI.",
    technologies: ["React", "Express.js", "Socket.io", "MongoDB"],
    imageUrls: [
      "/placeholder.svg?text=Chat+App+1",
      "/placeholder.svg?text=Chat+App+2",
      "/placeholder.svg?text=Chat+App+3",
    ],
    githubUrl: "https://github.com/yourusername/chat-app",
    demoUrl: null,
  },
  {
    title: "AI-powered Content Analyzer",
    description:
      "Developed an AI-driven content analysis tool for marketing teams, focusing on NLP and data visualization.",
    technologies: ["Python", "Django", "TensorFlow", "D3.js"],
    imageUrls: [
      "/placeholder.svg?text=AI+Analyzer+1",
      "/placeholder.svg?text=AI+Analyzer+2",
      "/placeholder.svg?text=AI+Analyzer+3",
    ],
    githubUrl: null,
    demoUrl: "https://ai-analyzer-demo.com",
  },
  // Add more projects as needed
]

type Project = {
  title: string
  description: string
  technologies: string[]
  imageUrls: string[]
  githubUrl: string | null
  demoUrl: string | null
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1))
  }

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Image
            src={project.imageUrls[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        )}
        {project.demoUrl && (
          <Button size="sm" asChild>
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

const ProjectsSection: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentProjectIndex * carouselRef.current.offsetWidth,
        behavior: "smooth",
      })
    }
  }, [currentProjectIndex])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 snap-center px-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
            onClick={prevProject}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
            onClick={nextProject}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-6">
          {projectsData.map((_, index) => (
            <Button
              key={index}
              variant={index === currentProjectIndex ? "default" : "outline"}
              size="sm"
              className="mx-1"
              onClick={() => setCurrentProjectIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

