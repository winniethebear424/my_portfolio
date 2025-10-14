import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Amazon Robotics",
      role: "Software Developer",
      duration: "July 2025 – Dec 2025",
      location: "USA",
      description: "Engineered secure AWS infrastructure with IaC and CI/CD automation, optimizing Docker and networking to streamline Linux workload migrations and enhance stability across 1.7K connected devices.",
      technologies: ["JAVA", "Kotlin", "JavaScript", "Python", "AWS"],
      achievements: [
        "• IaC: Designed IAM policies/permissions, migrated software workloads, and deployed end-to-end on Linux from QA → Prod.",
        "• Networking & Connectivity: managed VPC, networking, and Docker endpoints for secure robot-cloud communication.",
        "• Implemented IAM policies and token credential workflows, reinforcing cloud security standards and compliance.",
        "• Streamlined CI/CD pipelines (build–test–deploy), enabling faster and more reliable migration rollouts.",
        "• Tuned Docker plugin(cut redundant ECR logins), IPC–workcell sync, reducing restarts and boosting stability for 1700 devices."
      ]
    },
    {
      company: "iQIYI, Inc",
      role: "Android Software Engineer Intern",
      duration: "May 2024 – Aug 2024",
      location: "Singapore/Remote",
      description: "Engineered scalable ad systems with Spring Boot, gRPC, and PyTorch—optimizing delivery, targeting, and CI/CD pipelines to raise engagement by 15%, accuracy by 25%, and revenue by $400K.",
      technologies: ["OutSystems", "Low-Code Development"],
      achievements: [
  
        "• Built a distributed ad delivery system (Java, Kotlin, Spring Boot and gRPC), integrated with iQIYI’s core video platform for",
        "seamless playback ad using consistent hashing and sharding, boosting engagement by 15% and revenue by $400K.",
        "• Developed a 2D-CNN-based content recognition engine in (PyTorch + OpenCV), improving ad targeting accuracy by 25%.",
        "• Optimized data layer with async I/O, and Redis, MySQL caching. speeding up ad retrieval by 40%, cutting DB load.",
        "• Streamlined GitLab CI/CD workflows, with optimized quality gates and parallel testing, reducing deployment errors by 20%."
      ]
    },
    {
      company: "Huawei Technologies",
      role: "Technical Support Engineer",
      duration: "Dec 2020 – Aug 2022",
      location: "China",
      description: "Improved system reliability and scalability at Huawei by optimizing load balancing, automating ops with Ansible, and tuning databases and monitoring—reducing latency by 25% and downtime by 30%.",
      technologies: ["OutSystems", "Low-Code Development"],
      achievements: [
        "• Collaborated with cross-functional teams (DevOps, Developer, QA) to troubleshoot issues, ensuring services high availability.",
        "• Enhanced systems’ scalability by refining load balancing (Nginx, HAProxy) and API routing, cutting latency by 25%.",
        "• Automated backups, log analysis, and environment health checks using Bash, Ansible, cutting downtime by 30%.",
        "• Refined database performance by analyzing and optimizing SQL queries, implementing indexing strategies, and adjusting access patterns in MySQL and PostgreSQL, improving data retrieval speeds by 40%.",
        "• Optimized monitoring systems with ELK Stack (Elasticsearch, Logstash, Kibana), identifying performance bottlenecks."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey building innovative solutions and growing as a developer
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" style={{ color: '#bcd4e6' }} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" style={{ color: '#bcd4e6' }} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" style={{ color: '#bcd4e6' }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-primary hover:bg-[#bcd4e6]/10"
                          style={{ borderColor: '#bcd4e6' }}
                        >
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
  );
};