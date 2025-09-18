import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Trophy } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ARCADE - Architect & Aesthete Platform",
      description:
        "User-friendly platform connecting architects and aesthetes. Led team development and won first prize in JITHACK2021 national-level hackathon competing against 300+ participants.",
      image: "/modern-architecture-platform-website-interface.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      achievements: ["🏆 First Prize in National Hackathon", "👥 Led team of developers", "🎯 Beat 300+ participants"],
    },
    {
      title: "Cocoon Quality Assessment System",
      description:
        "Innovative predictive analytics system for automated cocoon quality assessment using SIFT feature extraction with SVM and CNN models. Revolutionizing sericulture industry productivity.",
      image: "/cocoon-logo.png",
      technologies: ["Python", "Machine Learning", "SIFT", "SVM", "CNN", "Fast API", "React"],
      achievements: ["🤖 Advanced ML Implementation", "📊 Image Processing Pipeline", "🚀 Fast API Backend"],
      codeUrl: "https://github.com/TuzzR/cocoon-ai-backend",
    },
    {
      title: "NutriFun - Nutrition & Fitness Platform",
      description:
        "Comprehensive website providing nutritious diet plans following dietary guidelines with accompanying workouts. Features both general and customized diet plans with personal instructor mentoring.",
      image: "/nutrition-fitness-app-dashboard-with-meal-plans.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      achievements: ["🍎 Personalized Diet Plans", "💪 Integrated Workout System", "👨‍🏫 Mentoring Platform"],
    },
    {
      title: "Physicsopedia Web Application",
      description:
        "Educational platform for physics learning developed as sole developer. Comprehensive resource for students with interactive content and learning materials.",
      image: "/physicsopedia-screenshot.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      achievements: ["📚 Educational Impact", "🔧 Solo Development", "🌐 Live Platform"],
      demoUrl: "https://physicsopedia.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    {project.title}
                    {project.title.includes("ARCADE") && <Trophy className="w-5 h-5 text-yellow-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-card-foreground mb-2">Key Highlights:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-accent/10 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.codeUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
