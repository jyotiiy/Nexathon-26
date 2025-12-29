"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface NotificationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationForm({ isOpen, onClose }: NotificationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here you would typically send the form data to your backend
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you! We\'ll notify you when registration opens.')
        onClose()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again later.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close notification form"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold mb-4">Get Notified About NEXATHON 2026</h3>
        <p className="text-muted-foreground mb-6">
          Fill in your details to stay updated about the event schedule and registration.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium mb-1">
              College/Institution
            </label>
            <input
              type="text"
              id="college"
              value={formData.college}
              onChange={(e) => setFormData({...formData, college: e.target.value})}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium mb-1">
              Year of Study
            </label>
            <select
              id="year"
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              <option value="5th Year">5th Year</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2.5 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
