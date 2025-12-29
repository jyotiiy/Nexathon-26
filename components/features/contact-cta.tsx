import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/features/scroll-animation"
import { useState } from "react"
import { NotificationForm } from "./notification-form"

interface ContactCTAProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactCTA({ children, className = '' }: ContactCTAProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <ScrollAnimation className={`mt-16 text-center ${className}`}>
      <div 
        className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/40 hover:bg-card/80 transition-all duration-300`}
        onClick={(e) => {
          const target = e.target as HTMLElement
          if (target.closest('a[href="#contact"]') || target.closest('button')) {
            e.preventDefault()
            setIsFormOpen(true)
          }
        }}
      >
        {children}
      </div>
      
      <NotificationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </ScrollAnimation>
  )
}
