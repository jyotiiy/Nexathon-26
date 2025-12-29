import { NextResponse } from 'next/server'
import { saveToCsv } from '@/lib/csv-utils'

// Validate the form data
function validateFormData(data: any) {
  if (!data.name || !data.email) {
    return { valid: false, message: 'Name and email are required' }
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { valid: false, message: 'Please enter a valid email address' }
  }
  
  return { valid: true }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Validate the form data
    const validation = validateFormData(formData)
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 }
      )
    }
    
    // Save to CSV
    const saved = await saveToCsv({
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      college: formData.college || '',
      year: formData.year || ''
    })
    
    if (!saved) {
      throw new Error('Failed to save data')
    }
    
    return NextResponse.json({ 
      success: true,
      message: 'Thank you! We\'ll notify you when registration opens.'
    })
    
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission. Please try again later.' },
      { status: 500 }
    )
  }
}
