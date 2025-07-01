"use client"

import type React from "react"
import { Building } from "lucide-react"

const Experience: React.FC = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Companies */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Experiences</h2>
            <p className="text-gray-400 mb-8">I've worked as a..</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors duration-200 hover:bg-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Technical Services Specialist</h3>
                  <p className="text-[#00ff88] text-sm">Safe Navigation</p>
                  <p className="text-gray-400 text-sm">Managed and resolved client service requests by analyzing and delivering digital navigation charts, Provided
technical support and documentation to assist clients in ensuring seamless maritime operations</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors duration-200 hover:bg-white/5">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Building className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Co-Founder</h3>
                  <p className="text-[#00ff88] text-sm">Rareame: A Lifestyle Brand</p>
                  <p className="text-gray-400 text-sm">Founder of Rareame, a women’s fashion accessories brand specialising in trendy and stylish bags, with a growing community of 5,000+ followers
on Instagram.   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-6">
              <span className="text-[#00ff88] text-2xl">🎓 TIMELINE</span>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-[#00ff88] pl-6 transition-all duration-200 hover:pl-7">
                <div className="flex items-center text-[#00ff88] mb-2">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full mr-2 -ml-8"></div>
                  <h3 className="font-bold">Bharati Vidyapeeth’s Institute of Computer Applications and Management</h3>
                </div>
                <p className="text-white">Masters of Computer Applications</p>
                <p className="text-gray-400 text-sm">Sep. 2024 – May 2026</p>
                <p className="text-gray-400 text-sm mt-1">9.14 CGPA</p>
              </div>

              <div className="border-l-2 border-[#00ff88] pl-6 transition-all duration-200 hover:pl-7">
                <div className="flex items-center text-[#00ff88] mb-2">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full mr-2 -ml-8"></div>
                  <h3 className="font-bold">Delhi University </h3>
                </div>
                <p className="text-white">Bachelors of Science - Computer Science</p>
                <p className="text-gray-400 text-sm">Oct. 2020 – May 2023</p>
                <p className="text-gray-400 text-sm mt-1"> 8.02 CGPA</p>
              </div>
                     <div className="border-l-2 border-[#00ff88] pl-6 transition-all duration-200 hover:pl-7">
                <div className="flex items-center text-[#00ff88] mb-2">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full mr-2 -ml-8"></div>
                  <h3 className="font-bold">Ramjas School, Pusa Road </h3>
                </div>
                <p className="text-white">12th Standard </p>
                <p className="text-gray-400 text-sm">April 2018 – April 2020</p>
                <p className="text-gray-400 text-sm mt-1">94 percent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
