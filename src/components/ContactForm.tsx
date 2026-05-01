'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to send');
      setFormSubmitted(true);
      reset();
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary rounded-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Send Us a Message</h2>
      
      {formSubmitted && (
        <div className="bg-green-900/50 border border-green-700 text-green-100 rounded-lg p-4 mb-6 text-center">
          <p>Thank you for your message. We&apos;ll get back to you soon!</p>
        </div>
      )}
      {submitError && (
        <div className="bg-red-900/50 border border-red-700 text-red-100 rounded-lg p-4 mb-6 text-center">
          <p>{submitError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 bg-primary-light border ${
              errors.name ? 'border-red-500' : 'border-gray-700'
            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="John Doe"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 bg-primary-light border ${
              errors.email ? 'border-red-500' : 'border-gray-700'
            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="john@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-2 bg-primary-light border ${
              errors.subject ? 'border-red-500' : 'border-gray-700'
            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="How can we help?"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 bg-primary-light border ${
              errors.message ? 'border-red-500' : 'border-gray-700'
            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent`}
            placeholder="Your message here..."
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent hover:bg-accent/90 disabled:opacity-50 text-primary font-medium py-2 px-6 rounded inline-flex items-center"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
} 