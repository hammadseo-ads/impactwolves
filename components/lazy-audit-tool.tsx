"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function LazyAuditTool() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing after load
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Start loading 100px before it comes into view
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div ref={ref} className="w-full">
      <Card className="bg-white border border-gray-200 p-8 shadow-2xl drop-shadow-2xl">
        {!isVisible ? (
          // Loading skeleton before intersection
          <div className="w-full h-[800px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center animate-pulse">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto animate-spin">
                <div className="w-4 h-4 bg-white rounded-full mt-2 ml-2"></div>
              </div>
              <div className="text-gray-600 font-medium">Preparing audit tool...</div>
              <div className="text-sm text-gray-500">Loading advanced analysis engine</div>
            </div>
          </div>
        ) : hasError ? (
          // Error state
          <div className="w-full h-[800px] bg-red-50 border-2 border-red-200 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-red-600 text-xl font-semibold">Unable to load audit tool</div>
              <div className="text-red-500">Please refresh the page or try again later</div>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        ) : (
          // Iframe with loading overlay
          <div className="relative w-full h-[800px]">
            {isLoading && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center z-10">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <div className="text-blue-700 font-medium">Loading audit tool...</div>
                  <div className="text-sm text-blue-600">This may take a few moments</div>
                </div>
              </div>
            )}
            <iframe
              src="https://audit.impactwolves.online"
              width="100%"
              height="800"
              style={{ border: "none", borderRadius: "8px" }}
              title="Amazon Store Audit Tool"
              className="w-full rounded-lg"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              loading="lazy"
            />
          </div>
        )}
      </Card>
    </div>
  )
}
