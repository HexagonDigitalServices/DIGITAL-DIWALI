import React from 'react';

const CustomButton = ({ to, icon: Icon, children }) => {
    return (
        <div className="mt-4 flex justify-start">
            <button className="relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-2 py-1 text-blue-200 outline-none ring-blue-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-cyan-300 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-cyan-300/40 hover:text-white after:hover:bg-opacity-20 focus:ring-2">
                <div className="flex items-center space-x-2">
                    {Icon && <Icon />}
                    <span>{children}</span>
                </div>
            </button>
        </div>
    );
};

export default CustomButton;