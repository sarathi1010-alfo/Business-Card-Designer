"use client";

import { useEffect, useState } from "react";

interface AdSlotProps {
  type?: 'leaderboard' | 'rectangle';
  className?: string;
}

export function AdSlot({ type = 'leaderboard', className = '' }: AdSlotProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    // Logic to push AdSense here if needed
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  const dimensions = type === 'leaderboard'
    ? 'w-full max-w-[728px] h-[90px] md:h-[90px] h-[50px] mx-auto'
    : 'w-[300px] h-[250px] md:w-[336px] md:h-[280px]';

  return (
    <div className={`bg-muted/50 border border-dashed border-muted-foreground/20 rounded flex items-center justify-center text-muted-foreground text-xs ${dimensions} ${className}`}>
      <span>Ad Placement ({type})</span>
    </div>
  );
}