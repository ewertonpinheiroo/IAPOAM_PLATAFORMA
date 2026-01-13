// components/ui/Badge.tsx
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLDivElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <div className={cn("inline-block px-3 py-1 rounded-full bg-[#5E5D47] text-white text-sm font-medium", className)} {...props} />
  );
}