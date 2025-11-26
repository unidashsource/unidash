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
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold text-foreground">Unidash</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth outline-none">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card">
                <DropdownMenuItem asChild>
                  <Link href="/about/overview" className="w-full cursor-pointer">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/students" className="w-full cursor-pointer">For Students & Parents</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/schools" className="w-full cursor-pointer">For Schools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/universities" className="w-full cursor-pointer">For Universities</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth outline-none">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card">
                <DropdownMenuItem asChild>
                  <Link href="/resources/blog" className="w-full cursor-pointer">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources/guides" className="w-full cursor-pointer">Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources/university-search" className="w-full cursor-pointer">University Search</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/faq" 
              className={`text-foreground hover:text-primary transition-smooth ${
                isActive("/faq") ? "text-primary font-medium" : ""
              }`}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className={`text-foreground hover:text-primary transition-smooth ${
                isActive("/contact") ? "text-primary font-medium" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm">
              Get Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-smooth"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/about/overview" className="text-foreground hover:text-primary transition-smooth">
                About - Overview
              </Link>
              <Link href="/about/students" className="text-foreground hover:text-primary transition-smooth">
                For Students & Parents
              </Link>
              <Link href="/about/schools" className="text-foreground hover:text-primary transition-smooth">
                For Schools
              </Link>
              <Link href="/about/universities" className="text-foreground hover:text-primary transition-smooth">
                For Universities
              </Link>
              <Link href="/resources/blog" className="text-foreground hover:text-primary transition-smooth">
                Blog
              </Link>
              <Link href="/resources/guides" className="text-foreground hover:text-primary transition-smooth">
                Guides
              </Link>
              <Link href="/resources/university-search" className="text-foreground hover:text-primary transition-smooth">
                University Search
              </Link>
              <Link href="/faq" className="text-foreground hover:text-primary transition-smooth">
                FAQ
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
              <Button variant="secondary" size="sm" className="mt-4 w-fit">
                Get Early Access
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};