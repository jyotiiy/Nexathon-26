"use client"

import type React from "react"
import { useState } from "react"
import { Send, User, Mail, Phone, Users, Code, FileText, Sparkles } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import ScrollAnimation from "@/components/features/scroll-animation"
import {ContactCTA} from "@/components/features/contact-cta"
import TiltCard from "@/components/features/tilt-card"

export default function RegisterSection() {
  return (
    <section id="register" className="relative py-20 md:py-32 bg-muted/30">
      <div className="absolute inset-0 grid-pattern-animated opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Register Now"
          subtitle="Secure your spot at NEXATHON 2026 and start your innovation journey"
          highlight="// REGISTER"
        />

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <TiltCard tiltAmount={4}>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 holographic opacity-10" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join NEXATHON 2026?</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Click the button below to register for NEXATHON 2026 through our official EventHub portal.
                    Secure your spot today and be part of an amazing hackathon experience!
                  </p>
                  
                  <a
                    href="https://eventhubcc.vit.ac.in/EventHub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-[var(--font-rajdhani)] font-bold rounded-lg text-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] hover:scale-105 active:scale-95"
                  >
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Register on EventHub
                      <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                  
                  <p className="mt-6 text-sm text-muted-foreground">
                    By registering, you agree to our Terms & Conditions and Privacy Policy
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
