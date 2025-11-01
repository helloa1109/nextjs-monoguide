"use client";

import * as React from "react";
import { cn } from "../lib/utils";

type Variant = "default" | "secondary" | "outline" | "ghost" | "destructive";
type Size = "default" | "sm" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appName?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      appName,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<Variant, string> = {
      default:
        "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 border border-transparent",
      secondary:
        "bg-zinc-700 text-zinc-100 hover:bg-zinc-600 border border-transparent",
      outline:
        "border border-zinc-700 text-zinc-100 hover:bg-zinc-800/50 bg-transparent",
      ghost:
        "text-zinc-300 hover:bg-zinc-800 hover:text-white border border-transparent",
      destructive:
        "bg-red-600 text-white hover:bg-red-500 border border-transparent",
    };

    const sizes: Record<Size, string> = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        onClick={() =>
          appName && alert(`Hello from your ${appName} app!`)
        }
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
