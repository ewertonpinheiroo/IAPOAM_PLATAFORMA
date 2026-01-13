// components/ui/Card.tsx
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

type CardProps = HTMLMotionProps<"div">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("p-6 rounded-xl shadow-md bg-[#1A221E]", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}