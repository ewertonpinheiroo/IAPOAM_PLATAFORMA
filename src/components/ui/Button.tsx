"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-[#044217] text-white hover:bg-[#044217]/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-[#62B67F] text-white hover:bg-[#62B67F]/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0",
      outline:
        "border-2 border-[#044217] text-[#044217] hover:bg-[#044217] hover:text-white shadow-sm hover:shadow-md",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";