"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToAuditTool = () => {
    const auditSection = document.querySelector("#audit-tool-section")
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Impact<span className="text-blue-400">Wolves</span>
            </div>
          </div>

          <div className="hidden md:flex">
            <Button onClick={scrollToAuditTool} className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={scrollToAuditTool} className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
