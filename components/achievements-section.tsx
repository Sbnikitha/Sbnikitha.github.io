import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Mic, Heart } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      category: "Toastmasters Leadership",
      icon: <Mic className="w-6 h-6" />,
      images: ["/most-improved-toastmaster.jpg", "/area-champion-award.jpg", "/new-best-role-taker.jpg"],
      imagePosition: "right",
      items: [
        {
          title: "Most Improved Toastmaster Award",
          period: "Jan 2025 (Aug-Dec 2024)",
          description: "Recognized for exceptional growth in public speaking and leadership skills",
        },
        {
          title: "Leader of the Term",
          period: "Jan-July 2024",
          description: "Led Toastmasters chapter and guided members in their development journey",
        },
        {
          title: "Sergeant-at-Arms",
          period: "Executive Committee",
          description: "Organized and conducted meetings, strengthening leadership and public speaking skills",
        },
        {
          title: "Installation Host",
          period: "Two Official Ceremonies",
          description: "Enhanced event management and presentation skills through hosting duties",
        },
        {
          title: "Triple Crown Award Progress",
          period: "Expected Feb 2025",
          description: "Currently pursuing this prestigious Toastmasters achievement",
        },
      ],
    },
    {
      category: "Technical Achievements",
      icon: <Trophy className="w-6 h-6" />,
      images: ["/team-photo.jpg", "/hackathon-first-prize.jpg"],
      imagePosition: "left",
      items: [
        {
          title: "First Prize - National Level Coding Hackathon",
          period: "Jun 2021",
          description: "Won JITHACK2021 competing against 300+ participants with ARCADE project",
        },
        {
          title: "Mentoring Opportunity",
          period: "Mar 2022 - May 2023",
          description: "Selected to mentor participants in national level hackathons",
        },
        {
          title: "Judge - CMS Jain University Fest",
          period: "Nov 2023, Jan & March 2024",
          description: "Served as technical judge for university-level competitions",
        },
        {
          title: "First Place - College Dance Competition",
          period: "Jun 2022",
          description: "Won solo dance competition showcasing artistic talents",
        },
      ],
    },
    {
      category: "Community & Volunteering",
      icon: <Heart className="w-6 h-6" />,
      images: ["/volunteer-award.jpg", "/teaching-volunteer.jpg", "/volunteer-presentation.jpg"],
      imagePosition: "right",
      items: [
        {
          title: "Indian Student Organization SJSU",
          period: "2025-2026",
          description: "Social Media Coordinator and Content Creator for ISO community",
        },
        {
          title: "Rotaract Teaching Initiative",
          period: "Ongoing",
          description: "Taught underprivileged students through community outreach programs",
        },
        {
          title: "Educational Workshop Presenter",
          period: "Community Outreach",
          description: "Conducted educational seminars and workshops for diverse audiences",
        },
        {
          title: "Art of Living Foundation",
          period: "Volunteer",
          description: "Contributed to kitchen services and community support activities",
        },
        {
          title: "College Website Team Member",
          period: "JIT",
          description: "Contributed to institutional web development and maintenance",
        },
        {
          title: "Research Project Assistant",
          period: "Data Cleaning",
          description: "Assisted in plant disease detection research through data preprocessing",
        },
      ],
    },
  ]

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12 animate-fade-in-up">Achievements</h2>

          <div className="space-y-12">
            {achievements.map((category, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border hover-lift animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent animate-pulse">{category.icon}</div>
                      {category.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-start ${
                      category.imagePosition === "left" ? "" : "lg:grid-flow-col-dense"
                    }`}
                  >
                    <div className={`space-y-4 ${category.imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}>
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className="bg-muted/50 p-4 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-muted/70 hover-lift group"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-card-foreground text-pretty group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <Badge
                              variant="outline"
                              className="text-xs whitespace-nowrap ml-2 group-hover:bg-accent/10"
                            >
                              {item.period}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className={`${category.imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="grid grid-cols-1 gap-4">
                        {category.images.map((image, i) => (
                          <div
                            key={i}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${category.category} ${i + 1}`}
                              className={`w-full group-hover:scale-110 transition-transform duration-500 ${
                                category.category === "Toastmasters Leadership"
                                  ? i === 0
                                    ? "h-48 object-cover object-center scale-75" // First image stays centered
                                    : i === 1
                                      ? "h-48 object-cover object-top scale-75" // Second image shows top portion
                                      : "h-48 object-cover object-center scale-75" // Third image now shows center portion
                                  : "h-48 object-cover"
                              }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                      </div>
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
