"use client";

import Link from "next/link";
import { Home, Calendar, History, Settings, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  
  // Show navigation only on main app pages
  const showNavigation = !["/", "/upload", "/review"].includes(pathname);

  if (!showNavigation) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 p-2 sm:p-4 bg-white/80 backdrop-blur-md border-t z-50">
      <div className="flex items-center justify-around max-w-2xl mx-auto">
        <Link href="/medicines" className="nav-link">
          <Home className={`nav-icon ${pathname === '/medicines' ? 'text-primary' : ''}`} />
          <span className="nav-text">Home</span>
        </Link>
        <Link href="/calendar" className="nav-link">
          <Calendar className={`nav-icon ${pathname === '/calendar' ? 'text-primary' : ''}`} />
          <span className="nav-text">Calendar</span>
        </Link>
        <Button 
          variant="default" 
          className="rounded-full -mt-6 sm:-mt-8 shadow-lg bg-[#4CAF50] hover:bg-[#43A047] w-12 h-12 sm:w-14 sm:h-14" 
          size="icon"
        >
          <PlusCircle className="w-6 h-6" />
        </Button>
        <Link href="/history" className="nav-link">
          <History className={`nav-icon ${pathname === '/history' ? 'text-primary' : ''}`} />
          <span className="nav-text">History</span>
        </Link>
        <Link href="/settings" className="nav-link">
          <Settings className={`nav-icon ${pathname === '/settings' ? 'text-primary' : ''}`} />
          <span className="nav-text">Settings</span>
        </Link>
      </div>
    </nav>
  );
}