import { cn } from "@/lib/utils";

export default function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
