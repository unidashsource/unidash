"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, CheckCircle2 } from "lucide-react";
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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-extrabold text-xl">U</span>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">Unidash</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1.5 text-slate-600 font-semibold hover:text-slate-900 transition-colors outline-none py-2">
                <span>About</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white border border-slate-200 shadow-xl rounded-xl">
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/about/overview" className="w-full">
                    <div className="font-semibold text-slate-800">Overview</div>
                    <div className="text-xs text-slate-500 mt-0.5">Learn about our mission</div>
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-slate-100 my-1"></div>
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/about/students" className="w-full">
                    <div className="font-semibold text-slate-800">For Students & Parents</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/about/schools" className="w-full">
                    <div className="font-semibold text-slate-800">For Counselors</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/about/universities" className="w-full">
                    <div className="font-semibold text-slate-800">For Universities</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1.5 text-slate-600 font-semibold hover:text-slate-900 transition-colors outline-none py-2">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 p-2 bg-white border border-slate-200 shadow-xl rounded-xl">
                <DropdownMenuItem asChild className="p-3 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/resources/blog" className="w-full font-semibold text-slate-800">Blog & Insights</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/resources/guides" className="w-full font-semibold text-slate-800">Admission Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="p-3 rounded-lg cursor-pointer transition-colors focus:bg-slate-50 focus:text-slate-900 data-[highlighted]:bg-slate-50">
                  <Link href="/resources/university-search" className="w-full font-semibold text-slate-800">University Search</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/faq" 
              className={`font-semibold transition-colors py-2 ${
                isActive("/faq") ? "text-primary" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`font-semibold transition-colors py-2 ${
                isActive("/contact") ? "text-primary" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-slate-600 hover:text-slate-900 font-bold transition-colors">
              Sign In
            </Link>
            <Button className="font-bold shadow-md hover:shadow-lg transition-all">
              Create Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white absolute left-0 w-full px-6 shadow-xl">
            <nav className="flex flex-col space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">About Unidash</p>
                <Link href="/about/overview" className="block text-slate-800 font-semibold hover:text-primary">Overview</Link>
                <Link href="/about/students" className="block text-slate-800 font-semibold hover:text-primary">For Students & Parents</Link>
                <Link href="/about/schools" className="block text-slate-800 font-semibold hover:text-primary">For Counselors</Link>
                <Link href="/about/universities" className="block text-slate-800 font-semibold hover:text-primary">For Universities</Link>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Resources</p>
                <Link href="/resources/blog" className="block text-slate-800 font-semibold hover:text-primary">Blog & Insights</Link>
                <Link href="/resources/guides" className="block text-slate-800 font-semibold hover:text-primary">Admission Guides</Link>
                <Link href="/faq" className="block text-slate-800 font-semibold hover:text-primary">FAQ</Link>
                <Link href="/contact" className="block text-slate-800 font-semibold hover:text-primary">Contact</Link>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <Button variant="outline" className="w-full font-bold border-slate-300">Sign In</Button>
                <Button className="w-full font-bold">Create Account</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};