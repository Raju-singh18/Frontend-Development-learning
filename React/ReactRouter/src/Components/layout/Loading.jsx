 import React from 'react';

export const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative flex flex-col gap-4 items-center">
        {/* Animated logo circle */}
        <div className="w-20 h-20 border-8 border-t-red-600 border-b-red-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>

        {/* Animated shimmer bar */}
        <div className="w-48 h-4 bg-zinc-800 rounded overflow-hidden relative">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
        </div>

        {/* Text loading animation */}
        <div className="text-red-600 text-lg font-semibold tracking-widest animate-pulse uppercase">
          Loading...
        </div>
      </div>
    </div>
  );
};
