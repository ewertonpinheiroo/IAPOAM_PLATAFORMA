import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "success" | "warning" | "info";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#044217] text-white",
    success: "bg-[#62B67F] text-white",
    warning: "bg-[#DBE89C] text-[#044217]",
    info: "bg-[#E5EEE2] text-[#044217] border border-[#62B67F]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}