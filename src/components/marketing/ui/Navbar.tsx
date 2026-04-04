"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-effect rounded-2xl shadow-soft border border-slate-200/60">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-sm group-hover:shadow-md transition-smooth">
              <span className="text-white font-bold text-lg leading-none">U</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Unidash</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-smooth outline-none px-3 py-2 rounded-lg hover:bg-slate-100/80 data-[state=open]:bg-slate-100/80 data-[state=open]:text-slate-900">
                <span>About</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-data-[state=open]:rotate-180 transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-large rounded-xl mt-2 animate-in fade-in zoom-in-95 duration-200">
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-smooth focus:bg-slate-50 focus:text-slate-900 group">
                  <Link href="/about/overview" className="w-full flex flex-col">
                    <span className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Overview</span>
                    <span className="text-xs text-slate-500 mt-0.5">Learn about our core mission</span>
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-slate-100 my-1 mx-2"></div>
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-smooth focus:bg-slate-50 focus:text-slate-900">
                  <Link href="/about/students" className="w-full font-semibold text-slate-800">For Students & Parents</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-smooth focus:bg-slate-50 focus:text-slate-900">
                  <Link href="/about/schools" className="w-full font-semibold text-slate-800">For Counselors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-smooth focus:bg-slate-50 focus:text-slate-900">
                  <Link href="/about/universities" className="w-full font-semibold text-slate-800">For Universities</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center space-x-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-smooth outline-none px-3 py-2 rounded-lg hover:bg-slate-100/80 data-[state=open]:bg-slate-100/80 data-[state=open]:text-slate-900">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-data-[state=open]:rotate-180 transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-large rounded-xl mt-2 animate-in fade-in zoom-in-95 duration-200">
                <DropdownMenuItem asChild className="p-3 rounded-lg cursor-pointer transition-smooth hover:bg-slate-50 focus:bg-slate-50 focus:text-slate-900">
                  <Link href="/resources/blog" className="w-full font-semibold text-slate-800">Blog & Insights</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 rounded-lg cursor-pointer transition-smooth hover:bg-slate-50 focus:bg-slate-50 focus:text-slate-900">
                  <Link href="/resources/guides" className="w-full font-semibold text-slate-800">Admission Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 rounded-lg cursor-pointer transition-smooth hover:bg-slate-50 focus:bg-slate-50 focus:text-slate-900">
                  <Link href="/resources/university-search" className="w-full font-semibold text-slate-800">University Search</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/faq" 
              className={`text-sm font-semibold transition-smooth px-3 py-2 rounded-lg ${
                isActive("/faq") ? "text-primary bg-primary/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-semibold transition-smooth px-3 py-2 rounded-lg ${
                isActive("/contact") ? "text-primary bg-primary/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900 font-bold transition-smooth px-2 py-2">
              Sign In
            </Link>
            <Button className="rounded-full bg-primary text-white shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 font-semibold px-6">
              Create Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-smooth"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200/60 bg-white/50 backdrop-blur-lg rounded-b-2xl animate-in slide-in-from-top-2 duration-200 overflow-hidden">
            <nav className="flex flex-col p-6 space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">About Unidash</p>
                <Link href="/about/overview" className="block text-slate-800 font-semibold hover:text-primary transition-colors">Overview</Link>
                <Link href="/about/students" className="block text-slate-800 font-semibold hover:text-primary transition-colors">For Students & Parents</Link>
                <Link href="/about/schools" className="block text-slate-800 font-semibold hover:text-primary transition-colors">For Counselors</Link>
                <Link href="/about/universities" className="block text-slate-800 font-semibold hover:text-primary transition-colors">For Universities</Link>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resources</p>
                <Link href="/resources/blog" className="block text-slate-800 font-semibold hover:text-primary transition-colors">Blog & Insights</Link>
                <Link href="/resources/guides" className="block text-slate-800 font-semibold hover:text-primary transition-colors">Admission Guides</Link>
                <Link href="/faq" className="block text-slate-800 font-semibold hover:text-primary transition-colors">FAQ</Link>
                <Link href="/contact" className="block text-slate-800 font-semibold hover:text-primary transition-colors">Contact</Link>
              </div>

              <div className="pt-6 border-t border-slate-200/50 flex flex-col space-y-3">
                <Button variant="outline" className="w-full font-bold border-slate-300 rounded-xl">Sign In</Button>
                <Button className="w-full font-bold bg-primary text-white rounded-xl shadow-soft">Create Account</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};