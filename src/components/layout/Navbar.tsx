import Link from 'next/link';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'The 3Rs', href: '#3rs' },
    { name: 'Personalized Tips', href: '#tips' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Success Stories', href: '#stories' },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
            <Leaf size={32} />
            <span className="text-2xl font-headline font-semibold">EcoMindful</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
