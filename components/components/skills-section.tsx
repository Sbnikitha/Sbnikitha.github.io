import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Users, Lightbulb, Mic } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "PHP", "Elixir", "Angular"],
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Oracle"],
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Kubernetes",
        "Docker",
        "Spring Boot",
        "React",
        "Maven",
        "Git",
        "Bitbucket",
        "Confluence",
        "Jira",
        "Figma",
        "InVision",
      ],
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "AI/ML & Analytics",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: [
        "Machine Learning",
        "MLOps",
        "Data Analytics",
        "SIFT Feature Extraction",
        "SVM",
        "CNN",
        "Data Visualization",
        "Predictive Analytics",
      ],
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      title: "Leadership & Communication",
      icon: <Users className="w-6 h-6" />,
      skills: [
        "Team Leadership",
        "Project Management",
        "Cross-functional Collaboration",
        "Mentoring",
        "Event Management",
      ],
      color: "bg-red-500/10 text-red-600",
    },
    {
      title: "Public Speaking & Soft Skills",
      icon: <Mic className="w-6 h-6" />,
      skills: [
        "Public Speaking",
        "Presentation Skills",
        "Content Creation",
        "Social Media Management",
        "Event Hosting",
        "Community Building",
      ],
      color: "bg-indigo-500/10 text-indigo-600",
    },
  ]

  const proficiencyLevels = [
    { category: "Java Development", level: 95, description: "Expert level with Spring Boot, Microservices" },
    { category: "Full-Stack Development", level: 90, description: "React, Angular, Node.js, PHP" },
    { category: "Machine Learning", level: 85, description: "MLOps, Model Monitoring, Data Analytics" },
    { category: "Leadership", level: 92, description: "Team management, Public speaking, Mentoring" },
    { category: "Database Management", level: 88, description: "SQL, NoSQL, Data modeling" },
    { category: "Cloud & DevOps", level: 80, description: "Kubernetes, Docker, CI/CD" },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Skills & Expertise</h2>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>{category.icon}</div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground text-center">Proficiency Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {proficiencyLevels.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-card-foreground">{item.category}</span>
                      <span className="text-sm text-accent font-medium">{item.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
