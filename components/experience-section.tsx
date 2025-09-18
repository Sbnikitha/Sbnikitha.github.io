import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer (Java Full Stack Developer)",
      company: "Samsung Electro-Mechanics",
      period: "May 2022 - Jun 2023",
      location: "India",
      description:
        "Developed AI applications (MLOps) with comprehensive unit testing and collaborated with cross-functional teams to integrate AI components.",
      achievements: [
        "Made major contribution to project that secured highest ranking",
        "Solely managed Keycloak integration setup and deployment",
        "Developed reusable Java components for streamlined development",
        "Independently managed ML model monitoring module",
        "Implemented regression and classification metrics (MSE, RMSE, MAE, precision, recall)",
        "Designed data drift detection system for image and tabular data",
        "Proposed novel model retention mechanism to address drift",
      ],
      technologies: ["Java", "Spring Boot", "MLOps", "Keycloak", "Machine Learning"],
    },
    {
      title: "Full Stack Web Developer",
      company: "Stargazer Edutech LLP",
      period: "Apr 2021 - May 2022",
      location: "Remote",
      description: "Sole developer of physicsopedia web application, handling both frontend and backend development.",
      achievements: [
        "Built complete web application from scratch",
        "Managed entire development lifecycle independently",
        "Created educational platform for physics learning",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Java Group Leader",
      company: "Coders Club",
      period: "Jun 2021",
      location: "College",
      description: "Led Java study group and mentored junior developers in advanced Java technologies.",
      achievements: [
        "Mentored and trained juniors and peers",
        "Provided guidance on coding practices and project work",
        "Covered advanced topics including Spring Boot, Microservices, JWT",
      ],
      technologies: ["Java", "Spring Framework", "Spring Boot", "Microservices", "JDBC", "JWT"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-accent mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Removed conditional image display for Samsung experience */}
                  <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-accent/10 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
