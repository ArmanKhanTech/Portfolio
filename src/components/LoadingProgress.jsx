import React, { memo } from "react";

const LoadingProgress = memo(({ progress }) => (
    <div className="fixed inset-0 w-full h-full z-[9999]">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
        <div className="relative h-full w-full flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
                <p className="text-5xl font-bold orange-gradient-text">
                    {Math.round(progress)}%
                </p>
                <p className="orange-gradient-text text-2xl">Loading Experience</p>
            </div>
            <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    </div>
));

export default LoadingProgress;