"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Database, Flame, Folder, Smartphone, Code2, Wind, FileText, Server, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import type { Variants } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "IEEE Summer School BVICAM",
    description: 'Developed a responsive registration portal for the IEEE Summer School BVICAM 2025, featuring a landing page, admin dashboard.',
    technologies: [
      { name: "Next.js", icon: Globe },
      { name: "TailwindCSS", icon: Wind },
      { name: "Node.js", icon: Code2 },
      { name: "Cloudinary", icon: Folder },
      { name: "MongoDB", icon: Database },
      { name: "Vercel", icon: Server },
    ],
    image: "/summer.jpg?height=400&width=600",
    status: "Completed",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Investory",
    description: "Simulate real-time stock trading using virtual money, quizzes, levels, and a virtual trading system. Integrated authentication and Interactive levels.",
    technologies: [
      { name: "Next.js", icon:  Globe },
      { name: "Node.js", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "AWS", icon: Server },
      { name: "Vercel", icon: Server },
      { name: "Socket.io", icon: Flame },
    ],
    image: "/placeholder.svg?height=400&width=600",
    status: "Completed",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "DSSYWLC -2024",
    description: "Designed and developed a user-friendly website for an IEEE conference with over 250 paid sign-ups. Built a teacher dashboard for managing and verifying entries",
    technologies: [
         { name: "Next.js", icon: Globe },
      { name: "TailwindCSS", icon: Wind },
      { name: "Node.js", icon: Code2 },
      { name: "Cloudinary", icon: Folder },
      { name: "MongoDB", icon: Database },
      { name: "Vercel", icon: Server },
    
    ],
    image: "/IEEE.jpg?height=400&width=600",
    status: "Completed",
    color: "from-orange-500/20 to-red-500/20",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function ProjectsShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white p-6 overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Folder className="w-5 h-5 text-green-400" />
          </motion.div>
          <motion.h1
            className="text-green-400 font-semibold text-lg tracking-wide"
            animate={{
              textShadow: [
                "0 0 5px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.8)",
                "0 0 5px rgba(34, 197, 94, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            PROJECTS
          </motion.h1>
        </motion.div>

        {/* Animated Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="perspective-1000 h-full"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  animate={
                    hoveredCard === project.id
                      ? {
                          boxShadow: [
                            "0 0 0 1px rgba(34, 197, 94, 0.3)",
                            "0 0 0 3px rgba(34, 197, 94, 0.6)",
                            "0 0 0 1px rgba(34, 197, 94, 0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                <CardHeader className="pb-4 relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <CardTitle className="text-white text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300 min-h-[2rem]">
                      {project.title}
                    </CardTitle>

                    {/* Technologies Used Section */}
                    <div className="mb-4">
                      <motion.h3
                        className="text-gray-400 text-sm font-medium mb-3"
                        animate={hoveredCard === project.id ? { color: "#10b981" } : {}}
                      >
                        Technologies Used
                      </motion.h3>
                      <div className="flex flex-wrap gap-2 min-h-[3rem]">
                        {project.technologies.map((tech, techIndex) => {
                          const IconComponent = tech.icon
                          return (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: index * 0.1 + techIndex * 0.05 + 0.5,
                                type: "spring",
                                stiffness: 200,
                              }}
                              whileHover={{
                                scale: 1.1,
                                rotate: 5,
                              }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white flex items-center gap-1.5 px-2 py-1 transition-all duration-300 cursor-pointer"
                              >
                                <motion.div
                                  animate={hoveredCard === project.id ? { rotate: 360 } : {}}
                                  transition={{ duration: 0.5 }}
                                >
                                  <IconComponent className="w-3 h-3" />
                                </motion.div>
                                {tech.name}
                              </Badge>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10 flex-grow flex flex-col">
                  {/* Project Screenshot with zoom effect */}
                  <motion.div
                    className="relative aspect-video rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700 cursor-pointer flex-shrink-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} screenshot`}
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 w-full h-full"
                      />
                    </div>

                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"
                      animate={hoveredCard === project.id ? { opacity: 0.3 } : { opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Zoom indicator */}
                    <motion.div
                      className="absolute top-2 right-2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    </motion.div>
                  </motion.div>

                  {/* Project Description */}
                  <motion.div
                    className="flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <CardDescription className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 min-h-[3rem]">
                      {project.description}
                    </CardDescription>
                  </motion.div>

                  {/* Animated View More Button */}
                  <motion.div
                    className="mt-auto pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                  >
                    <Button
                      variant="outline"
                      className="w-fit bg-transparent border-gray-600 text-white hover:bg-green-600 hover:border-green-600 hover:shadow-lg hover:shadow-green-600/25 group/btn transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Button background animation */}
                      <motion.div
                        className="absolute inset-0 bg-green-600"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center">
                        View more
                        <motion.div
                          animate={
                            hoveredCard === project.id
                              ? {
                                  x: 4,
                                  y: -4,
                                  rotate: 45,
                                }
                              : { x: 0, y: 0, rotate: 0 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight className="w-4 h-4 ml-1" />
                        </motion.div>
                      </span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
