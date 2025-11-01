"use client"

import * as React from "react"
import { cn } from "../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // ✅ 블랙 계열 디자인
          "flex h-10 w-full rounded-xl border border-zinc-700 bg-zinc-900/80",
          "px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500",
          "shadow-sm transition-all duration-150 ease-in-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/50 focus-visible:border-zinc-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-zinc-600 hover:bg-zinc-900",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
) as React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>

Input.displayName = "Input"

export { Input }
