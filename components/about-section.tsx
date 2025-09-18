import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-slide-in-left">About Me</h2>

          <Card className="bg-card border-border hover-lift animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-slide-in-left">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">Passionate Developer & Leader</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    I'm currently pursuing my Master's in Data Analytics at San Jose State University, building on my
                    strong foundation in Computer Science Engineering from VTU, India.
                  </p>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    With hands-on experience as a Software Engineer at Samsung Electro-Mechanics, I've developed AI
                    applications, managed MLOps pipelines, and led cross-functional teams. My work contributed to
                    projects that achieved the highest rankings.
                  </p>
                  <p className="text-muted-foreground text-pretty">
                    Beyond coding, I'm passionate about public speaking and leadership through Toastmasters, where I've
                    earned recognition as the "Most Improved Toastmaster" and served in various leadership roles. I
                    believe in continuous learning and giving back to the community through mentoring and volunteering.
                  </p>
                </div>
                <div className="space-y-4 animate-slide-in-right">
                  <div className="bg-muted p-4 rounded-lg hover-lift animate-fade-in-up animate-stagger-1">
                    <h4 className="font-semibold text-accent mb-2">Current Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Master's in Data Analytics at SJSU, exploring advanced data visualization, machine learning
                      pipelines, and mathematical methods for analytics.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg hover-lift animate-fade-in-up animate-stagger-2">
                    <h4 className="font-semibold text-accent mb-2">Interests</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-stack development, AI/ML applications, public speaking, classical and freestyle dancing, logo
                      design, and learning new languages.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg hover-lift animate-fade-in-up animate-stagger-3">
                    <h4 className="font-semibold text-accent mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">English, Hindi, Telugu, Kannada, Korean (Beginner)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
