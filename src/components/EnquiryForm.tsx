"use client";

import React, { useState } from "react";
import { Send, CheckCircle, MessageSquare } from "lucide-react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

interface EnquiryFormProps {
  initialService?: string;
  initialCity?: string;
  cardStyle?: boolean;
}

export default function EnquiryForm({
  initialService = "",
  initialCity = "",
  cardStyle = true
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService,
    city: initialCity,
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ownerPhone = "+919989391930";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-+]/g, "").slice(-10))) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number";
    }

    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.city) newErrors.city = "Please select a city";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Trigger WhatsApp Redirect
    const formattedText = `*New Lead Enquiry - AJ Safety Net Solutions*
Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city.toUpperCase()}
Service: ${formData.service.replace(/-/g, " ").toUpperCase()}
Message: ${formData.message || "Requesting quote & site measurement."}`;

    const waUrl = `https://api.whatsapp.com/send?phone=${ownerPhone.replace("+", "")}&text=${encodeURIComponent(formattedText)}`;
    
    setIsSubmitted(true);
    
    // Open in new window or redirect
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-100 rounded-2xl shadow-xl min-h-[400px] animate-fade-reveal">
        <CheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
        <h3 className="text-xl md:text-2xl font-bold font-sora text-navy mb-2">Thank You, {formData.name}!</h3>
        <p className="text-xs md:text-sm text-gray-600 max-w-sm mb-6">
          Your details are verified. Redirecting you to WhatsApp to connect with Owner Ajay instantly...
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=${ownerPhone.replace("+", "")}`}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all hover:-translate-y-0.5"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          Connect Instantly
        </a>
      </div>
    );
  }

  const containerClasses = cardStyle 
    ? "p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-xl animate-fade-reveal"
    : "w-full animate-fade-reveal";

  return (
    <div className={containerClasses}>
      <h3 className="text-lg md:text-xl font-bold font-sora text-navy mb-6">
        Request Free Site Visit & Quote
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full px-4 py-2.5 rounded-lg border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
              errors.name ? "border-red-500 bg-red-50/10" : "border-gray-200"
            }`}
          />
          {errors.name && <span className="text-xxs text-red-500 mt-1 block">{errors.name}</span>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Mobile Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9989391930"
            className={`w-full px-4 py-2.5 rounded-lg border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
              errors.phone ? "border-red-500 bg-red-50/10" : "border-gray-200"
            }`}
          />
          {errors.phone && <span className="text-xxs text-red-500 mt-1 block">{errors.phone}</span>}
        </div>

        {/* Grid for City and Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Select Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white ${
                errors.service ? "border-red-500 bg-red-50/10" : "border-gray-200"
              }`}
            >
              <option value="">Choose Service</option>
              {services.map(s => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.service && <span className="text-xxs text-red-500 mt-1 block">{errors.service}</span>}
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-xs font-semibold text-gray-700 mb-1.5">
              Select City *
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white ${
                errors.city ? "border-red-500 bg-red-50/10" : "border-gray-200"
              }`}
            >
              <option value="">Choose City</option>
              {cities.map(c => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.city && <span className="text-xxs text-red-500 mt-1 block">{errors.city}</span>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="e.g. Dimensions of balcony, timing preference, etc."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg shadow-md transition-all hover:shadow-lg active:scale-[0.99] text-xs md:text-sm cursor-pointer"
        >
          <Send className="w-4 h-4" />
          Send Request to WhatsApp
        </button>
      </form>
    </div>
  );
}
