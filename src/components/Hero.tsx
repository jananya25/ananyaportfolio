import React from "react";
import {
  User,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { CardSpotlight } from "./ui/card-spotligt";

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#00ff88] text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
            I design and develop!
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Ananya Jain
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* About Me */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">About me</h2>
            <p className="text-gray-300 mb-4">
              I am an Aspiring Software Engineer with a bachelor's degree in
              computer science and currently pursuing a master's in computer
              applications.
            </p>
            <p className="text-gray-300 mb-6">
              I thrive on solving complex problems and crafting innovative
              solutions using cutting-edge technologies.I am passionate,
              creative, a team player, and always eager to learn new skills and
              take on new challenges. 🧠
            </p>
            <p className="text-gray-300 mb-6">
              ✨ I’m not just a developer — I’m a classical dancer, a girl who
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

          <CardSpotlight className="h-96 w-96 flex flex-col items-center rounded-3xl justify-center gap-4 p-4">
            {/* Profile Picture */}
            <div className="relative z-20">
              <img
                src="/ana.jpeg" 
                alt="Ananya Jain"
                width={130}
                height={130}
                className="rounded-full border-2 border-black shadow-lg"
              />
            </div>

            {/* Name */}
            <p className="text-xl font-bold relative z-20 text-white">
              Ananya Jain
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center items-center gap-3 relative z-20 mt-2">
              <img src="/tech/react.png" alt="React" width={30} height={30} />
              <img
                src="/tech/nextjs.png"
                alt="Next.js"
                width={30}
                height={30}
              />
              <img
                src="/tech/nodejs.png"
                alt="Node.js"
                width={30}
                height={30}
              />
              <img
                src="/tech/typescript.png"
                alt="TypeScript"
                width={30}
                height={30}
              />
              <img
                src="/tech/tailwind.png"
                alt="Tailwind CSS"
                width={30}
                height={30}
              />
              <img
                src="/tech/mongodb.png"
                alt="MongoDB"
                width={30}
                height={30}
              />
            </div>
          </CardSpotlight>

          {/* Experiments */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-[#00ff88] text-sm mr-2">
                  🧪 CURRENTLY WORKING ..
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">IEEE Summer School 📚</h3>
                  <p className="text-gray-400 text-sm">
                    Built IEEE Summer School Website – 2025 with 200+ registrations, a landing page and an admin dashboard
                    
                  </p>
                  <div className="mt-2">
                    <span className="text-[#00ff88] text-xs underline">Click to View</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Investory ✅</h3>
                  <p className="text-gray-400 text-sm">
                    Building a web app to teach users about investment using interactive tutorials. Used upstox
API to fetch real-time stocks data.
                  </p>
                  <div className="mt-2">
                    <span className="text-[#00ff88] text-xs underline">Click to View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
