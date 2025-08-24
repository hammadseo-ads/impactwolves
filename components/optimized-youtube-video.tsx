"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OptimizedYouTubeVideoProps {
  videoId: string
  title: string
  className?: string
}

export function OptimizedYouTubeVideo({ videoId, title, className = "" }: OptimizedYouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className={`relative w-full aspect-video rounded-lg overflow-hidden ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className={`relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group ${className}`}>
      {/* Custom Cover with Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4 sm:space-y-6 p-4 sm:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight px-2">
            How to Download Essential Audit Files from Seller Central
          </h3>

          {/* Play Button */}
          <Button
            onClick={handlePlay}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full transition-all duration-300 group-hover:scale-105"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2 sm:mr-3 fill-current" />
            <span className="text-sm sm:text-base lg:text-lg font-semibold">Watch Tutorial</span>
          </Button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
