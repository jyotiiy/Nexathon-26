import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// This should be in your environment variables
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'nexusvitc@gmail.com',
      subject: `[Nexus Contact Form] ${subject}`,
      text: `
        You have a new contact form submission:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #4f46e5;">Name:</strong> ${name}</p>
            <p><strong style="color: #4f46e5;">Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
            <p><strong style="color: #4f46e5;">Subject:</strong> ${subject}</p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
              <p><strong style="color: #4f46e5; display: block; margin-bottom: 10px;">Message:</strong>
              ${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <p style="font-size: 0.9em; color: #6b7280; margin-top: 20px;">
            This message was sent from the contact form on the Nexus website.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ 
      message: 'Error sending email', 
      error: process.env.NODE_ENV === 'development' ? errorMessage : 'Internal server error' 
    });
  }
}
