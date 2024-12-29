"use client";

import Image from "next/image";

export function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]" />
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://i.imgur.com/vLvlUhz.jpeg"
          alt="Sanjeevani Tree"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
          style={{
            objectPosition: 'center 20%'
          }}
        />
      </div>
      <div 
        className="fixed inset-0 -z-10 bg-gradient-radial from-transparent via-[#E8F5E9]/60 to-[#E8F5E9]/80"
        style={{
          background: 'linear-gradient(180deg, rgba(232,245,233,0.9) 0%, rgba(200,230,201,0.85) 50%, rgba(165,214,167,0.8) 100%)'
        }}
      />
    </>
  );
}