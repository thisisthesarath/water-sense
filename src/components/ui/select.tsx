"use client"; // Ensures it's treated as a Client Component

import { cn } from "@/lib/utils";
import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        className={cn(
          "w-full appearance-none rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-dark-3 dark:bg-dark-2 dark:text-white",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
        ▼
      </div>
    </div>
  );
}

export function SelectItem({ className, value, children, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) {
  return (
    <option className={cn("text-neutral-900 dark:text-white", className)} value={value} {...props}>
      {children}
    </option>
  );
}
