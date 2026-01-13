// components/ui/Button.tsx
"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[#5E5D47] text-white hover:bg-[#86886A]",
    secondary: "bg-[#86886A] text-white hover:bg-[#5E5D47]",
    outline: "border border-[#5E5D47] text-[#5E5D47] hover:bg-[#5E5D47] hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}