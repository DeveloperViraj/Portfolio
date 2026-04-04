"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github, Smartphone, FileText } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import CustomButton from "@/components/custom-btn";

const CONTACT_METHODS = [
  {
    title: "Email",
    desc: "workwithvirajjadhav@gmail.com",
    link: "mailto:workwithvirajjadhav@gmail.com",
    icon: Mail,
    hoverText: "group-hover:text-red-500",
    hoverBg: "group-hover:bg-red-50",
    borderColor: "group-hover:border-red-200",
  },
  {
    title: "LinkedIn",
    desc: "Connect and see my professional network.",
    link: "https://www.linkedin.com/in/viraj-jadhav-698641376/",
    icon: Linkedin,
    hoverText: "group-hover:text-blue-600",
    hoverBg: "group-hover:bg-blue-50",
    borderColor: "group-hover:border-blue-200",
  },
  {
    title: "GitHub",
    desc: "Explore my open-source PRs and repositories.",
    link: "https://github.com/DeveloperViraj",
    icon: Github,
    hoverText: "group-hover:text-gray-900",
    hoverBg: "group-hover:bg-gray-100",
    borderColor: "group-hover:border-gray-300",
  },
  {
    title: "WhatsApp & Phone",
    desc: "Available for direct chats and calls.",
    // 🚨 IMPORTANT: Replace the X's with your actual phone number (include country code, e.g., 91 for India)
    link: "https://wa.me/917385304644", 
    icon: Smartphone,
    hoverText: "group-hover:text-emerald-500", // WhatsApp Green
    hoverBg: "group-hover:bg-emerald-50",
    borderColor: "group-hover:border-emerald-200",
  },
];

export default function ContactPage() {
  
  const handleResumeClick = () => {
    // Opens your resume in a new tab
    window.open("https://drive.google.com/file/d/1wM-2u8LC25kShHC8Obzfa9frNPZhtTH_/view?usp=sharing", "_blank");
  };

  return (
    <div className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-20 overflow-hidden bg-white">
      
      {/* Signature Pastel Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[70%] h-[600px] blur-[100px] opacity-40 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #fbcfe8 0%, #bae6fd 40%, #fef08a 80%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center">
        
        <SectionHeading
          primaryHeading="Let’s Connect"
          secondHeading="Tell me about your team"
          paragraph="I am currently seeking full-time Software Engineering opportunities. Let's discuss how I can bring value to your engineering team."
        />

        {/* Engineer-Focused Social Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-16 max-w-3xl mx-auto">
          {CONTACT_METHODS.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={contact.link} target="_blank">
                <div className={`p-6 bg-white/60 backdrop-blur-md group shadow-sm border border-gray-100 rounded-2xl flex items-center gap-5 transition-all duration-300 cursor-pointer ${contact.borderColor} hover:shadow-md`}>
                  
                  {/* Icon Container with dynamic hover color */}
                  <div className={`p-3 rounded-xl transition-colors duration-300 bg-gray-50 text-gray-500 ${contact.hoverBg} ${contact.hoverText}`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1 text-left">
                    <p className="text-lg font-serif font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                      {contact.title}
                    </p>
                    <p className="text-sm font-light text-gray-500 mt-0.5 line-clamp-1">
                      {contact.desc}
                    </p>
                  </div>
                  
                  {/* Animated Arrow */}
                  <ArrowRight className={`h-5 w-5 text-gray-300 transition-all duration-300 group-hover:-rotate-45 ${contact.hoverText}`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col items-center justify-center gap-4"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 block">
            Want to see my qualifications?
          </span>
          <CustomButton
            icon={FileText}
            onClick={handleResumeClick}
            label="View Full Resume"
          />
        </motion.div>
      </div>
    </div>
  );
}