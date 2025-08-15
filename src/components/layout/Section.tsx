// src/components/layout/Section.tsx
import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // 'section' | 'div' | etc. (no JSX namespace)
  id?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className,
  as: Tag = "section",
  id,
  ...rest
}: SectionProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      id={id}
      className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
