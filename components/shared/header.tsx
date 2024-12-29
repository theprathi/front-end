"use client";

import Image from "next/image";

interface HeaderProps {
  title: string;
  showGreeting?: boolean;
}

export function Header({ title, showGreeting = false }: HeaderProps) {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-xl font-semibold">
          {showGreeting ? "👋 Hey, " : ""}{title}
        </h1>
      </div>
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Profile"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
}