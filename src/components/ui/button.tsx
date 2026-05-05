import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-united-gold",
        variant === "primary" &&
          "bg-united-red text-white shadow-aura hover:bg-united-redDark",
        variant === "ghost" &&
          "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-united-gold/60 hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
