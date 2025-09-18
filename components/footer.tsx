import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg mb-8 text-primary-foreground/80 text-pretty">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss projects, opportunities, or just connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5" />
                <span>nikithasb2001@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (669) 208-9792</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5" />
                <span>Los Gatos, California, USA</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <Button asChild variant="secondary" size="sm">
                  <a href="https://github.com/Sbnikitha" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href="https://www.linkedin.com/in/sbnikitha/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm">
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60">
              © 2025 Nikitha Seelam Balaji. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
