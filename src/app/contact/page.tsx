import React from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Map } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Contact Us | AJ Safe Net Solutions",
  description: "Get in touch with Owner Ajay for immediate safety net & invisible grill installation quotes in Vijayawada. Call +91 99893 91930."
};

export default function Contact() {
  const phone = "+919989391930";
  const email = "ajsafenetsolutions@gmail.com";
  
  const contacts = [
    {
      label: "Phone Support",
      value: phone,
      href: `tel:${phone}`,
      desc: "Call Owner Ajay directly for quick rates.",
      icon: Phone
    },
    {
      label: "WhatsApp Support",
      value: "Chat Instantly",
      href: `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi%20AJ%20Safe%20Net%20Solutions,%20I%20am%20interested%20in%20a%20free%20site%20visit.`,
      desc: "Send your balcony photos for instant estimates.",
      icon: MessageSquare
    },
    {
      label: "Email Support",
      value: email,
      href: `mailto:${email}`,
      desc: "For commercial corporate enquiries.",
      icon: Mail
    },
    {
      label: "Business Hours",
      value: "8:00 AM - 9:00 PM",
      href: null,
      desc: "Open all days of the week, including Sundays.",
      icon: Clock
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 md:space-y-16 animate-fade-reveal">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-xxs font-bold text-primary bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          Get In Touch
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy mb-4">
          Contact AJ Safe Net Solutions
        </h1>
        <p className="text-xs md:text-sm text-gray-500">
          Have an inquiry, need a customized price quote, or want to schedule a free balcony safety measurement? Connect with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contacts.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="bg-gray-50/50 border border-gray-100 p-5 rounded-2xl flex items-start gap-4">
                  <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="text-xxs font-bold text-gray-400 block">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="text-xs md:text-sm font-bold text-navy hover:text-primary transition-colors truncate block">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-xs md:text-sm font-bold text-navy truncate block">
                        {c.value}
                      </span>
                    )}
                    <p className="text-xxs text-gray-500">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* H.O. Card */}
          <div className="bg-navy text-white rounded-2xl p-6 space-y-5">
            <div className="flex gap-2">
              <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
              <div>
                <span className="text-xxs text-gray-400 block font-bold">Head Office Address</span>
                <span className="text-xs font-semibold leading-relaxed">
                  Benz Circle, MG Road, Vijayawada, Andhra Pradesh, 520010
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-800 flex justify-between items-center">
              <span className="text-xxs text-gray-400 font-medium">GPS: 16.5062° N, 80.6480° E</span>
              <a 
                href="https://maps.google.com/?q=16.5062,80.6480"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white text-xxs font-bold py-2 px-4 rounded-lg flex items-center gap-1.5 transition-all shadow-md"
              >
                <Map className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
            
            <p className="text-xxs text-gray-400 leading-relaxed">
              *Note: We also have local branch offices and distribution setups in Chennai, Bangalore, and Pune for rapid same-day deployments.
            </p>
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:col-span-7">
          <EnquiryForm cardStyle={true} />
        </div>
      </div>

      {/* Map Section */}
      <div className="rounded-3xl overflow-hidden border border-gray-150 shadow-lg h-[350px] relative bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2144705352654!2d80.6480112!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35effa1f7d7593%3A0xe54e38c92a95c814!2sBenz%20Circle%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AJ Safe Net Solutions Location Map"
        ></iframe>
      </div>
    </div>
  );
}
