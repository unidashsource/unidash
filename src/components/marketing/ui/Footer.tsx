import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold text-foreground">Unidash</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              The centralized application platform for Indian higher education. 
              Simplifying university admissions for students, schools, and universities.
            </p>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">About</h4>
            <div className="space-y-3">
              <Link href="/about/overview" className="block text-muted-foreground hover:text-primary transition-smooth">
                Overview
              </Link>
              <Link href="/about/students" className="block text-muted-foreground hover:text-primary transition-smooth">
                For Students & Parents
              </Link>
              <Link href="/about/schools" className="block text-muted-foreground hover:text-primary transition-smooth">
                For Schools
              </Link>
              <Link href="/about/universities" className="block text-muted-foreground hover:text-primary transition-smooth">
                For Universities
              </Link>
            </div>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-3">
              <Link href="/resources/blog" className="block text-muted-foreground hover:text-primary transition-smooth">
                Blog
              </Link>
              <Link href="/resources/guides" className="block text-muted-foreground hover:text-primary transition-smooth">
                Guides
              </Link>
              <Link href="/resources/university-search" className="block text-muted-foreground hover:text-primary transition-smooth">
                University Search
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-3">
              <Link href="/faq" className="block text-muted-foreground hover:text-primary transition-smooth">
                FAQ
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
              <a href="mailto:contact@unidash.co.in" className="block text-muted-foreground hover:text-primary transition-smooth">
                Email Support
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Unidash Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};