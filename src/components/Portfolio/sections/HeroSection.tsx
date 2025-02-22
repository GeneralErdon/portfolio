import { Button } from "@/components/ui/button"
import { profileDummydata } from "@/dummyData/profile"

export default function HeroSection() {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{profileDummydata.name}</h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">{profileDummydata.role}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        {profileDummydata.role_description}
      </p>
      <Button size="lg">Get in touch</Button>
    </section>
  )
}

