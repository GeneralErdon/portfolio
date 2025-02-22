import { Github, Linkedin, Mail, FileText, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactLinks = [
  { name: "Email", icon: Mail, href: "mailto:john@example.com" },
  { name: "GitHub", icon: Github, href: "https://github.com/johndoe" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/johndoe" },
  { name: "CV", icon: FileText, href: "https://johndoe.com/cv" },
  { name: "WhatsApp", icon: Phone, href: "https://wa.me/1234567890" },
  { name: "Telegram", icon: Send, href: "https://t.me/johndoe" },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out through any of the platforms
          below!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link) => (
            <Button key={link.name} variant="outline" className="w-full" asChild>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

