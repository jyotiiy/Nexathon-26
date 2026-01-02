"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import SectionHeader from "@/components/features/section-header"
import { SimpleContactCta } from "@/components/features/simple-contact-cta"

const venueInfo = {
  name: "Vellore Institute of Technology, Chennai",
  address: "Kelambakkam - Vandalur Road, Rajan Nagar",
  city: "Chennai, Tamil Nadu 600127",
  date: "First week of March, 2026",
  time: "10:00 AM onwards",
  mapLink:
    "https://www.google.com/maps/place/Vellore+Institute+of+Technology,+Chennai/",
}

export default function ScheduleSection() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Event Schedule"
          subtitle="24 hours of non-stop innovation, learning, and creation"
          highlight="// SCHEDULE"
        />

        {/* Venue Info */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left Content */}
            <div className="space-y-4">
              <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground">
                {venueInfo.name}
              </h3>

              <div className="space-y-2">
                {/* Address + View on Map */}
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a
                    href={venueInfo.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[var(--font-sans)] text-sm hover:text-primary transition-colors"
                  >
                    {venueInfo.address}, {venueInfo.city} ·{" "}
                    <span className="underline underline-offset-4">
                      View on map
                    </span>
                  </a>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-[var(--font-sans)] text-sm">
                    {venueInfo.date}
                  </span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-[var(--font-sans)] text-sm">
                    {venueInfo.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable Map Icon */}
            <div className="flex-shrink-0">
              <a
                href={venueInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="w-32 h-32 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center pulse-glow hover:scale-105 transition-transform cursor-pointer">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Schedule Coming Soon */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse" />
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h3 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-foreground mb-3">
            Schedule Coming Soon
          </h3>

          <p className="text-muted-foreground max-w-lg mx-auto font-[var(--font-sans)]">
            We're working hard to finalize an amazing schedule for NEXATHON 2026.
            Check back soon for updates on workshops, talks, and events!
          </p>

          <div className="mt-8">
            <SimpleContactCta>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium hover:bg-primary/10 transition-colors">
                <Clock className="w-4 h-4" />
                <span>Stay Tuned</span>
              </button>
            </SimpleContactCta>
          </div>
        </div>
      </div>
    </section>
  )
}
