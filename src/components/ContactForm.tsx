import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    complianceNeeds: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('demo_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            industry: formData.industry,
            compliance_needs: formData.complianceNeeds,
            timeline: formData.timeline,
            message: formData.message || null
          }
        ]);

      if (error) throw error;

      const emailSubject = encodeURIComponent('TrustTrack Compliance Demo Request');
      const emailBody = encodeURIComponent(`New Demo Request:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Industry: ${formData.industry}
Compliance Needs: ${formData.complianceNeeds}
Timeline: ${formData.timeline}

Message:
${formData.message || 'No additional message'}

---
This request has been saved to the database.`);

      const mailtoLink = `mailto:naveen@trusttrack.io,arun@trusttrack.io,arpit@trusttrack.io?subject=${emailSubject}&body=${emailBody}`;
      window.location.href = mailtoLink;

      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          industry: '',
          complianceNeeds: '',
          timeline: '',
          message: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting demo request:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Schedule a Demo</h2>
            <p className="text-gray-500 mt-1">Fill out the form below and we'll get back to you shortly</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isSubmitting}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your Company Name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select Industry</option>
                <option value="Batteries">Batteries</option>
                <option value="Cement">Cement</option>
                <option value="Steel">Steel</option>
                <option value="Aluminum">Aluminum</option>
                <option value="Electronics">Electronics</option>
                <option value="Automotive">Automotive</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="complianceNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                Compliance Needs *
              </label>
              <select
                id="complianceNeeds"
                name="complianceNeeds"
                required
                value={formData.complianceNeeds}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select Compliance</option>
                <option value="DBP">Digital Battery Passport (DBP)</option>
                <option value="CBAM">CBAM Reporting</option>
                <option value="ESG">ESG Compliance</option>
                <option value="DBP + CBAM">DBP + CBAM</option>
                <option value="DBP + ESG">DBP + ESG</option>
                <option value="CBAM + ESG">CBAM + ESG</option>
                <option value="All (DBP + CBAM + ESG)">All (DBP + CBAM + ESG)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
              When do you need to be compliant? *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Select Timeline</option>
              <option value="Immediately">Immediately</option>
              <option value="Within 3 months">Within 3 months</option>
              <option value="Within 6 months">Within 6 months</option>
              <option value="Within 1 year">Within 1 year</option>
              <option value="2026 (CBAM deadline)">2026 (CBAM deadline)</option>
              <option value="2027 (DBP deadline)">2027 (DBP deadline)</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your compliance needs..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <div className="text-sm text-emerald-800">
                <strong>Success!</strong> Your demo request has been submitted. We'll contact you shortly.
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <div className="text-sm text-red-800">
                <strong>Error:</strong> {errorMessage}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Submit Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
