import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">Full-Stack Web Developer</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Passionate about building robust and efficient web solutions, specializing in backend development.
      </p>
      <Button size="lg">Get in touch</Button>
    </section>
  )
}

