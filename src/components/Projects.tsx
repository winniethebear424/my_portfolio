import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Optimized Data Flow with Elasticsearch, RabbitMQ, and Redis (Backend)",
      description: "Built a scalable, OAuth-secured data pipeline with Elasticsearch, RabbitMQ, and Redis caching, featuring efficient parent–child indexing for large-scale data handling.",
      technologies: ["Elasticsearch","RabbitMQ","Redis","Docker","Kubernetes","Google OAuth 2.0","Postman","Python"],
      github: "https://github.com/winniethebear424/Scalable-Event-Driven-Data-Pipeline-Backend-Distributed-Systems-Focused-",
      features: [
        "High-performance data pipeline with Elasticsearch, RabbitMQ, and Redis for efficient data queuing, indexing, and caching.",
        "Secure authentication and access control via Google OAuth 2.0 for protected CRUD operations.",
        "Scalable architecture using Docker and Kubernetes to deploy and orchestrate containerized microservices."
        
      ]
    },
    {
      title: "Cloud IDE",
      description: "Designed and built a full-stack web app inspired by Amazon Prime Video, using React, Express.js, MongoDB, and Auth0 for scalable, secure content management. Implemented modular UI, Redux state handling, and multi-language support with React-i18next.",
      technologies: ["React","Express.js","MongoDB","Redux","Auth0","React-i18next","CSS","JavaScript"],
      github: "https://github.com/winniethebear424/CinemaScoop",
      features: [
        "Full-stack architecture built with React, Express.js, and MongoDB, delivering scalable and secure web functionality.",
        "User authentication and access control powered by Auth0.",
        "Responsive modular UI with CSS and Redux for state management and smooth user interactions.",
        "Multi-language support implemented using React-i18next for global accessibility.",
        "RESTful API integration ensuring efficient data flow between frontend and backend."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#bcd4e6' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development skills, 
            innovative problem-solving, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-[#bcd4e6] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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

                <div className="mt-auto flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};