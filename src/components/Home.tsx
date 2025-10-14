import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

export const Home = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      style={{ backgroundColor: '#bcd4e6' }}>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-glow">
              <img 
                src={profilePicture} 
                alt="Venni Yu - Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="lg:w-1/2 space-y-6 text-primary">
            <div className="text-center lg:text-left">
              <br/>
              
              <p className="text-lg md:text-xl leading-relaxed opacity-80 text-justify mb-4">
                Hi there! I'm 
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Venni Yu
              </h1>

              <h3 className="text-2xl md:text-3xl font-medium opacity-80 mb-4">
                Software Engineer & a Graduate Student
              </h3>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center lg:justify-start mt-8">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://drive.google.com/file/d/1Zh20304mCdEgm3PUiTThdvuzZfYhHsv1/view?usp=sharing', '_blank')}
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
