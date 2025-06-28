import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "lucide-react";
import {
  ArrowUpRight,
  Database,
  Flame,
  Folder,
  Smartphone,
  Code2,
  Wind,
  FileText,
  Server,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "IEEE Summer-School",
    description:
      "Built IEEE Summer School BVICAM – 2025 with registrations portal, a landing page and an admin dashboard",
    technologies: [
      { name: "Next.js", icon: Globe },
      { name: "TailwindCSS", icon: Wind },
      { name: "MongoDB", icon: Database },
      { name: "Vercel", icon: Globe },
      { name: "Next.js", icon: Globe },
    ],
    image: "/placeholder.svg?height=400&width=600",
    status: "Completed",
    color: "from-blue-500/20 to-purple-500/20",
  },

  {
    id: 2,
    title: "Investory",
    description:
      "Building a web app to teach users about investment using interactive tutorials. Used upstox API to fetch real-time stocks data",
    technologies: [
      { name: "Next.js", icon: Globe },
      { name: "Firebase", icon: Flame },
      { name: "Vercel", icon: Globe },
      { name: "PostgreSQL", icon: Database },
    ],
    image: "/placeholder.svg?height=400&width=600",
    status: "Completed",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "DSSYWLC-24",
    description: "",
    technologies: [
      { name: "Flutter", icon: Smartphone },
      { name: "Dart", icon: Code2 },
      { name: "Firebase", icon: Flame },
    ],
    image: "/placeholder.svg?height=400&width=600",
    status: "Completed",
    color: "from-orange-500/20 to-red-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    trasition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0 ,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        },
    },
}

const headerVariants = {
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
    return(
        <div className="min-h-screen bg-black text-white p-6 overflow-hidden">
            {/*Animated */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">


            </div>


            
        </div>
    )

};





function ProjectsShowcase() {
    throw new Error("Function not implemented.");
}

