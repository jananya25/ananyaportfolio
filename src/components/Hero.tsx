import type React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotligt";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { TechBadge } from "./ui/TechBadge";

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#00ff88] text-black px-20 py-2 rounded-full text-lg font-medium mb-8">
            <ContainerTextFlip
              words={[
                " I imagine",
                "I craft",
                "I learn",
                "I code",
                "I build",
                "I refine",
                "I elevate",
                "I GROW",
              ]}
              className="mb-2"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-pulse-subtle">
            <span className="bg-gradient-to-r from-white via-[#E0E0E0] to-white bg-clip-text text-transparent animate-gradient-flow">
              Ananya Jain
            </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* About Me */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">About me</h2>
            <p className="text-gray-300 mb-4">
              I am an Aspiring Software Engineer with a bachelor's degree in
              computer science and currently pursuing a master's in computer
              applications.
            </p>
            <p className="text-gray-300 mb-6">
              I thrive on solving complex problems and crafting innovative.
          
            </p>
            <p className="text-gray-300 mb-6">
              ✨ I'm not just a developer — I'm a classical dancer, a girl who
              plays piano, and an entrepreneur. Always building, whether it's
              code or a brand! 💃👜👩‍💻
            </p>
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">FIND ME AT</p>
              <a
                href="mailto:ananya.work@gmail.com"
                className="text-[#00ff88] hover:underline"
              >
                ananyajain2348@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ananyajain11/"
                className="text-gray-400 hover:text-[#00ff88] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/jananya25"
                className="text-gray-400 hover:text-[#00ff88] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.instagram.com/ananya.jainn/"
                className="text-gray-400 hover:text-[#00ff88] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <CardSpotlight className="h-100 w-auto rounded-3xl justify-center">
            <div className="flex flex-col items-center gap-8 relative">
              {/* Profile Picture */}
              <div className="relative flex gap-4 items-center justify-between">
                <img
                  src="/ana.jpeg"
                  alt="Ananya Jain"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-white shadow-lg"
                />
              </div>
             

              {/* Name */}
              <div className="text-center">
                {/* <h2 className="text-2xl font-bold text-white mb-1">
                  Ananya Jain
                </h2> */}
                <p className="text-gray-400 text-base">Software Engineer</p>
              </div>

              {/* Tech Stack */}
              <div className="w-full">
                <div className="text-center mb-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Core Technologies
                  </h3>
                  <div className="w-12 h-0.5 bg-[#00ff88] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <TechBadge name="React.js" />
                  <TechBadge name="Node.js" />
                  <TechBadge name="Next.js" />
                  <TechBadge name="JavaScript" />
                  <TechBadge name="Express.js" />
                  <TechBadge name="MySQL" />
                  <TechBadge name="MongoDB" />
                  <TechBadge name="Vercel" />
                  <TechBadge name="AWS" />
                  <TechBadge name="Git" />
                  <TechBadge name="Postman" />
                  <TechBadge name="Tailwind CSS" />
                </div>
              </div>

              {/* Status */}
             
            </div>
          </CardSpotlight>

          {/* Experiments */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-[#00ff88] text-sm mr-2">
                  🧪 CURRENTLY ..
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">
                    IEEE Summer School 📚
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Building IEEE Summer School Website – 2025 with a landing page and an admin dashboard
                  </p>
                  <div className="mt-2">
                    <a href="https://summer-school.bvicam.in/" className="text-[#00ff88] text-xs underline">
                      Click to View
                    </a>
                  </div>
                </div>

                {/* <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2"> ✅</h3>
                  <p className="text-gray-400 text-sm">
                    Building a web app to teach users about investment using
                    interactive tutorials. Used upstox API to fetch real-time
                    stocks data.
                  </p>
                  <div className="mt-2">
                    <span className="text-[#00ff88] text-xs underline">
                      Click to View
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


