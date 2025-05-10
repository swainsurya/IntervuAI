import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const CardSkeleton = () => {
  return (
    <div className="bg-[#1E1E2D] rounded-2xl border border-gray-800 shadow-md p-5 space-y-5 animate-pulse">
      
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="w-12 h-12 rounded-full bg-[#2A2A3A]" />
          <div className="space-y-1">
            <Skeleton className="w-32 h-4 bg-[#2A2A3A]" />
            <Skeleton className="w-20 h-3 bg-[#2A2A3A]" />
          </div>
        </div>
        <Skeleton className="w-16 h-6 rounded-full bg-[#2A2A3A]" />
      </div>

      {/* Date & Rating */}
      <div className="flex justify-between">
        <Skeleton className="w-24 h-4 bg-[#2A2A3A]" />
        <Skeleton className="w-20 h-4 bg-[#2A2A3A]" />
      </div>

      {/* Tech stack text */}
      <div className="space-y-2">
        <Skeleton className="w-full h-3 bg-[#2A2A3A]" />
        <Skeleton className="w-5/6 h-3 bg-[#2A2A3A]" />
        <Skeleton className="w-3/4 h-3 bg-[#2A2A3A]" />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-full bg-[#2A2A3A]" />
          <Skeleton className="h-8 w-8 rounded-full bg-[#2A2A3A]" />
        </div>
        <Skeleton className="w-24 h-8 rounded bg-[#2A2A3A]" />
      </div>
    </div>
  );
};

export default CardSkeleton;
