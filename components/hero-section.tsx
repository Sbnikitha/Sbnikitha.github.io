"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/nikitha-professional.png",
      alt: "Nikitha in professional attire",
    },
    {
      src: "/nikitha-speaking.jpg",
      alt: "Nikitha speaking at Toastmasters event",
    },
    {
      src: "/nikitha-traditional.png",
      alt: "Nikitha in traditional attire",
    },
    {
      src: "/nikitha-purple-blazer.jpg",
      alt: "Nikitha in purple blazer professional photo",
    },
    {
      src: "/nikitha-samsung-new.jpg",
      alt: "Nikitha at Samsung office",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/6 left-1/2 w-24 h-24 bg-secondary/6 rounded-full blur-lg animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/6 w-40 h-40 bg-accent/7 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Large Image */}
            <div className="order-1 animate-slide-in-left">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden hover-lift group">
                  <img
                    src={images[currentImageIndex].src || "/placeholder.svg"}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />

                  {/* Navigation buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Floating elements around image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/15 rounded-full animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Image indicators */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-accent scale-125 shadow-lg"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Text Content */}
            <div className="order-2 text-center lg:text-left animate-slide-in-right">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
                <span className="animate-typing">Nikitha</span>
                <br />
                <span className="text-accent">Seelam Balaji</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-accent font-semibold mb-6 animate-slide-in-left">
                Java Developer &
                <br />
                Full-Stack Web Engineer
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-pretty animate-slide-in-right leading-relaxed">
                Master's student in Data Analytics at SJSU with experience at Samsung. Passionate about building
                scalable applications and leading technical teams.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 hover-lift animate-fade-in-up animate-stagger-1 text-lg px-6 py-3"
                >
                  <a href="https://github.com/Sbnikitha" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="hover-lift hover-glow animate-fade-in-up animate-stagger-2 bg-transparent text-lg px-6 py-3"
                >
                  <a href="https://www.linkedin.com/in/sbnikitha/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="hover-lift hover-glow animate-fade-in-up animate-stagger-3 bg-transparent text-lg px-6 py-3"
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up animate-stagger-4 hover:text-accent transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Los Gatos, California, USA</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up animate-stagger-5 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>nikithasb2001@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in-up animate-stagger-6 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 (669) 208-9792</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
