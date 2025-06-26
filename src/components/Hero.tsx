import React from 'react';
import { User, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#00ff88] text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
          
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
            I am an Aspiring Software Engineer with a bachelor's degree in computer science and currently pursuing a master's in computer applications. 
            </p>
            <p className="text-gray-300 mb-6">
             I thrive on solving complex problems and crafting innovative solutions using cutting-edge technologies.I am passionate, creative, a team player, and always eager to learn new skills and take on new challenges. 🧠
            </p>
            
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-2">FIND ME AT</p>
              <a href="mailto:ananya.work@gmail.com" className="text-[#00ff88] hover:underline">
                ananya.work@gmail.com
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="md:col-span-1 flex justify-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center">
                  <User className="text-black" size={32} />
                </div>
                <div className="ml-4">
                  <div className="flex space-x-4 text-sm">
                    <div className="text-center">
                      <div className="text-white font-bold">3.2K</div>
                      <div className="text-gray-400">⭐ Contributions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">127</div>
                      <div className="text-gray-400">📊 Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">2.8K</div>
                      <div className="text-gray-400">📖 Commits</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-white font-bold text-lg">Ananya</h3>
                <p className="text-gray-400 text-sm">@ananya • Jan 15, 2024</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">#frontend</span>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">#react</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">#typescript</span>
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">#nodejs</span>
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs">#ui-design</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-800"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-800"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-800"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-gray-800"></div>
                </div>
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
                  ⚡ daily.dev
                </div>
              </div>
            </div>
          </div>

          {/* Experiments */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-[#00ff88] text-sm mr-2">🧪 EXPERIMENTS</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">AI Chat Bot</h3>
                  <p className="text-gray-400 text-sm">Intelligent conversational assistant</p>
                  <div className="mt-2">
                    <span className="text-[#00ff88] text-xs">💬</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-white font-bold mb-2">Design System</h3>
                  <p className="text-gray-400 text-sm">Component library & guidelines</p>
                  <div className="mt-2">
                    <span className="text-[#00ff88] text-xs">🎨</span>
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