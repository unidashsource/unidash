import Link from "next/link";
import { CheckCircle2, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pb-8 pt-16 mt-auto">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Branding */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-xl">U</span>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Unidash</span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed pr-4">
              The centralized application platform for Indian higher education. A unified framework designed for scale, security, and simplicity.
            </p>
            <div className="flex items-center space-x-2 text-sm font-medium text-slate-400 bg-slate-800/50 w-fit px-3 py-1.5 rounded-lg border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Verified Secure Platform</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-6 space-y-5">
            <h4 className="font-bold text-white tracking-wide">Platform</h4>
            <div className="space-y-3">
              <Link href="/about/overview" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Mission & Overview
              </Link>
              <Link href="/about/students" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                For Students 
              </Link>
              <Link href="/about/schools" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                For Schools
              </Link>
              <Link href="/about/universities" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                For Universities
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 space-y-5">
            <h4 className="font-bold text-white tracking-wide">Resources</h4>
            <div className="space-y-3">
              <Link href="/resources/blog" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Blog
              </Link>
              <Link href="/resources/guides" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Admission Guides
              </Link>
              <Link href="/resources/university-search" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                University List
              </Link>
              <Link href="/faq" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">
                FAQ Center
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-5">
            <h4 className="font-bold text-white tracking-wide">Connect With Us</h4>
            <div className="space-y-3">
              <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                Contact Enterprise <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"/>
              </Link>
              <a href="mailto:partnerships@unidash.co.in" className="flex items-center text-slate-400 hover:text-white transition-colors text-sm font-medium group">
                <Mail className="w-4 h-4 mr-2 text-slate-500 group-hover:text-white transition-colors"/> partnerships@unidash.co.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Unidash Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};