"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ContainerTextFlipProps {
  words: string[]
  className?: string
}

export function ContainerTextFlip({ words, className }: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative">
        {words.map((word, index) => (
          <span
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-in-out",
              index === currentWordIndex ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2",
            )}
          >
            {word}
          </span>
        ))}
        <span className="invisible">{words[0]}</span>
      </span>
    </div>
  )
}
